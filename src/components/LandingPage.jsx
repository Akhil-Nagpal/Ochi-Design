import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import TitleImg from "../assets/titleImg.png";
import MarqueeEffect from "./MarqueeEffect";
import About from "./About";
import Eyes from "./Eyes";
import Projects from "./Projects";
import StartProject from "./StartProject";
import eyesBg from "../assets/eyesBg.jpg";

function LandingPage() {
  return (
    <>
      <div className="w-full bg-zinc-100">
        <div className="textStructure mt-20 ml-12">
          {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
            return (
              <div key={index} className="flex gap-2">
                {index === 1 && (
                  <img
                    className=" w-[9.5vw] h-[6vw] mt-4 rounded-md overflow-hidden"
                    src={TitleImg}
                    alt="titleImage"
                  />
                )}

                <h1
                  className="font-[FoundersGrotesk-Semibold]
                                uppercase text-[9.6vw] tracking-[-0.020em] 
                                text-[#212121] leading-[7vw] "
                >
                  {item}
                </h1>
              </div>
            );
          })}
        </div>

        <hr className="w-full border-zinc-400 mt-[7.6vw]" />

        <div className="flex justify-between items-center px-12 py-4">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => {
            return (
              <p
                key={index}
                className="text-[#212121]
                        font-[NeueMontreal-Regular]"
              >
                {item}
              </p>
            );
          })}

          <div
            className="flex justify-center
                    items-center gap-1"
          >
            <button
              className=" px-4 py-1 border-[1px] text-sm font-[NeueMontreal-Regular]
                     border-[#212121] rounded-full uppercase"
            >
              Start The Project
            </button>

            <div className="border border-[#212121] p-1 rounded-full">
              <GoArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <MarqueeEffect />
      <About />
      <Eyes url={eyesBg} changes={"h-screen bg-cover bg-center"} />
      <Projects />
      <StartProject />
    </>
  );
}

export default LandingPage;
