import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
        todos:[],
        currentdata:null
}

export const todoSlice=createSlice({
        name:'todo',
        initialState:initialState,
        reducers:{
            addTodo: (state,action)=>{
                const obj={
                    id:nanoid(),
                    text:action.payload
                }
                state.todos.push(obj)
                console.log(obj);
                
            },
            removeTodo:(state,action)=>{
                state.todos=state.todos.filter((item)=>item.id !== action.payload)
            },
            EditTodo:(state,action)=>{
                  let data=action.payload
                  state.currentdata=data
            },
            updateTodo:(state,action)=>{
                const { id, text } = action.payload;
                const todoToUpdate = state.todos.find(item => item.id === id);
                if (todoToUpdate) {
                  todoToUpdate.text = text;
                }
                state.currentTodo = null;  // Clear after updating
              
            }
        }
})

export const{addTodo,removeTodo,EditTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer

