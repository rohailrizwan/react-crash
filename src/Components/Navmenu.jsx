import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import myarr from './Navlink'

function Navmenu() {

    return (
        <>
            {
                myarr?.map((item) => {
                    return (
                        <div className=' group'>
                            <NavLink to={item.path}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 md:cursor-pointer bg-white  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }><p className='py-7'>{item?.text}</p>
                            </NavLink>
                            {
                                item.subMenu && (
                                    <div className='absolute top-[90px] hidden group-hover:flex'>
                                        <div className='py-3'>
                                            <div className='w-4 h-4 left-3 absolute mt-1 top-[0px] bg-white rotate-45'></div>
                                            <div className='bg-white text-black px-4 py-2 grid grid-cols-3 gap-10'>
                                                {item.subinks?.map((item) => {
                                                    return (
                                                        <>
                                                            <div>
                                                                <h6 className='font-bold text-1xl mb-1'>{item?.heading}</h6>
                                                                {
                                                                    item.sublinking?.map((item) => {
                                                                        return (
                                                                            <NavLink to={item.path}><p className='text-sm mb-1'>{item?.text}</p></NavLink>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    )
                })
            }
        </>
    )
}

export default Navmenu
