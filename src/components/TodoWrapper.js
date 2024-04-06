import React ,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();
//export--< public>
export const TodoWrapper = () => {
  const [todos, setTodos] =useState([])
  //sub function
  const addTodo = todo => {
    //clone
    const temp=[...todos]
    // id - unique id,task-- the user given task , completed- done or not,isEditing 
    const newtodo={id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false
    }
    temp.push(newtodo)
    console.log(temp)
    setTodos(temp)
    console.log(todos)
  }
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}
