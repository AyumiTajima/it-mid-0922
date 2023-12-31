import { createSlice,PayloadAction, createAsyncThunk, AnyAction, Dispatch } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import initialData from "../../damydata/initialData";
import axios from "axios"
import { ITEM, ITEM_STATE, READ_ITEM, USER_MASTER } from "../../Types";
import { AsyncThunkFulfilledActionCreator } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { ok } from "assert";

//---------初期値設定---------//
export const initialState: ITEM_STATE = {

    items: [{
        itemId: 0,
        itemMTPMainId: 0,                   //IT中計ID（IT Mid-term Manegement Plan）      number
        itemMTPSubId: 0,                    //IT中計サブID（IT Mid-term Manegement Plan）      number
        // budgetId: {},	                     //予算ID　　　number
        wholeStatusCode: "",                   //全体ステータスコード  string
        individualStatusCode:"",              //個別ステータスコード
        individualStatusName: "",                   //個別ステータスの名前  string
        itemClass: "",		              	//種別        string   
        jinmaiName: "",                         //担当者名    string
        departmentCode: "",               //部署コード  string
        divisionName: "",                 //部名
        departmentName: "",               //室名        string
        groupName: "",                    //グループ名
        codeName:  "",                    //組名
        itemName: "",    //案件名     string
        phone: "",                        //電話
        budgetNo: "",                     //予算No      string
        billNo: "",                       //決裁No     string       string
        budget: [{
            budgetId: 0,	                     //予算ID　　　number
            item: 0,                           //itemIdと同値　number
            fiscalYear: 0,                     //対象年度　　　　　number
            investForHard: 0,                  //投資ハード　　number
            investForSoft:0,                   //投資ソフト　　number
            investTotal:0,                     //投資総額　　　number
            expenses:0,                        //経費総額      number
        },],
        lossCost: "",                   //年間効果    string
        recoveryMonths: "",             //投資回収年月    string
        file: "",                       //説明資料    string ファイル名
        subFiles: [{
            id:null,                    //サブファイルID
            path:""                     //サブファイルパス
        }],                 //添付資料    string[] ファイル名
        priority: "",                   //優先順位    string
        newScheme: false,                 //新スキーム  boolean
        deliberation: false,              //審議会      boolean
        investPurpose: "",              //投資目的    string 
        emergency: "",                  //緊急度      string
        investmentEfficiancy: "",                 //投資効率    string 
        digitalize: false,                //デジタル化  boolean
        transformation: false,            //変革的改善  boolean
        workStyleReform: false,           //働き方改革  boolean
        tmcSync: false,                    //TMC同期      boolean
        tyUnique: false,                  //TY独自      boolean
        policy: "",                    	//方針軸でのグループ化  boolean　
        investReason: "",                 //分類        string　
        judgement: "",                    //一次判定    string? number? masterもちさせるなら、number
        finalJudgement: "",               //最終判定    string? number? masterもちさせるなら、number
        monthlyCost: "",
        judgementMemo: "",                //メモ        string
        DXIT: "",                         //ITorDX      string 区分？
        rate: "",                	      	//評価ランク   string 
        itemComment: "",                  //新規登録時のコメント  string
        pullBuckComment: "",              //引き戻しコメント  string
        declineComment: "",               //却下コメント  string
        judgementComment: "",             //判定コメント  string
        approvalRouteComment: "",	      	//承認ルートコメント  string
        approver1: "",                    //承認者1 string[]
        approver1Code: "",               //承認者1のコード string
        approver2: "",                    //承認者2  string
        approver2Code: "",               //承認者2のコード  string
        approver3: "",                    //承認者3  string
        approver3Code: "",               //承認者3のコード  string
        plannedYear: "",
    },],
    
    
    editedItem: {
        itemId: 0,
        itemMTPMainId: 0,                   //IT中計ID（IT Mid-term Manegement Plan）      number
        itemMTPSubId: 0,                    //IT中計サブID（IT Mid-term Manegement Plan）      number
        // budgetId: {},	                     //予算ID　　　number
        wholeStatusCode: "",                   //全体ステータスコード  string
        individualStatusCode:"",              //個別ステータスコード
        individualStatusName: "",                   //個別ステータスの名前  string
        itemClass: "",		              	//種別        string   
        jinmaiName: "",                         //担当者名    string
        departmentCode: "",               //部署コード  string
        divisionName: "",                 //部名
        departmentName: "",               //室名        string
        groupName: "",                    //グループ名
        codeName:  "",                    //組名
        itemName: "",    //案件名     string
        phone: "",                        //電話
        budgetNo: "",                     //予算No      string
        billNo: "",                       //決裁No     string       string
        budget: [{
            budgetId: 0,	                     //予算ID　　　number
            item: 0,                           //itemIdと同値　number
            fiscalYear: 0,                     //対象年度　　　　　number
            investForHard: 0,                  //投資ハード　　number
            investForSoft:0,                   //投資ソフト　　number
            investTotal:0,                     //投資総額　　　number
            expenses:0,                        //経費総額      number
        },],
        lossCost: "",                   //年間効果    string
        recoveryMonths: "",             //投資回収年月    string
        file: "",                       //説明資料    string ファイル名
        subFiles: [{
            id:null,                    //サブファイルID
            path:""                     //サブファイルパス
        }],                 //添付資料    string[] ファイル名
        priority: "",                   //優先順位    string
        newScheme: false,                 //新スキーム  boolean
        deliberation: false,              //審議会      boolean
        investPurpose: "",              //投資目的    string 
        emergency: "",                  //緊急度      string
        investmentEfficiancy: "",                 //投資効率    string 
        digitalize: false,                //デジタル化  boolean
        transformation: false,            //変革的改善  boolean
        workStyleReform: false,           //働き方改革  boolean
        tmcSync: false,                    //TMC同期      boolean
        tyUnique: false,                  //TY独自      boolean
        policy: "",                    	//方針軸でのグループ化  boolean　
        investReason: "",                 //分類        string　
        judgement: "",                    //一次判定    string? number? masterもちさせるなら、number
        finalJudgement: "",               //最終判定    string? number? masterもちさせるなら、number
        monthlyCost: "",
        judgementMemo: "",                //メモ        string
        DXIT: "",                         //ITorDX      string 区分？
        rate: "",                	      	//評価ランク   string 
        itemComment: "",                  //新規登録時のコメント  string
        pullBuckComment: "",              //引き戻しコメント  string
        declineComment: "",               //却下コメント  string
        judgementComment: "",             //判定コメント  string
        approvalRouteComment: "",	      	//承認ルートコメント  string
        approver1: "",                    //承認者1 string[]
        approver1Code: "",               //承認者1のコード string
        approver2: "",                    //承認者2  string
        approver2Code: "",               //承認者2のコード  string
        approver3: "",                    //承認者3  string
        approver3Code: "",               //承認者3のコード  string
        plannedYear: "",
    },

    //フィルター
    selected: {
        division: "",
        department: "",
        group: "",
        code: "",
        judgement: "",
        finalJudgement: "",
        plannedYear: "",
        departmentForAdmin: "",
    },

    //件数表示
    amount: {
        itemsAmount: 0,                     //リストに表示される数
        applicationAmount: 0,               //申請待ちの数
        itemApprovalAmount: 0,              //承認待ちの数
        listApprovalAmount: 0,              //リスト承認待ちの数
        judgementAmount: 0,                 //一次判定待ちの数
        judgementApprovalAmount: 0,         //提案部署承認待ちの数
        finalJudgementAmount: 0,            //最終判定待ちの数
        finalJudgementConfirmAmount: 0,     //主管部署確認待ちの数
        monthlyCostApplicationAmount: 0,    //月割り申請待ちの数
        monthlyCostApprovalAmount: 0,       //月割り承認待ちの数

    }

    //リスト表示用の今年度をセット
    
}

