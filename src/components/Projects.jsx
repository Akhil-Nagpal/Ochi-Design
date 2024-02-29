import React from "react";
import Fyde from "../assets/Fyde.jpg";
import Vise from "../assets/Vise.jpg";
import PBFront from "../assets/PB-Front.jpg";
import Frame from "../assets/Frame.jpg";
import Ochi from "../assets/Ochi.png";
import Clutch from "../assets/Clutch.png";
import Academy from "../assets/Academy.png";

function Projects() {
  const data = [
    {
      name: "Fyde",
      img: Fyde,
    },
    {
      name: "Vise",
      img: Vise,
    },
    {
      name: "Frame",
      img: Frame,
    },
    {
      name: "Premium Blend",
      img: PBFront,
    },
  ];
  return (
    <div className="w-full  rounded-tl-2xl rounded-tr-2xl mb-10 ">
      <div className="p-10">
        <h1
          className="text-[3.9vw] font-[NeueMontreal-Regular] leading-none 
                text-[#212121] pt-14"
        >
          Featured projects
        </h1>
      </div>
      <hr className="w-full border-zinc-400 " />

      <div className="container grid grid-cols-2 gap-5 mt-10 mx-10 relative">
        {data.map((item) => (
          <div className=" rounded-xl h-[80vh] gap-5 overflow-hidden">
            <h3
              className="flex items-center gap-2 font-[NeueMontreal-Regular] uppercase 
                            text-[#212121] text-sm mb-2"
            >
              <div className="w-[10px] h-[10px] bg-zinc-800 rounded-full"></div>
              {item.name}
            </h3>
            <img className="rounded-xl" src={item.img} alt={item.name} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-36">
        <button
          className="text-[0.9rem] bg-[#212121] text-zinc-100 uppercase font-[NeueMontreal-Regular]
                     py-5 px-7 rounded-full flex justify-center items-center gap-6 mt-2 leading-none tracking-tight"
        >
          View All Case Studies
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
      </div>

      <hr className="w-full border-zinc-400 mt-10 " />

      <div className="grid grid-cols-12 mx-16 top-20 gap-3 pt-28 pb-52">
        <div className=" relative h-[60vh] col-span-6 bg-[#004D43] rounded-xl">
          <img
            className=" w-40 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={Ochi}
            alt="Ochi-Logo"
          />
          <span className="absolute left-6 rounded-full border-[1px] px-3 py-1 text-sm border-[#CDEB69] text-[#CDEB69] bottom-6 tracking-tighter">
            &copy;2019-2024
          </span>
        </div>
        <div className="relative h-[60vh] col-span-3 bg-[#212121] rounded-xl">
          <img
            className=" w-36 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={Clutch}
            alt="Clutch-Logo"
          />
          <button className="absolute bg-transparent border-[1px] rounded-full bottom-6 left-6 text-zinc-100 px-3 py-1 text-sm uppercase tracking-tighter">
            Rating 5.0 On Clutch
          </button>
        </div>
        <div className="relative h-[60vh] col-span-3 bg-[#212121] rounded-xl">
          <img
            className=" w-28 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={Academy}
            alt="the-future-academy"
          />
          <button className="absolute bg-transparent border-[1px] rounded-full bottom-6 left-6 text-zinc-100 px-3 py-1 text-sm uppercase tracking-tighter">
            Buisness Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
