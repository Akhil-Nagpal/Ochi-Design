import React from "react";
import ApproachImg from "../assets/approach.jpg";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function About() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div className="w-full bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl z-30">
      <div className=" p-10 ">
        <h1 className=" pt-14 text-[3.9vw] text-[#212121] font-[NeueMontreal-Regular] leading-none">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>
      <hr className="w-full border-[#99AD52] relative top-[1vw]" />

      <div className=" flex pt-8 px-10 pb-20 font-[NeueMontreal-Regular] text-md text-[#212121]">
        <h3 className="w-1/2">What you can expect:</h3>

        <div className=" w-1/3 gap-x-40 ml-3 text-[#212121] font-[NeueMontreal-Regular]">
          <p className="w-[17.5rem] mb-[1.8rem] ">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="w-[17rem]">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className=" relative top-[5.5rem]">
          <span className="">S:</span>
          <ul className="text-md underline mt-3">
            <li className="cursor-pointer">Instagram</li>
            <li className="cursor-pointer">Behance</li>
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Linkedin</li>
          </ul>
        </div>
      </div>
      <hr className="w-full border-[#99AD52]  " />

      <div className=" w-full px-10 pt-4 flex justify-between ">
        <div className="pb-10">
          <h1 className="text-[3.9vw] text-[#212121] font-[NeueMontreal-Regular]">
            Our approach:
          </h1>
          <button
            className="text-[0.9rem] bg-[#212121] text-zinc-100 uppercase font-[NeueMontreal-Regular]
                     py-5 px-7 rounded-full flex justify-center items-center gap-6 mt-2 leading-none tracking-tight"
          >
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className=" w-1/2 h-[68vh] mb-14">
          <img className="rounded-xl" src={ApproachImg} alt="stratergy" />
        </div>
      </div>
    </div>
  );
}

export default About;