/**非同期関数 */
//--------バックエンドからitems配列を取得する(GET)-----------//
export const fetchAsyncGetItemsData = createAsyncThunk(
    "data/dgetText",
    async () => {
        const res = await axios.get<ITEM[]>(
            `http://pc14661:8000/api/item/`,
            {
                headers: {
                    "Content-type": "application/json",
                }
            }
        )
        console.log(res.data)
        return res.data;
    }
)

//-----リスト表示するitemの一覧を取得 （GET）-----//
//＜＜＜部署で絞り込み＞＞＞//
export const fetchAsyncGetItemsFilteredDepartment = createAsyncThunk(
    "itemsFilteredDepartment/getItem",
    async (department: string) => {
        const res = await axios.get<ITEM[]>(
            `${process.env.REACT_APP_API_URL_ITEM}?department-code = ${department}`,
            {
                headers: {
                    // Authorization: `JWT ${localStorage.localJWT}`,
                },               

            },
        );
        console.log(res.data)
        return res.data;
    }
);

//＜＜＜部署とステータスで絞り込み＞＞＞//
export const fetchAsyncGetItemsFilteredDepStatus = createAsyncThunk(
    "itemsFilteredDepStatus/getItem",
    async (department: string, status) => {
        const res = await axios.get<ITEM[]>(
            //指示の仕方の書き方合わせる（department-code、status-code）
            `${process.env.REACT_APP_API_URL_ITEM}?department-code=${department}&status-code=${status}`,
            {
                headers: {
                    // Authorization: `JWT ${localStorage.localJWT}`,
                },               

            },
        );
        console.log(res.data)
        return res.data;
    }
);

