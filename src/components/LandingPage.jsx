import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import TitleImg from "../assets/titleImg.png";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function LandingPage() {
  const { scroll } = useLocomotiveScroll();

  return (
    <>
      <div data-scroll data-scroll-speed="-1" className="w-full bg-zinc-100">
        <div className="textStructure mt-20 ml-12">
          {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
            return (
              <div key={index} className="flex gap-2">
                {index === 1 && (
                  <motion.img
                    initial={{ width: 0 }}
                    animate={{ width: "9.5vw" }}
                    transition={{
                      duration: 1,
                      ease: [0.87, 0, 0.13, 1],
                      delay: "0.5",
                    }}
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
    </>
  );
}

export default LandingPage;
