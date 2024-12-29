import {createContext, useContext } from "react"

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            content: "First Todo ",            
            isComplete : false
        },
    ],    
    setTodo: ()=>{},
    deleteTodo: ()=>{},
    todoStatus:()=>{}

});

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}