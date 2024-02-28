import React, { useEffect, useRef, useState } from 'react'
import eyesBg from '../assets/eyesBg.jpg'

function Eyes() {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const eyeLeft = useRef()
    const eyeRight = useRef()


    function Angle(element) {
        if (!element.current) return;

        let elementX = element.current.getBoundingClientRect().left + element.current.clientWidth / 2;
        let elementY = element.current.getBoundingClientRect().top + element.current.clientHeight / 2;

        const radians = Math.atan2(mouse.y - elementY, mouse.x - elementX);
        const angle = radians * (180 / Math.PI)

        return angle + 91.8
    }

    const getMouse = (e) => {
        setMouse({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', getMouse);

        return () => {
            window.removeEventListener('mousemove', getMouse);
        }

    }, [])



    return (
        <div
            style={{backgroundImage: `url(${eyesBg})`}}
            className='eyeContainer w-full h-screen bg-cover bg-center 
                items-center flex justify-center gap-12'>

            <div
                className="eyeLeft w-[12rem] h-[12rem] bg-zinc-100 rounded-full ">

                <div
                    ref={eyeLeft}
                    style={{ transform: `rotate(${Angle(eyeLeft)}deg)` }}
                    className="lens w-[9rem] h-[9rem] bg-zinc-900 rounded-full relative
                mt-6 ml-6 after:w-[1.5rem] after:h-[1.5rem] after:bg-zinc-100 
                after:rounded-full after:absolute after:ml-14 after:mt-[1.5px] "></div>
            </div>

            <div
                className="eyeRight w-[12rem] h-[12rem] bg-zinc-100 rounded-full ">

                <div
                    ref={eyeRight}
                    style={{ transform: `rotate(${Angle(eyeRight)}deg)` }}
                    className="lens w-[9rem] h-[9rem] bg-zinc-900 rounded-full relative
                mt-6 ml-6 after:w-[1.5rem] after:h-[1.5rem] after:bg-zinc-100 
                after:rounded-full after:absolute after:ml-14 after:mt-[1.5px] "></div>
            </div>
        </div>
    )
}

export default Eyes