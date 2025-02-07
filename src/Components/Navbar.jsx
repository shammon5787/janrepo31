import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-900 fixed w-full top-0 left-0 right-0 h-20 items-center flex justify-between opacity-65 font-semibold text-white shadow-md'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-between w-full px-9' >
                <div>
                    <h1 className='text-3xl font-bold'> {new Date().toUTCString().slice(0, 16)} </h1>
                </div>
                <div className='felx items-center justify-between text-3xl'>
                    <Link className='ml-10 hover:bg-slate-600 transition-all duration-500 p-3 rounded-lg shadow-2xl' to='/'>Home</Link>
                    <Link className='ml-10 hover:bg-slate-600 transition-all duration-500 p-3 rounded-lg shadow-2xl' to='/background'>Background</Link>
                    <Link className='ml-10 hover:bg-slate-600 transition-all duration-500 p-3 rounded-lg shadow-2xl' to='/slider'>Slider</Link>
                </div>
                <div>
                    <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='bg-slate-50 p-2 w-full lg:w-[23vw] text-black outline-0 rounded-md' type="search" name="search3" placeholder='search here' id="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar