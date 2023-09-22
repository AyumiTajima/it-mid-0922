/**testSlice */
export interface TEXT_TEXT {
    id: number;
    text1: string;
    text2: string;
}

export interface TODOS {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export interface TEST_STATE {
    selectedTexttext: TEXT_TEXT;
    texttext: TEXT_TEXT;
    texttexts: TEXT_TEXT[];
    todos: TODOS[];
}




/**authSlice */
export interface LOGIN_USER {
    userId: string;
    password: string;
}

export interface CRED {
    username: string,
    password: string,
}

// export interface JWT {
//     refresh: string,
//     access: string,
// }

export interface USER {
    department: string,             //部署名　string
    givenName: string,              //名前　　string
    sn: string,                     //部署コード　string
    title: string,                  //役職　　string
}



export interface AUTH_STATE {
    loginUser: LOGIN_USER,
    user: USER,
   

}

/**itemSlice */
export interface READ_ITEM {
        
        ITMTPId: number,                            //IT中計ID（IT Mid-term Manegement Plan）      number
        //ITMTPmainId?: number,                         //IT中計サブID（IT Mid-term Manegement Plan）      number
        ITMTPsubId?: number,                         //IT中計サブID（IT Mid-term Manegement Plan）      number
        budgetId?: number,			          //予算ID　　　number
        statusName: string,                   //絞込み　ステータス名称　  string
        itemStatus?: string,                  //ステータス  string       
        name: string,                         //担当者名    string
        // departmentCoad:string,                //部署コード        string
        department: string,                   //部署        string
        title: string,                        //案件名     string
        invest: number[],                     //投資金額　初年度＋〇年分     number[]
        expenses: number[],                   //経費金額　初年度＋〇年分     number[]
        judgement: string,                    //一次判定    string? number? masterもちさせるなら、number
        finalJudgement: string,               //最終判定    string? number? masterもちさせるなら、number
        monthlyCost: string,                  //月割り    string? number? masterもちさせるなら、number
        plannedYear: null | number,                //登録年度    string? number? masterもちさせるなら、number

    }


export interface YEAR {
    year: string[]
}

export interface MASTER {}


export interface ORGANIZE_MASTER  {
    code: string,                               //部署コード string
    division: string,                           //部門       string    
    department: string,                         //室       　string  
    group: string,                               //グループ   string
}


export interface USER_MASTER {
    section: string[],        //部門        string[]
    division: string[],       //部        　string[]
    department: string[],      //室      　  string[]
    group:string[],       　 //グループ    string[]
    code: string[],        　 //組          string[]
}

export interface LIST_BUTTON_STATUS {
    approvalRequest: null | string,   　 //承認依頼        null || string
    decline: null | string,       　     //却下          　null || string
    listApproval: null | string,     　  //リスト承認      null || string
    judgementApproval: null | string,    //判定承認        null || string
    rejudgement: null | string,          //再審         　 null || string
    listCancel: null | string,           //解除      　    null || string
    judgementComplete: null | string,    //判定完了   　　  null || string
    confirm: null | string,              //確定            null || string

}
export interface LIST_BUTTON_NEXT_STATUS {
    approvalRequest: null | string,   　 //承認依頼        null || string
    decline: null | string,       　     //却下          　null || string
    listApproval: null | string,     　  //リスト承認      null || string
    judgementApproval: null | string,    //判定承認        null || string
    rejudgement: null | string,          //再審         　 null || string
    listCancel: null | string,           //解除      　    null || string
    judgementComplete: null | string,    //判定完了   　　  null || string
    confirm: null | string,              //確定            null || string

}

export interface LIST_FILTER_SERECTED {

