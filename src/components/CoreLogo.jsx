import { Link } from "react-router-dom";

function CoreLogo() {
   return (
      <>
         <Link
            to="/"
            className="font-normal text-white text-[2.6rem] hover:text-[#47ffe3] transition-[color] duration-300"
         >
            dmit.en
         </Link>
      </>
   );
}

export default CoreLogo;
