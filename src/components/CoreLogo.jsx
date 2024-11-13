import { Link } from "react-router-dom";

function CoreLogo() {
   return (
      <>
         <Link
            to="/"
            className="font-normal text-white text-[2.6rem] group transition-[color] duration-300"
         >
            dmit<span className="group-hover:text-[#47ffe3]">/</span>it
         </Link>
      </>
   );
}

export default CoreLogo;
