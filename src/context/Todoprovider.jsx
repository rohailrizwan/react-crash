import React, { useState } from 'react';
import Todocontext from './Todocontext';

export default function Todocontextprovider({ children }) {
    const [Todolist, setTodoList] = useState([]);

    const Addtodo = (message) => {
        console.log(Todolist);
        const newTodo = {
            id: Todolist.length + 1,
            text: message,
        };

        setTodoList(prevList => [...prevList, newTodo]);
    };
    const Deletetodo = (id) => {
        console.log(id);
        console.log(Todolist);
        setTodoList(()=>Todolist.filter((prev)=>prev.id !== id))
        
    }
    const Edittodo=(id,text)=>{
        console.log(text,id);
        setTodoList((prev)=>
            prev.map((item)=>(item.id==id?{...item,text:text}:item))
        )
    }
    return (
        <Todocontext.Provider value={{ Todolist, Addtodo, setTodoList, Deletetodo,Edittodo }}>
            {children}
        </Todocontext.Provider>
    );
}
