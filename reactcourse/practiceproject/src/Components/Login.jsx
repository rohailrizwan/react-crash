import React, { useContext, useState } from 'react'
import Usercontext from '../context/Usercontext'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate=useNavigate()
    const [Login,setLogin]=useState({
        username:'',
        email:'',
        password:''
    })
    const {setUser}=useContext(Usercontext)
    const fillModel=(key,value)=>{
        setLogin({...Login,[key]:value})
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(Login);
        setUser(Login)
        setLogin({
            username: '',
            email: '',
            password: ''
        });
        navigate('/profile')
    }
  return (
    <div className='md:container mx-auto'>
        Login
       <div className='flex flex-col shadow px-3 py-2'>
       <input type="text" placeholder='username' className='border-2 mb-2 px-2 py-2' value={Login.username}  onChange={(e)=>fillModel('username',e.target.value)}/>
        <input type="email" placeholder='email' className='border-2 mb-2 px-2 py-2' value={Login.email}  onChange={(e)=>fillModel('email',e.target.value)}/>
        <input type="password" placeholder='password' className='border-2 mb-2 px-2 py-2' value={Login.password}  onChange={(e)=>fillModel('password',e.target.value)}/>
        <button type='submit' onClick={handlesubmit}>submit</button>
       </div>
    </div>
  )
}

export default Login
