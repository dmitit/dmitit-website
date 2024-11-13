import CoreContainer from "../components/UI/CoreContainer";
import { useEffect, useState } from "react";

function CoreMain() {
   const [showSecondLine, setShowSecondLine] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setShowSecondLine(true);
      }, 1200);

      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         <div>
            <CoreContainer>
               <div className="relative">
                  <h1 className="relative mt-[10rem] text-[10rem] leading-[1.1] h-[35rem]">
                     <span className="pl-[0] inline-block animate-anima-slide-in-right">
                        Your{" "}
                        <b className="hover:bg-black font-semibold hover:text-[#47ffe3]">
                           choice
                        </b>
                     </span>
                     <br />
                     {showSecondLine && (
                        <span className="pl-[12%] inline-block animate-anima-slide-in-top">
                           Our{" "}
                           <b className="font-semibold hover:bg-black hover:text-[#47ffe3]">
                              work
                           </b>
                        </span>
                     )}
                  </h1>
                  <div className="max-w-[58%] pb-[20rem]">
                     <div className="flex justify-between h-[5rem] gap-x-[4rem]">
                        <div className="border-[2px] border-black text-black hover:border-blue-500 text-[2.4rem] flex-1 flex items-center rounded-bl-[2rem] pl-[3rem] rounded-tr-[2rem] cursor-default font-light hover:font-normal transition-all">
                           style
                        </div>
                        <div className="border-[2px] border-black text-black hover:border-green-500 text-[2.4rem] flex-1 flex items-center rounded-bl-[2rem] pl-[3rem] rounded-tr-[2rem] cursor-default font-light hover:font-normal transition-all">
                           ease
                        </div>
                        <div className="border-[2px] border-black text-black hover:border-red-500 text-[2.4rem] flex-1 flex items-center rounded-bl-[2rem] pl-[3rem] rounded-tr-[2rem] cursor-default font-light hover:font-normal transition-all">
                           accurancy
                        </div>
                     </div>
                  </div>
                  <div className="animate-anima-intro-rectangle w-[14rem] h-[7rem] bg-blue-500 absolute left-[85%] top-[0%]"></div>
                  <div
                     className="animate-anima-intro-triangle w-[0] h-[0] absolute left-[58%] top-[10%] clip-path-polygon"
                     style={{
                        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                        backgroundColor: "red",
                        width: "14rem",
                        height: "14rem",
                     }}
                  ></div>
                  <div className="animate-anima-intro-circle w-[12rem] h-[12rem] bg-green-500 absolute left-[80%] top-[40%] rounded-full"></div>
               </div>
            </CoreContainer>
         </div>
      </>
   );
}

export default CoreMain;
