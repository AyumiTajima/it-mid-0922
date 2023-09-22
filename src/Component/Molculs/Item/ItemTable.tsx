import React, { useState } from 'react'
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { editItem } from '../../slice/itemSlice';

const ItemTable = () => {

//   const { editedItem } = useAppSelector((state: RootState) => state.item);
//   const dispatch = useAppDispatch();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target

    // console.log({...editedItem})

//     switch ( name )  {
//       case "investForHard_0": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForHard = [...editedItem.investForHard];
//       console.log(updatedInvestForHard)
//       updatedInvestForHard[0] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForHard: updatedInvestForHard}));
//       };
//       break;
//       case "investForHard_1": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForHard = [...editedItem.investForHard];
//       updatedInvestForHard[1] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForHard: updatedInvestForHard}));
//       };
//       break;
//       case "investForHard_2": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForHard = [...editedItem.investForHard];
//       updatedInvestForHard[2] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForHard: updatedInvestForHard}));
//       };
//       break;
//       case "investForHard_3": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForHard = [...editedItem.investForHard];
//       updatedInvestForHard[3] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForHard: updatedInvestForHard}));
//       };
//       break;
//       case "investForHard_4": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForHard = [...editedItem.investForHard];
//       updatedInvestForHard[4] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForHard: updatedInvestForHard}));
//       };
//       break;
//       case "investForHard_5": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForHard = [...editedItem.investForHard];
//       updatedInvestForHard[5] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForHard: updatedInvestForHard}));
//       };
//       break;
//       case "investForSoft_0": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForSoft = [...editedItem.investForSoft];
//       updatedInvestForSoft[0] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForSoft: updatedInvestForSoft}));
//       };
//       break;
//       case "investForSoft_1": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForSoft = [...editedItem.investForSoft];
//       updatedInvestForSoft[1] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForSoft: updatedInvestForSoft}));
//       };
//       break;
//       case "investForSoft_2": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForSoft = [...editedItem.investForSoft];
//       updatedInvestForSoft[2] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForSoft: updatedInvestForSoft}));
//       };
//       break;
//       case "investForSoft_3": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForSoft = [...editedItem.investForSoft];
//       updatedInvestForSoft[3] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForSoft: updatedInvestForSoft}));
//       };
//       break;
//       case "investForSoft_4": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForSoft = [...editedItem.investForSoft];
//       updatedInvestForSoft[4] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForSoft: updatedInvestForSoft}));
//       };
//       break;
//       case "investForSoft_5": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedInvestForSoft = [...editedItem.investForSoft];
//       updatedInvestForSoft[5] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, investForSoft: updatedInvestForSoft}));
//       };
//       break;
//       case "expenses_0": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedExpenses = [...editedItem.expenses];
//       updatedExpenses[0] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, expenses: updatedExpenses}));
//       };
//       break;
//       case "expenses_1": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedExpenses = [...editedItem.expenses];
//       updatedExpenses[1] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, expenses: updatedExpenses}));
//       };
//       break;
//       case "expenses_2": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedExpenses = [...editedItem.expenses];
//       updatedExpenses[2] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, expenses: updatedExpenses}));
//       };
//       break;
//       case "expenses_3": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedExpenses = [...editedItem.expenses];
//       updatedExpenses[3] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, expenses: updatedExpenses}));
//       };
//       break;
//       case "expenses_4": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedExpenses = [...editedItem.expenses];
//       updatedExpenses[4] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, expenses: updatedExpenses}));
//       };
//       break;
//       case "expenses_5": 
//       if (/^\d+(\.\d*)?$/.test(value) || value === '') {
//       const updatedExpenses = [...editedItem.expenses];
//       updatedExpenses[5] = value === '' ? null : parseFloat(value);
//       dispatch(editItem({...editedItem, expenses: updatedExpenses}));
//       };
//       break;
//     }
//   }

  
 




  return (
    //   <div className="overflow-x-auto mt-1 w-full">
    //     <label className='label-text'>
    //         ♦経費・投資額詳細
    //         <span className="label-text-alt text-accent">＊</span>
    //         <div className='max-h-[300px] max-w-[600px]'>
    //           <table className="table table-xs border w-full">
    //           <thead className='bg-neutral-100 text-center border'>
    //               <tr >
    //               <th className=' border-r'>年度</th> 
    //               <th className=' border-r'>投資：ﾊｰﾄﾞ</th> 
    //               <th className=' border-r'>投資：ｿﾌﾄ</th> 
    //               <th className=' border-r'>経費</th> 
    //               <th >合計</th> 
    //               </tr>
    //           </thead> 
    //           <tbody className=' text-center'>
    //               <tr>
    //               <th className=' border-r'>
    //                   {editedItem.fiscalYear[0]}
    //               </th> 
    //               <td className=' border-r'>
    //                   <input type="text" name = "investForHard_0" placeholder={"半角数字"} value = {editedItem.investForHard[0] === null ? '' : editedItem.investForHard[0]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
    //               </td> 
    //               <td className=' border-r'>
    //                   <input type="text" name = "investForSoft_0" placeholder={"半角数字"} value = {editedItem.investForSoft[0] === null ? '' : editedItem.investForSoft[0]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right"  />
    //               </td> 
    //               <td className=' border-r'>
    //                   <input type="text" name = "expenses_0" placeholder={"半角数字"} value = {editedItem.expenses[0] === null ? '' : editedItem.expenses[0]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
    //               </td> 
    //               <td className=' text-right'>
    //                   <p>{(editedItem.investForHard[0]=== null ? 0 : editedItem.investForHard[0]) + (editedItem.investForSoft[0]=== null ? 0 : editedItem.investForSoft[0]) + (editedItem.expenses[0]=== null ? 0 : editedItem.expenses[0])}</p>
    //               </td> 
    //               </tr>

                  {/* <tr>
                  <th className=' border-r'>
                      {editedItem.fiscalYear[1]}
                  </th> 
                  <td className=' border-r'>
                      <input type="text" name = "investForHard_1" placeholder={"半角数字"} value = {editedItem.investForHard[1] === null ? '' : editedItem.investForHard[1]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "investForSoft_1" placeholder={"半角数字"} value = {editedItem.investForSoft[1] === null ? '' : editedItem.investForSoft[1]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "expenses_1" placeholder={"半角数字"} value = {editedItem.expenses[1] === null ? '' : editedItem.expenses[1]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' text-right'>
                      <p>{(editedItem.investForHard[1]=== null ? 0 : editedItem.investForHard[1]) + (editedItem.investForSoft[1]=== null ? 0 : editedItem.investForSoft[1]) + (editedItem.expenses[1]=== null ? 0 : editedItem.expenses[1])}</p>
                  </td> 
                  </tr>
                  <tr>
                  <th className=' border-r'>
                      {editedItem.fiscalYear[2]}
                  </th> 
                  <td className=' border-r'>
                      <input type="text" name = "investForHard_2" placeholder={"半角数字"} value = {editedItem.investForHard[2] === null ? '' : editedItem.investForHard[2]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "investForSoft_2" placeholder={"半角数字"} value = {editedItem.investForSoft[2] === null ? '' : editedItem.investForSoft[2]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "expenses_2" placeholder={"半角数字"} value = {editedItem.expenses[2] === null ? '' : editedItem.expenses[2]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' text-right'>
                      <p >{(editedItem.investForHard[2]=== null ? 0 : editedItem.investForHard[2]) + (editedItem.investForSoft[2]=== null ? 0 : editedItem.investForSoft[2]) + (editedItem.expenses[2]=== null ? 0 : editedItem.expenses[2])}</p>
                  </td> 
                  </tr>
                  <tr>
                  <th className=' border-r'>
                      {editedItem.fiscalYear[3]}
                  </th> 
                  <td className=' border-r'>
                      <input type="text" name = "investForHard_3" placeholder={"半角数字"} value = {editedItem.investForHard[3] === null ? '' : editedItem.investForHard[3]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "investForSoft_3" placeholder={"半角数字"} value = {editedItem.investForSoft[3] === null ? '' : editedItem.investForSoft[3]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "expenses_3" placeholder={"半角数字"} value = {editedItem.expenses[3] === null ? '' : editedItem.expenses[3]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' text-right'>
                      <p>{(editedItem.investForHard[3]=== null ? 0 : editedItem.investForHard[3]) + (editedItem.investForSoft[3]=== null ? 0 : editedItem.investForSoft[3]) + (editedItem.expenses[3]=== null ? 0 : editedItem.expenses[3])}</p>
                  </td> 
                  </tr>
                  <tr>
                  <th className=' border-r'>
                      {editedItem.fiscalYear[4]}
                  </th> 
                  <td className=' border-r'>
                      <input type="text" name = "investForHard_4" placeholder={"半角数字"} value = {editedItem.investForHard[4] === null ? '' : editedItem.investForHard[4]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "investForSoft_4" placeholder={"半角数字"} value = {editedItem.investForSoft[4] === null ? '' : editedItem.investForSoft[4]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "expenses_4" placeholder={"半角数字"} value = {editedItem.expenses[4] === null ? '' : editedItem.expenses[4]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' text-right'>
                      <p>{(editedItem.investForHard[4]=== null ? 0 : editedItem.investForHard[4]) + (editedItem.investForSoft[4]=== null ? 0 : editedItem.investForSoft[4]) + (editedItem.expenses[4]=== null ? 0 : editedItem.expenses[4])}</p>
                  </td> 
                  </tr>
                  <tr>
                  <th className=' border-r'>
                      {editedItem.fiscalYear[5]}
                  </th> 
                  <td className=' border-r'>
                      <input type="text" name = "investForHard_5" placeholder={"半角数字"} value = {editedItem.investForHard[5] === null ? '' : editedItem.investForHard[5]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "investForSoft_5" placeholder={"半角数字"} value = {editedItem.investForSoft[5] === null ? '' : editedItem.investForSoft[5]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' border-r'>
                      <input type="text" name = "expenses_5" placeholder={"半角数字"} value = {editedItem.expenses[5] === null ? '' : editedItem.expenses[5]} onChange = {handleInputChange} className="input input-bordered input-xs  w-16 text-right" />
                  </td> 
                  <td className=' text-right'>
                      <p>{(editedItem.investForHard[5]=== null ? 0 : editedItem.investForHard[5]) + (editedItem.investForSoft[5]=== null ? 0 : editedItem.investForSoft[5]) + (editedItem.expenses[5]=== null ? 0 : editedItem.expenses[5])}</p>
                  </td> 
                  </tr> */}

    //             </tbody> 
    //             </table>
    //           </div>
    //           <div>

    //           </div>
    //     </label>
    //   </div>

  )
}

export default ItemTable