import React from 'react'

const Hero = ({ heroCount, palystatus, setheroCount, setPlayStatus }) => {
    return (
        <div className='p-6'>
            <div className='flex flex-row items-center bg-slate-950 w-[20vw] justify-between p-10 rounded-md opacity-60'>
                <li onClick={()=>setheroCount(0)}  className={`list-none text-amber-300 cursor-pointer text-3xl bg-black rounded-full `}>⨀</li>
                <li onClick={()=>setheroCount(1)}  className={`list-none text-amber-300 cursor-pointer text-3xl bg-black rounded-full`}>⨀</li>
                <li onClick={()=>setheroCount(2)}  className={`list-none text-amber-300 cursor-pointer text-3xl bg-black rounded-full`}>⨀</li>
            </div>
        </div>
    )
}

export default Hero