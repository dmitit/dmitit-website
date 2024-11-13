import { Link } from "react-router-dom";

function CoreNavLink(props) {
   return (
      <>
         <Link
            to={props.href}
            className="relative before:absolute before:w-full before:h-[1px] before:bg-[#47ffe3] before:bottom-[-2px] before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-in-out before:origin-right hover:before:origin-left"
         >
            {props.children}
         </Link>
      </>
   );
}

export default CoreNavLink;
