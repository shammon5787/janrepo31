import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
    const [activecard, setActiveCard] = useState(true)
    const selectCar = useSelector((state) => state.cart.cart)
    const totalitem = selectCar.reduce((totalitem , item)=>totalitem + item.qty , 0)
    const totalprice = selectCar.reduce((totalprice, item)=>totalprice + item.qty * item.price, 0)
    return (
        <>
            <div className={`fixed top-0 right-0 bg-slate-950 w-full h-full lg:w-[28vw] p-4 ${activecard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
                <div className='flex items-center flex-row justify-between text-4xl font-semibold'>
                    <h1>Your Orders</h1>
                    <IoMdCloseCircleOutline onClick={() => setActiveCard(false)} className='cursor-pointer hover:text-white' />
                </div>
                {
                    selectCar.map((item) => {
                        return (
                            <CardItem key={item.id} id = {item.id} name = {item.name} price = {item.price} image = {item.image} qty = {item.qty} />
                        )
                    })
                }
                <div className='font-semibold text-xl absolute bottom-0'>
                    <h1>Total Items: {totalitem} </h1>
                    <h1>Total Price: {totalprice} </h1>
                    <hr />
                    <button className='bg-blue-600 px-2 rounded-sm cursor-pointer transition-all duration-500 hover:bg-green-900 font-semibold my-4 w-[90vw] lg:w-[26vw]'>Check Out</button>
                </div>
            </div>
            <FaCartShopping onClick={() => setActiveCard(true)} className={`text-6xl cursor-pointer bg-yellow-400 text-black rounded-full p-2 fixed bottom-8 right-8 ${selectCar.length > 0 ? "animate-bounce" : "animate-none"} `} />
        </>
    )
}

export default Card