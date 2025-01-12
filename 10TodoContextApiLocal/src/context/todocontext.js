import {createContext, useContext } from "react"

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            content: "First Todo ",            
            isComplete : false
        }
    ],  
    
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateStatus:(id,todo)=>{},
    isCompleteHandler:(id)=>{}

});




export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}