import React from 'react'
import play from '../assets/play.png'
import pause from '../assets/pause.png'

const Hero = ({ heroCount, playstatus, setheroCount, setPlayStatus, setData }) => {
    return (
        <div className='p-6'>
            <div className='bg-blue-950 p-8 rounded-lg w-[29vw] flex flex-col items-center opacity-70'>
                <div className='text-5xl font-bold'>
                    <h1>{setData.text1}</h1>
                    <h1>{setData.text2}</h1>
                </div>
                <div className='flex flex-row items-center bg-slate-950 w-[20vw] justify-between p-10 rounded-md opacity-60 mt-2'>
                    <li onClick={() => setheroCount(0) } className={`list-none text-amber-300 cursor-pointer text-3xl bg-black rounded-full `}>⨀</li>
                    <li onClick={() => setheroCount(1)} className={`list-none text-amber-300 cursor-pointer text-3xl bg-black rounded-full`}>⨀</li>
                    <li onClick={() => setheroCount(2)} className={`list-none text-amber-300 cursor-pointer text-3xl bg-black rounded-full`}>⨀</li>
                </div>
            </div>
            <div className='fixed right-10 bottom-4 flex flex-col items-center bg-amber-50 p-2 rounded-lg opacity-70 text-black'>
                <h1 className='text-2xl'>Video Play Here</h1>
                <img className='cursor-pointer w-[55px]' onClick={()=>setPlayStatus(!playstatus)} src= {playstatus ? play : pause} alt="" />
            </div>
        </div>
    )
}

export default Hero