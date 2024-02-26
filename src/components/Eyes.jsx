import React, { useEffect, useRef, useState } from 'react'

function Eyes() {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const eyeLeft = useRef()
    const eyeRight = useRef()


    function Angle(element) {
        if (!element.current) return;

        let elementX = element.current.offsetLeft + element.current.clientWidth / 2;
        let elementY = element.current.offsetTop + element.current.clientHeight / 2;

        const radians = Math.atan2(mouse.y - elementY, mouse.x - elementX);
        const rotation = radians * (180 / Math.PI);

        return rotation + 90
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
        <div className='eyeContainer w-full h-screen bg-zinc-700 
         items-center flex justify-center gap-12'>

            <div
                ref={eyeLeft}
                style={{ transform: `rotate(${Angle(eyeLeft)}deg)` }}
                className="eyeLeft w-[12rem] h-[12rem] bg-zinc-100 rounded-full ">

                <div className="lens w-[9rem] h-[9rem] bg-zinc-900 rounded-full relative
                mt-6 ml-6 after:w-[1.5rem] after:h-[1.5rem] after:bg-zinc-100 
                after:rounded-full after:absolute after:ml-14 after:mt-[1.5px] "></div>
            </div>

            <div
                ref={eyeRight}
                style={{ transform: `rotate(${Angle(eyeRight)}deg)` }}
                className="eyeRight w-[12rem] h-[12rem] bg-zinc-100 rounded-full ">

                <div className="lens w-[9rem] h-[9rem] bg-zinc-900 rounded-full relative
                mt-6 ml-6 after:w-[1.5rem] after:h-[1.5rem] after:bg-zinc-100 
                after:rounded-full after:absolute after:ml-14 after:mt-[1.5px] "></div>
            </div>
        </div>
    )
}

export default Eyes