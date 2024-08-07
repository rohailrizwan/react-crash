import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Login from './Components/Login.jsx'
import Profile from './Components/profile.jsx'
import  { ThemeProvider } from './context/Theme.js'
import { useEffect, useState } from 'react'
function App() {
  const [thememode,setThememode]=useState('light')
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/About",
          element:<About/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/profile",
          element:<Profile/>
        }
      ]
    }
  ])
  const lighttheme=()=>{
      setThememode('light')
  }
  const darktheme=()=>{
      setThememode('dark')
  }
  useEffect(()=>{
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(thememode)
  },[thememode])
  return (
    <>
      <ThemeProvider value={{thememode,lighttheme,darktheme}}>
        <Usercontextprovider>
              <RouterProvider router={router}/>
        </Usercontextprovider>
      </ThemeProvider>
    </>
  )
}

export default App
