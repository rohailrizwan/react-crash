import React from 'react'
import { useContext } from 'react'
import Usercontext from '../context/Usercontext'
import Card from './Card';

function Profile() {
    const {user}=useContext(Usercontext)
    console.log(user);
    
  return (
    <div className='md:container'>
        Profile
        <Card/>
    </div>
  )
}

export default Profile
