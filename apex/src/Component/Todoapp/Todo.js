import React, { useEffect, useState } from 'react'
import ListTask from './ListTask'
import { AddTask } from './AddTask'
import './Todo.css'

const Todo = () => {
    const[task,setTask]=useState([]);

    useEffect(()=>{
      document.title=`You Have ${task.length} pending task(s)`;
    })

    const addTask=(title)=>{
        const newTask=[...task,{title}]
        setTask(newTask);
    }
    
    const removeTask=(index)=>{
      const newTask=[...task]
      newTask.splice(index,1)
      setTask(newTask)
    }
 
  return (
    <>
    <div className='todo-container'>
        <div className='header'><h2>TODO APP</h2></div>
        <div className='addtask'>
        <AddTask addTask={addTask}/>
        </div>
        <div className='tasks'>
         {task.map((task,index)=>(
           <ListTask task={task} removeTask={removeTask}
           index={index} key={index}/>
         ))}   
       
        </div>
    </div>

    </>
  )
}

export default Todo