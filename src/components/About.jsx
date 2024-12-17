import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  
  useGSAP(()=>{
    const clipAnimation = gsap.timeline({
      scrollTrigger:{
        trigger:"#clip",
        start:'center center',
        end:'+=800 center',
        scrub:0.5,
        pin:true,
        pinSpacing:true,

      }
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  })
  return (
    <div id = "about me" className='min-h-screen w-screen'>
      <div className='relative mb-4 mt-36  flex flex-col items-center gap-5'>
        <h2 className='font-general text-sm md:text-[18px]'>
          hi
        </h2>
        <AnimatedTitle 
        title = " w<b>e</b>lc<b>o</b>me t<b>o</b> my p<b>o</b>rtf<b>o</b>li<b>o</b>"
        containerClass={"mt-5 !text-black text-center"}/>
        
       

      </div>
      <div id="clip" className='h-dvh w-screen'>
        <div className='mask-clip-path about-image'>
          <img
          src = "img/coder.png"
          alt = "background"
          className='absolute left-0 top-0 size-full object-cover mb-10 '
          />
        </div>
      </div>
    </div>
  )
}

export default About