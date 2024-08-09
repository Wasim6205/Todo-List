import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from './context/ThemeContext'
import TodoItems from './components/TodoItems'
import { FaPlus } from "react-icons/fa6";
import AddTodoModal from './components/AddTodoModal';
import { useTodo } from './context/TodoContext';

const App = () => {
  const {theme, toggleTheme} = useTheme()
  const {todos,setTodos} = useTodo()
  // const {isOpenModal, setIsOpenModal} = useState(false)

  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    const results = todos.filter((todo) => {
      if(e.target.value == "") return todos;
      return todo["task"].toLowerCase().includes(e.target.value.toLowerCase())
    })
    // setQuery(e.target.value)
    setTodos(results)
  }
  
  return (
    <div className='relative flex flex-col space-y-4 items-center p-4 h-[100vh] w-[100vw] bg-white dark:bg-slate-900'>
      <h1 className='font-medium text-2xl dark:text-white mt-4'>TODO LIST</h1>

      <div className='flex space-x-5 items-center w-full justify-center container'>
        <input type="search" onChange={handleChange} placeholder='Search note...' className='w-[60%] md:w-[50%] rounded-md outline-none border px-2 py-1 border-third-color' />
        <button className='text-white bg-third-color px-4 py-1 rounded-md'>ALL</button>
        <button className='text-xl text-white bg-third-color p-1 rounded-md' onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      <div className='container w-[80%] md:w-[50%] pt-8 overflow-scroll custom-scroll mx-auto flex flex-col space-y-4'>
        {
        todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo} />
        ))
        }
      </div>

      <div onClick={()=>document.getElementById('my_modal_2').showModal()} className='absolute bottom-8 right-12 bg-third-color rounded-full p-2 cursor-pointer'>
        <FaPlus color='white' size={20} />
      </div>

    <AddTodoModal />
    
    </div>
  )
}

export default App