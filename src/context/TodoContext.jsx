import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        if(todo){
            setTodos([
                ...todos, {id: uuid(), task: todo, completed: false}
            ]);
        }
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    }
    const updateTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
    
        if(todos && todos.length > 0){
          setTodos(todos)
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => useContext(TodoContext);
