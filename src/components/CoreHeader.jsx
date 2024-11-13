import CoreContainer from "./UI/CoreContainer";
import CoreNavLink from "./UI/CoreNavLink";
import CoreLogo from "./CoreLogo";

function CoreHeader() {
   return (
      <header className="bg-[#141414] py-[0.8rem]">
         <CoreContainer>
            <nav className="grid text-white grid-cols-3">
               <div className="bg-[#141414] text-center flex justify-start">
                  <CoreLogo />
               </div>
               <ul className="gap-x-[3rem] flex items-end justify-center pb-[0.5rem]">
                  <li>
                     <CoreNavLink href={"/"}>home</CoreNavLink>
                  </li>
                  <li>
                     <CoreNavLink href={"/contact"}>contacts</CoreNavLink>
                  </li>
                  <li>
                     <CoreNavLink href={"/about-us"}>about us</CoreNavLink>
                  </li>
               </ul>
               <ul className="flex items-end justify-end pb-[0.5rem] ">
                  <li>RU</li>
               </ul>
            </nav>
         </CoreContainer>
      </header>
   );
}

export default CoreHeader;
