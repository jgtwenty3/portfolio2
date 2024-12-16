import React, { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import Button from './Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Story = () => {
  const frameRef = useRef(null);
  const stagesRef = useRef([]);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;
    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const addToRefs = (el) => {
    if (el && !stagesRef.current.includes(el)) {
      stagesRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.fromTo(stagesRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" }
    );
  }, [stagesRef.current]);

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[18px]">
          Have an idea?
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="Let's bring it to life "
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
              <video 
                ref={frameRef} 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave} 
                onMouseUp={handleMouseLeave} 
                onMouseEnter={handleMouseLeave} 
                src="/videos/robot1.mp4" 
                className="object-contain" 
                autoPlay 
                muted 
                loop 
               
               />
              </div>
            </div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Whether it's a simple site or a complex project, if you want to work with me...
            </p>
            <a href="mailto:justinguerrerowork@gmail.com" >
              <Button id="realm-btn" title="LET'S TALK" containerClass="mt-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
