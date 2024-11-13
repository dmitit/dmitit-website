function CoreContainer(props) {
   return (
      <div className="max-w-[1366px] mx-auto px-[1.5rem] relative z-10">
         {props.children}
      </div>
   );
}

export default CoreContainer;
