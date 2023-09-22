import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { editItem } from '../slice/itemSlice';

const ItemFilter = () => {
    const { editedItem  } = useAppSelector((state: RootState) => state.item);
    const dispatch = useAppDispatch();

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        dispatch(editItem({...editedItem, itemClass: value}))

    }

  return (
         <div className='mx-2 flex'>
          <h1 className=' ml-5 font-bold text-2xl font-primary'>
              {/* itemIdが０ならば、「新規登録」と表示 */}
              {editedItem.itemId ? "内容参照" : "新規登録"}
          </h1>  
          <div className='mx-2'>
            <div className='mt-1'>
                <label className="label-text">
                  ★種別★   &emsp;
                  {/* <input type="text" name = "itemClass" placeholder={"入力"} value = {editedItem.itemClass} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" /> */}
                  <select className="select select-bordered select-xs w-40 max-w-xs mx-1" placeholder={"選択"} value={editedItem.itemClass} onChange = {handleSelectChange}> 
                      { editedItem.itemClass === "新規登録" ? 
                      <option selected>新規登録</option> :
                      <>
                      <option selected ></option>
                      <option value={"継続（変更なし）"}>継続（変更なし）</option>
                      <option value={"内容変更"}>内容変更</option>
                      <option value={"金額変更"}>金額変更</option>
                      </>
                      }
                  </select>
                </label>
            </div>
          </div>
    </div>
  )
}

export default ItemFilter