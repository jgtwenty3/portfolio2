import React, { useRef, useState } from 'react'
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt= ({children, className = ""})=>{
    const [transformStyle,setTransformStyle] = useState('');
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;
    
        const { left, top, width, height } =
          itemRef.current.getBoundingClientRect();
    
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;
    
        const tiltX = (relativeY - 0.5) * 25;
        const tiltY = (relativeX - 0.5) * -25;
    
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
      };
    
      const handleMouseLeave = () => {
        setTransformStyle("");
      };

    return(
        <div className={className} ref = {itemRef} onMouseMove={handleMouseMove} onMouseLeave = {handleMouseLeave} style={{ transform: transformStyle }}>
            {children}
        </div>

    )
}


const BentoCard = ({src, title, description})=>{
    return(
        <div className='relative size-full'>
            <video 
            src = {src}
            loop
            muted
            autoPlay
            playsinline={true}
            className='absolute left-0 top-0 size-full object-cover'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description &&(
                        <p className='mt-3 max-w-64 text-md bg-black bg-opacity-70 rounded-lg'>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

const TechStack = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div id = "tech stack"className='px-5 py-32'>
                <p className = "font-circular-web text-lg text-blue-50"> WORKING WITH ME</p>
                <div className='md:flex flex-row justify-between '>
                
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                I'm a full stack developer and web designer. I use modern frameworks like NextJs, GSAP, and ThreeJs to weave together amazing web and mobile experiences. Whether you need a website redesign or have an idea for a full blown product, I can help. 
                </p>
                <br/>
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                I prioritize client collaboration, communication, and consistency. I strive to write clean, optimized code. I'm ready to tackle exciting challenges aand build fast, accessible web solutions.
                </p>

                </div>
                
                
            </div>
            <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard
                src="videos/coding.mp4"
                title={
                    <>
                    te<b>c</b>h st<b>a</b>ck
                    </>
                }
                description="I work with React, React Native, Python, NextJS, Flask, TypeScript, and Tailwind among other frameworks, libraries, and tools."
                playsinline={true}
            />
            </BentoTilt>
            <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                    <a href = "https://swish-social-kftu.vercel.app">
                    <BentoCard
                    src = "videos/swish.mp4"
                    title = {<>swish s<b>o</b>cial</>}
                    description="A private social media site without the algorithms and ads. There's a secret way to log in. "
                    playsinline={true}

                    />
                    </a>

                </BentoTilt>
                <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                    <a href = "https://codhub-ashen.vercel.app/">
                    <BentoCard
                    src = "videos/codehub.mp4"
                    title = {<>c<b>o</b>dehub</>}
                    description="A code editor and snippet sharing SaaS platform."
                    playsinline={true}
                    />
                    </a>
                    
                    
                </BentoTilt>
                <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                <a href = "https://hyvid.vercel.app/">
                <BentoCard
                    src="videos/hyvid.mp4"
                    title={
                    <>
                        HY<b>V</b>I<b>D</b>
                    </>
                    }
                    description="Video Chat application."
                    playsinline={true}
                />
                </a>
                
                </BentoTilt>
                <BentoTilt className = "bento-tilt_2">
                    <div className="flex size-full flex-col justify-between bg-white p-5">
                    <a href = "https://github.com/jgtwenty3">
                    <h1 className="bento-title special-font max-w-64 text-black">
                        M<b>o</b>re c<b>o</b>ming s<b>o</b><b>o</b>n.
                    </h1>
                    </a>
                    <TiLocationArrow className="m-5 scale-[5] self-end" />
                    </div>
                </BentoTilt>
                <div className='bento-tilt_2'>
                
                <BentoTilt className="bento-tilt_2">
                    <video
                        src="videos/knight.mp4"
                        loop
                        muted
                        autoPlay
                        className="size-full object-cover object-center"
                        playsinline={true}
                    />
                </BentoTilt>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TechStack