import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import myarr from './Navlink'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Navmenu2() {
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const navigate = useNavigate();

    const handleSubMenuClick = (index) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    return (
        <>
            {myarr?.map((item, index) => (
                <div key={index} className="w-full">
                    <div className="flex justify-between items-center py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 duration-200">
                        <span
                            onClick={() => navigate(item.path)}
                            className={`cursor-pointer ${window.location.pathname === item.path ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}
                        >
                            {item?.text}
                        </span>
                        {item.subMenu && (
                            activeSubMenu === index ? 
                            <ArrowDropUpIcon onClick={() => handleSubMenuClick(index)} className="cursor-pointer" /> : 
                            <ArrowDropDownIcon onClick={() => handleSubMenuClick(index)} className="cursor-pointer" />
                        )}
                    </div>

                    {item.subMenu && (
                        <div className={`pl-6 transition-all duration-500 ${activeSubMenu === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                            {item.subinks.map((subItem, subIndex) => (
                                <div key={subIndex} className="py-2">
                                    <h6 className='font-bold text-1xl mb-1'>{subItem?.heading}</h6>
                                    {subItem.sublinking?.map((subLink, subLinkIndex) => (
                                        <NavLink
                                            key={subLinkIndex}
                                            to={subLink.path}
                                            className={({ isActive }) => `block text-sm mb-1 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}
                                        >
                                            {subLink?.text}
                                        </NavLink>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export default Navmenu2
