import React, { useState } from 'react';
import Navmenu from './Navmenu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navmenu2 from './Navmenu2';
import { useNavigate } from 'react-router-dom';
import ToggleButton from './ToggleButton';

function Header() {
    const [open, setOpen] = useState(false);
    const navigate=useNavigate()
    return (
        <div className='w-full bg-white'>
            <nav className='md:container mx-auto'>
                <div className='flex items-center justify-between py-2  '>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12 cursor-pointer"
                            alt="Logo"
                        />
                    </div>
                    
                    {/* Menu Toggle (Mobile Only) */}
                    <div className='text-3xl md:hidden ml-auto' onClick={() => setOpen(!open)}>
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex flex-grow justify-center'>
                        <ul className='flex gap-8 uppercase items-center'>
                            <Navmenu />
                        </ul>
                    </div>

                    {/* Desktop Get Started Button */}
                    <div className='hidden md:flex'>
                        <button className='bg-blue-500 text-white px-6 py-2 rounded-full' onClick={()=>navigate('/login')}>
                            Login
                        </button>
                        <ToggleButton/>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white z-20 top-[64px] md:hidden transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex flex-col h-full'>
                    {/* Close Icon */}
                  
                    {/* Mobile Menu Items */}
                    <ul className='flex flex-col flex-grow pt-10 overflow-y-scroll'>
                        <Navmenu2 />
                    </ul>
                    <div className='p-5'>
                        <button className='bg-blue-500 text-white px-6 py-2 rounded-full w-full' onClick={()=>navigate('/login')}>
                           Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