//-----登録・編集するアイテム情報を取得する（GET）-----//
export const fetchAsyncGetEditedItem = createAsyncThunk(
    "editedItem/getItem",
    async (id: number) => {
        const res = await axios.get<ITEM>(
            //この書き方でいい？確認
            `${process.env.REACT_APP_API_URL_ITEM}/${id}`,
            {
                headers: {
                    // Authorization: `JWT ${localStorage.localJWT}`,
                },
            },
        );
        console.log(id)
        console.log(res.data)
        return res.data;
    }
);


//-----新規アイテム登録（POST）-----//
export const fetchAsyncCreateItem = createAsyncThunk(
    "createItem/postItem",
    async (createItem: ITEM) => {
        const res = await axios.post<ITEM>(
            `${process.env.REACT_APP_API_URL_ITEM}`,
            createItem,
            {
                headers: {
                    // Authorization: `JWT ${localStorage.localJWT}`,
                },
            },
        );
        return res.data;
    }
);



//-----既存アイテム更新（PUT）-----//
export const fetchAsyncUpdateItem = createAsyncThunk(
    "updateItem/putItem",
    async (updateItem: ITEM) => {
        const res = await axios.put<ITEM>(
            `${process.env.REACT_APP_API_URL_ITEM}/${updateItem.itemId}`,
            updateItem,
            {
                headers: {
                    "Content-type": "application/json",
                    // Authorization: `JWT ${localStorage.localJWT}`,
                },
            },
        );
        return res.data
    }
);


//-----アイテムをデータベースから削除（DELETE）-----//
export const fetchAsyncDeleteItem = createAsyncThunk(
    "deleteItem/deleteItem",
    async (id: number) => {
        const res = await axios.delete<ITEM>(
            `${process.env.REACT_APP_API_URL_ITEM}/${id}`,
            {
                headers: {
                    "Content-type": "application/json",
                    // Authorization: `JWT ${localStorage.localJWT}`,

                },
            },
        );
        return id;
    }
);

//-----ファイルをデータベースから削除（DELETE）-----//
export const fetchAsyncDeleteFile = createAsyncThunk(
    "deleteFile/deleteFile",
    async (id: number) => {
        const res = await axios.delete<ITEM>(
            `${process.env.REACT_APP_API_URL}/${id}`,
            {
                headers: {
                    "Content-type": "application/json",
                    // Authorization: `JWT ${localStorage.localJWT}`,

                },
            },
        );
        return id;
    }
);




const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
           //-----アイテムをリストから削除する-----//
        //ステータスを変えるコードを書かなくてはいけない
        removeItem: (state, action) => {           
            const itemId: number = action.payload;
            state.items = state.items.filter((item: {itemId: number}) => item.itemId !== itemId);
        },

        //-----リストに表示するitemsの値を更新する-----//
        setListItems:(state, action: PayloadAction<ITEM[]>) => {
            state.items = action.payload
        },

        //-----editedItemの値を更新する------//
        editItem: (state, action: PayloadAction<ITEM>) => {
            state.editedItem = action.payload
        },



        //リストに表示しているアイテムの数をかぞえる
        incrementMapCount:(state) => {
            state.amount.itemsAmount ++;
        }


        //リスト一覧から、削除して、ステートを90に変更する
        // removeItem: (state, action) => {           
        //     const itemId: number = action.payload;
        //     state.items = state.items.filter((item: {itemId: number}) => item.itemId !== itemId);
        // },



        
    
    },
    /**EXTRA REDUCER （非同期関数の後処理）*/
    extraReducers: (builder) => {


    //-----リスト表示するitemの一覧を取得後の処理（GET）-----//
    //＜＜＜部署で絞り込み＞＞＞//
    //＜成功＞
    builder.addCase (       
        fetchAsyncGetItemsFilteredDepartment.fulfilled,           //fetchAsyncGetItems関数でreturnした値をpayloadとして受け取ることができる
        (state: any, action: PayloadAction<ITEM[]>) => {
            return( {
                ...state,
                items: action.payload,
            }
            // window.location.href = "/"
            )
        }
    );
    //＜失敗＞
    builder.addCase(
        fetchAsyncGetItemsFilteredDepartment.rejected, () => {
        window.location.href = "/";
    });

    //＜＜＜部署とステータスで絞り込み＞＞＞//
    //＜成功＞
    builder.addCase (       
        fetchAsyncGetItemsFilteredDepStatus.fulfilled,           //fetchAsyncGetItems関数でreturnした値をpayloadとして受け取ることができる
        (state: any, action: PayloadAction<ITEM[]>) => {
            return( {
                ...state,
                items: action.payload,
            }
            // window.location.href = "/"
            )
        }
    );
    //＜失敗＞
    builder.addCase(
        fetchAsyncGetItemsFilteredDepStatus.rejected, () => {
        window.location.href = "/";
    });


    //-----アイテム情報を取得する（GET）-----//
        //＜成功＞
        builder.addCase (       
            fetchAsyncGetItemsData.fulfilled,           //fetchAsyncGetItems関数でreturnした値をpayloadとして受け取ることができる
            (state, action: PayloadAction<ITEM[]>) => {
                return {
                    ...state,
                    items: action.payload,
                }
            }
        );
        //＜失敗＞
        builder.addCase(
            fetchAsyncGetItemsData.rejected, () => {
            // window.location.href = "/";
            alert("ざんねーん")
        });
    

    //-----登録・編集するアイテム情報を取得する（GET）-----//
    //＜成功＞
    builder.addCase (       
        fetchAsyncGetEditedItem.fulfilled,           //fetchAsyncGetItems関数でreturnした値をpayloadとして受け取ることができる
        (state, action: PayloadAction<ITEM>) => {
            return {
                ...state,
                editedItem: action.payload,
            }
        }
    );
    //＜失敗＞
    builder.addCase(
        fetchAsyncGetEditedItem.rejected, () => {
        // window.location.href = "/";
        alert("ざんねーん")
    });


    //-----新規アイテム登録後の処理（POST）-----//
    //＜成功＞
    builder.addCase (       
        fetchAsyncCreateItem.fulfilled,           //fetchAsyncGetItems関数でreturnした値をpayloadとして受け取ることができる
        (state, action: PayloadAction<ITEM>) => {
            return {
                ...state,
                //あってる？確認
                editedItem: initialState.editedItem,
            }
        }
    );
    //＜失敗＞
    builder.addCase(
        fetchAsyncCreateItem.rejected, () => {
        // window.location.href = "/"
        console.log("失敗")
    });



    //-----既存アイテム更新後の処理（PUT）-----//
    //＜成功＞
    builder.addCase (       
        fetchAsyncUpdateItem.fulfilled,           //fetchAsyncGetItems関数でreturnした値をpayloadとして受け取ることができる
        (state, action: PayloadAction<ITEM>) => {
            return {
                ...state,
                editedItem: initialState.editedItem
            }
        }
    );
    //＜失敗＞
    builder.addCase(
        fetchAsyncUpdateItem.rejected, () => {
        alert("しっぱーい")
        // window.location.href = "/list";
    });


    //-----アイテムをデータベースから削除後の処理（DELETE）-----//
    //＜成功＞
    builder.addCase(
        fetchAsyncDeleteItem.fulfilled,
        (state, action: PayloadAction<number>) => {
            return {
                ...state,
                items: state.items.filter((t) => 
                t.itemId !== action.payload
                ),

            }
        }
    )
    //＜失敗＞
    builder.addCase(
        fetchAsyncDeleteItem.rejected, () => {
        window.location.href = "/";
            });
        },
    });

export const {  editItem, setListItems,  incrementMapCount} = itemSlice.actions; 
export default itemSlice.reducer;