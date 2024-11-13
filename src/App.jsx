import "./styles/app.css";
import CoreHeader from "./components/CoreHeader";
import CoreFooter from "./components/CoreFooter";
import CoreContainer from "./components/UI/CoreContainer";
import { Outlet } from "react-router-dom";
import CoreBackgroundStars from "./components/UI/BackgroundStars/CoreBackgroundStars";

function App() {
   return (
      <main>
         <CoreHeader />
         <div className="relative overflow-hidden">
            <CoreBackgroundStars amount={30} />
            <Outlet />
         </div>
         <CoreFooter />
      </main>
   );
}

export default App;
