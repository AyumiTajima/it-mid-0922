import React from 'react'
import {useNavigate} from 'react-router-dom';

const NewItemBtn = () => {

  const navigate = useNavigate();

  const onClickEvent = () => {
    navigate("/item")
  }

  return (
    <div>
        <button className='btn btn-sm btn-primary w-36' onClick={onClickEvent}>
            新規作成
        </button>
    </div>
  )
}

export default NewItemBtn