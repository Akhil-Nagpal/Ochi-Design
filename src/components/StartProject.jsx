import React from "react";
import Eyes from "./Eyes";

function StartProject() {
  return (
    <div className="w-full text-[#212121] bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl flex flex-col justify-center items-center">
      <div className="text-[#212121] font-[FoundersGrotesk-Semibold] text-[15vw] mt-36 uppercase leading-none flex justify-center items-center flex-col">
        {["Ready", "To Start", "The Project?"].map((item) => {
          return <h3 className="-mb-14">{item}</h3>;
        })}
      </div>
      <div className="mt-20 flex justify-center items-center flex-col mb-32">
        <button
          className="text-[0.9rem] bg-[#212121] text-zinc-100 uppercase font-[NeueMontreal-Regular]
                     py-5 px-7 rounded-full flex justify-center items-center gap-6 mt-2 leading-none tracking-tight"
        >
          Start The Project
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
        <span className="uppercase font-[NeueMontreal-Regular] m-3">or</span>
        <button
          className="text-[0.9rem] border-[1px] border-[#212121] text-[#212121] uppercase font-[NeueMontreal-Regular]
                     py-5 px-7 rounded-full flex justify-center items-center gap-6 mt-2 leading-none tracking-tight"
        >
          hello@ochi.design
          <div className="w-2 h-2 bg-[#212121] rounded-full"></div>
        </button>
      </div>

      <Eyes url={""} changes={"absolute"} />
    </div>
  );
}

export default StartProject;
