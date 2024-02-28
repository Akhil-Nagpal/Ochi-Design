import React from 'react'
import Fyde from '../assets/Fyde.jpg'
import Vise from '../assets/Vise.jpg'
import PBFront from '../assets/PB-Front.jpg'
import Frame from '../assets/Frame.jpg'


function Projects() {


    return (
        <div className='w-full bg-zinc-100 rounded-tl-2xl rounded-tr-2xl mb-10 '>
            <div className='p-10'>
                <h1 className='text-[3.9vw] font-[NeueMontreal-Regular] leading-none 
                text-[#212121] pt-14'>
                    Featured projects
                </h1>
            </div>
            <hr className='w-full border-zinc-400 ' />

            <div className='container grid grid-cols-2 gap-5 mt-10 mx-10 relative'>

                {['Fyde', 'Vise', 'Frame', 'Premium Blend'].map((item) => {

                    return (

                        <h3 className='flex items-center gap-2 font-[NeueMontreal-Regular] uppercase 
                            text-[#212121] text-sm'>
                            <div className='w-[10px] h-[10px] bg-zinc-800 rounded-full'></div>
                            {item}
                        </h3>

                    )
                })}

                <div className='card rounded-xl h-[80vh] gap-5 overflow-hidden'>
                    <img src={Fyde} alt="Fyde" />
                </div>
                <div className='card rounded-xl h-[80vh] gap-5 overflow-hidden'>
                    <img src={Vise} alt="Vise" />
                </div>
                <div className='card rounded-xl h-[80vh] gap-5 overflow-hidden'>
                    <img src={Frame} alt="Frame" />
                </div>
                <div className='card rounded-xl h-[80vh] gap-5 overflow-hidden'>
                    <img src={PBFront} alt="PBFront" />
                </div>
            </div>

            <div className='flex justify-center items-center mt-36'>

                <button className='text-[0.9rem] bg-[#212121] text-zinc-100 uppercase font-[NeueMontreal-Regular]
                     py-5 px-7 rounded-full flex justify-center items-center gap-6 mt-2 leading-none tracking-tight'>
                    View All Case Studies
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>

            <hr className='w-full border-zinc-400 mt-10 ' />

            


        </div>
    )
}

export default Projects