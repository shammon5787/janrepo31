import React from 'react'
import img from '../assets/Food/3.avif'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeCard } from '../Store/CardSlice';

const CardItem = ({id, name, image, price, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-600 p-2 rounded-md mt-1.5 flex gap-3'>
            <MdDelete onClick={()=>dispatch(removeCard({id}))}  className='absolute right-7 cursor-pointer hover:text-red-800 transition-all duration-500 hover:scale-150' />
            <img className='w-[55px] h-[55px] rounded-full' src={image} alt="" />
            <div className='leading-5 mt-3 font-semibold'>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <div className='flex items-center gap-6 absolute right-7 mt-8 font-semibold'>
                <FaMinus className='cursor-pointer hover:scale-200 transition-all duration-500' />
                <span>{qty}</span>
                <FaPlus className='cursor-pointer hover:scale-200 transition-all duration-500' />
            </div>
        </div>
    )
}

export default CardItem