        itemStatus: null | string[],                         //ステータス  string
        section:null | string[],                             //部門        string[]
        division:null | string[],                            //部        　string[]
        department:null | string[],                          //室      　  string[]
        group:null | string[],                               //グループ    string[]
        judgement: null | string[],                              //一次判定    string
        finalJudgement: null | string[],                     //最終判定    string

}


export interface ITEM {
    itemId: number
    itemMTPMainId: number,                   //IT中計ID（IT Mid-term Manegement Plan）      number
    itemMTPSubId: number,                    //IT中計サブID（IT Mid-term Manegement Plan）      number
    // budgetId: {},	                     //予算ID　　　number
    wholeStatusCode: string,                   //全体ステータスコード  string
    individualStatusCode:string              //個別ステータスコード
    individualStatusName: string,                   //個別ステータスの名前  string
    itemClass: string,		              	//種別        string
    jinmaiName: string,                         //担当者名    string
    departmentCode: string,               //部署コード  string
    divisionName: string,                 //部名
    departmentName: string,               //室名        string
    groupName: string,                    //グループ名
    codeName: string,                    //組名
    itemName:string,    //案件名     string
    phone: string,                        //電話
    budgetNo: string,                     //予算No      string
    billNo: string,                       //決裁No     string       string
    budget: [{
        budgetId: number,	                     //予算ID　　　number
        item: number,                           //itemIdと同値　number
        fiscalYear: number,                     //対象年度　　　　　number
        investForHard: number,                  //投資ハード　　number
        investForSoft:number,                   //投資ソフト　　number
        investTotal:number,                     //投資総額　　　number
        expenses:number,                        //経費総額      number
    },],
    lossCost: string,                   //年間効果    string
    recoveryMonths: string,             //投資回収年月    string
    file: string,                       //説明資料    string ファイル名
        subFiles: [{
            id:(number | null),                    //サブファイルID
            path:string                     //サブファイルパス
        }],                 //添付資料    string[] ファイル名
    priority: string,                   //優先順位    string
    newScheme: boolean,                 //新スキーム  boolean
    deliberation: boolean,              //審議会      boolean
    investPurpose: string,              //投資目的    string 
    emergency: string,                  //緊急度      string
    investmentEfficiancy: string,                 //投資効率    string 
    digitalize: boolean,                //デジタル化  boolean
    transformation: boolean,            //変革的改善  boolean
    workStyleReform: boolean,           //働き方改革  boolean
    tmcSync: boolean,                    //TMC同期      boolean
    tyUnique: boolean,                  //TY独自      boolean
    policy: string,                    	//方針軸でのグループ化  boolean　
    investReason: string,                 //分類        string　
    judgement: string,                    //一次判定    string? number? masterもちさせるなら、number
    finalJudgement: string,               //最終判定    string? number? masterもちさせるなら、number
    monthlyCost: string
    judgementMemo: string,                //メモ        string
    DXIT: string,                         //ITorDX      string 区分？
    rate: string,                	      	//評価ランク   string 
    itemComment: string,                  //新規登録時のコメント  string
    pullBuckComment: string,              //引き戻しコメント  string
    declineComment: string,               //却下コメント  string
    judgementComment: string,             //判定コメント  string
    approvalRouteComment: string,	      	//承認ルートコメント  string
    approver1: string,                    //承認者1 string[]
    approver1Code: string,               //承認者1のコード string
    approver2: string,                    //承認者2  string
    approver2Code: string,               //承認者2のコード  string
    approver3: string,                    //承認者3  string
    approver3Code: string,               //承認者3のコード  string
    plannedYear: string,
}


// //仮に。。。
// export interface APPROVER {
//     name: string[],
//     code: string[],
// }

export interface SELECTED {
    division: string,
    department: string,
    group: string,
    code: string,
    judgement: string,
    finalJudgement: string,
    plannedYear: string,
    departmentForAdmin: string,
}

export interface AMOUNT {
    itemsAmount: number,                     //リストに表示される数
    applicationAmount: number,               //申請待ちの数
    itemApprovalAmount: number,              //承認待ちの数
    listApprovalAmount: number,              //リスト承認待ちの数
    judgementAmount: number,                 //一次判定待ちの数
    judgementApprovalAmount: number,         //提案部署承認待ちの数
    finalJudgementAmount: number,            //最終判定待ちの数
    finalJudgementConfirmAmount: number,     //主管部署確認待ちの数
    monthlyCostApplicationAmount: number,    //月割り申請待ちの数
    monthlyCostApprovalAmount: number,       //月割り承認待ちの数

}

//stateの型（まとめたもの）
//-----itemSlice-----//
export interface ITEM_STATE {
    items: ITEM[];
    editedItem: ITEM;
    selected: SELECTED;
    amount: AMOUNT;
}


//-----listSlice-----//
export interface LIST_STATE {
    items: READ_ITEM[],
    beingYear: number[],
    header: YEAR,
    master: {
        organizeMaster: ORGANIZE_MASTER[],
    },
    listButtonStatus: LIST_BUTTON_STATUS,
    listButtonNextStatus: LIST_BUTTON_NEXT_STATUS,
    amount:number,
    filterSerected:LIST_FILTER_SERECTED
}

//ラジオボタン
//ラジオボタンの項目の型を定義
export interface RADIO {
    label: string,
    value: string
  }
  

