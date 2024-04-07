import React ,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditForm } from './EditForm';
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
    setTodos(temp)
    console.log(todos)
  }
    const toggleComplete = id => {
      const temp=id
      const clone_array=[...todos]
      for (let index=0;index<clone_array.length;index++)
      {
        if (temp===clone_array[index].id && clone_array[index].completed!==true)
        {
          clone_array[index].completed=true
        }
          
      }
      setTodos(clone_array)
      
    }
    const deleteTodo = (id) => {
      const temp=id
      const clone_array=[...todos]
      for (let index=0;index<clone_array.length;index++)
      {
        if (temp===clone_array[index].id)
          {clone_array.splice(index,1)}
      }
      console.log(clone_array)
      setTodos(clone_array)
      console.log(clone_array)
    }
    const editTodo = id => {
      const temp=id
      const clone_array=[...todos]
      for (let index=0;index<clone_array.length;index++)
      {
        if (temp===clone_array[index].id && clone_array[index].isEditing!==true)
        {
          clone_array[index].isEditing=true
        }
        setTodos(clone_array)

      }
    }
    const editTask = (task,id) => {
      const val=task
      const temp=id
      const clone_array=[...todos]
      console.log(clone_array)
      for (let index=0;index<clone_array.length;index++)
      { console.log(clone_array[index])
        if (temp===clone_array[index].id)
        {
          clone_array[index].task=val
          clone_array[index].isEditing=false
        }
        setTodos(clone_array)
      }
      

    }
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index) => (
          todo.isEditing ? (
            <EditForm editTodo={editTask} task={todo}/>
          ) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
      ))}
    </div>
  )
}
