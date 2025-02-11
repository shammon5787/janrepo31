import React from 'react'
import './Background.css'
import video from '../assets/video.mp4'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'

const Background = ({playstatus, heroCount}) => {
  if(playstatus){
    return(
        <video className='fixed top-0 right-0 left-0 bottom-0 w-full -z-10 ' autoPlay loop muted>
            <source src= {video} type='video/mp4' />
        </video>
    )
  }else if(heroCount === 0){
    return(
        <img className='fixed top-0 right-0 left-0 bottom-0 w-full -z-10  ' src= {img2} alt="" />
    )
  }
  else if(heroCount === 1){
    return(
        <img className='fixed top-0 right-0 left-0 bottom-0 w-full -z-10  ' src= {img3} alt="" />
    )
  }
  else if(heroCount === 2){
    return(
        <img className='fixed top-0 right-0 left-0 bottom-0 w-full -z-10  ' src= {img4} alt="" />
    )
  }
}

export default Background