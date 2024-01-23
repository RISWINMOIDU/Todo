import React, { useState } from 'react'
import './Todo.css'

export const AddTask = ({addTask}) => {
    const[value,setvalue]=useState("")
    const addtime=()=>{
        addTask(value);
        setvalue("")
    };
  return (
    <div className='input-container'><h3>AddTask</h3>
      <input type='text' className='input' placeholder='Add a new task '
      value={value}
      onChange={(e)=>{setvalue(e.target.value);}}
      />
      <button onClick={addtime} className='add-btn'>ADD</button>   

    </div>
  )
}
