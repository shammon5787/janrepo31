import React, { useState } from 'react'
import Background from '../Background/Background'
import Hero from '../Background/Hero'

const BackGround = () => {
  const setData = [
    {text1: "BMW", text2: "Is New BMW"},
    {text1: "4 X 4", text2: "Is New 4 X 4"},
    {text1: "Vitz", text2: "Is New Vitz"},
  ]
  const [heroCount, setheroCount] = useState(2)
  const [palystatus, setPlayStatus] = useState(false)
  return (
    <div className='mt-24'>
        <Background palystatus = {palystatus} heroCount = {heroCount}  />
        <Hero heroCount = {heroCount} palystatus = {palystatus} setheroCount = {setheroCount} setPlayStatus = {setPlayStatus} />
    </div>
  )
}

export default BackGround