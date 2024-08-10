import React, { useContext, useState } from 'react'
import Todocontext from '../../context/Todocontext';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SaveIcon from '@mui/icons-material/Save';
function Todo() {
    const [todoText, setTodoText] = useState('')
    const [EditText, seteditText] = useState('')
    const [Editid, seteditid] = useState('')
    const [edit, setEdit] = useState(false)
    const { Addtodo, Todolist, Deletetodo ,Edittodo} = useContext(Todocontext)

    const AddtodoList = () => {
        if (todoText) {
            Addtodo(todoText)
            setTodoText('')
        }
    }
    const deletetodo = (id) => {
        if (id) {
            Deletetodo(id)
        }
    }
    const Edit = (id,text) => {
        setEdit(true)
        seteditid(id)
        seteditText(text)
    }
    const save =()=>{
        Edittodo(Editid,EditText)
        setEdit(false)
    }
    return (
        <div className='text-center'>
            <p className='mb-5'> my Todos</p>

            <div className='flex mb-2 justify-center'>
                <input type="text " className=' border-2 outline px-2' value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button className='bg-green-400' onClick={AddtodoList}>submit</button>
            </div>

            <div>
                {
                    Todolist?.map((item) => {
                        return (
                            <div className=' px-2 flex border-b-2 justify-center py-2'>
                                {!edit ? 
                                <p className='me-2'>{item.text}</p>
                                :<input className='border outline px-2 me-2' value={EditText} onChange={(e)=>seteditText(e.target.value)}></input>
                                }
                                {!edit ? <ModeEditIcon className='cursor-pointer' onClick={() => Edit(item.id,item.text)} /> : <SaveIcon className='cursor-pointer' onClick={save} />}
                                <DeleteIcon className="bg-red-500 text-white cursor-pointer" onClick={() => deletetodo(item.id)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo
