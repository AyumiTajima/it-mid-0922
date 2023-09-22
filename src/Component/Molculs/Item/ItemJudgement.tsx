import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { editItem } from '../../slice/itemSlice';
import { RADIO } from '../../../Types';

const ItemJudgement = () => {

    const { editedItem } = useAppSelector((state) => state.item) 
    const dispatch = useAppDispatch();


    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name ,value } = e.target;
        switch (name) {
          case "judgement" :  dispatch(editItem({ ...editedItem, judgement: value }));
          break;
          case "finalJudgement" :  dispatch(editItem({ ...editedItem, finalJudgement: value }));
          break;
          case "DXIT" :  dispatch(editItem({ ...editedItem, DXIT: value }));
          break;
          case "rate" :  dispatch(editItem({ ...editedItem, rate: value }));
          break;

        }
      };


    // const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     const { value } = e.target;
    //     dispatch(editItem({ ...editedItem, judgement: value }));
    //   };

    
    //判定ラジオ項目
    //-----〇△×------//
      const judgementRadioButton: RADIO[] = [
        {
          label: "〇",
          value: "〇",
        },
        {
          label: "△",
          value: "△",
        },
        {
          label: "×",
          value: "×",
        },
      ]
    //-----DX/IT------//
      const dxitRadioButton: RADIO[] = [
        {
          label: "DX",
          value: "DX",
        },
        {
          label: "IT",
          value: "IT",
        },
      ]
    //-----DX/IT------//
      const rateRadioButton: RADIO[] = [
        {
          label: "S",
          value: "S",
        },
        {
          label: "A",
          value: "A",
        },
        {
          label: "B",
          value: "B",
        },
        {
          label: "C",
          value: "C",
        },
        {
          label: "D",
          value: "D",
        },
        {
          label: "E",
          value: "E",
        },
      ]

  return (
    <>
        <div className='border border-black rounded-lg flex font-bold'>
            <div className='mx-1'>
                <div className=''>
                    <div className='mx-1'>
                        <p>★判定</p>
                        <div className='flex items-center'>
                        {judgementRadioButton.map(radio => {
                            return(
                                <label className="cursor-pointer flex items-center" htmlFor = "judgement">
                                    <span className="label-text px-1">{radio.label}</span> 
                                    <input 
                                    type="radio" 
                                    name = "judgement" 
                                    value={radio.value} 
                                    checked={radio.value === editedItem.judgement}  
                                    onChange={handleRadioChange}
                                    className="radio checked:bg-dark" />
                                </label>
                            )
                        })}
                        </div>
                    </div>
                    <div className='mx-1'>
                        <p>★最終判定</p>
                        <div className='flex items-center'>
                        {judgementRadioButton.map(radio => {
                            return(
                                <label className="cursor-pointer flex items-center">
                                    <span className="label-text px-1">{radio.label}</span> 
                                    <input 
                                    type="radio" 
                                    name = "finalJudgement" 
                                    value={radio.value} 
                                    checked={radio.value === editedItem.finalJudgement}  
                                    onChange={handleRadioChange}
                                    className="radio checked:bg-dark" />
                                </label>
                            )
                        })}
                        </div>
                    </div>

                </div>
                <div className='my-2 mx-1'>
                    <textarea className="textarea textarea-bordered textarea-sm" placeholder="コメント"></textarea>
                </div>
            </div>
            <div className='mx-1'>
                  <div className='mx-1'>
                    <p>★DX/IT</p>
                    <div className='flex items-center'>
                      {dxitRadioButton.map(radio => {
                        return(
                            <label className="cursor-pointer flex items-center">
                              <span className="label-text px-1">{radio.label}</span> 
                              <input 
                                type="radio" 
                                name = "DXIT" 
                                value={radio.value} 
                                checked={radio.value === editedItem.DXIT}  
                                onChange={handleRadioChange}
                                className="radio checked:bg-dark" />
                            </label>
                          )
                      })}
                    </div>
                  </div>
                    <div className='mx-1'>
                        <p>★評価ランク</p>
                        <div className='flex items-center'>
                        {rateRadioButton.map(radio => {
                            return(
                                <label className="cursor-pointer flex items-center">
                                    <span className="label-text px-1">{radio.label}</span> 
                                    <input 
                                    type="radio" 
                                    name = "rate" 
                                    value={radio.value} 
                                    checked={radio.value === editedItem.rate}  
                                    onChange={handleRadioChange}
                                    className="radio checked:bg-dark" />
                                </label>
                            )
                        })}
                        </div>
                    </div>
                <div className='my-2 mx-1'>
                    <textarea className="textarea textarea-bordered textarea-sm" placeholder="memo"></textarea>
                </div>
            </div>
        </div>

    </>
  )
}

export default ItemJudgement