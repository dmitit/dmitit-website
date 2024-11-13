import CoreBackgroundStar from "./CoreBackgroundStar";

function generateRandomNum(min = 0, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function CoreBackgroundStars(props) {
   const stars = Array(props.amount)
      .fill()
      .map((_, index) => {
         const top = generateRandomNum(0, 100);
         const left = generateRandomNum(0, 100);
         const size = generateRandomNum(1.5, 2);
         const width = size;
         const height = size;
         const duration = generateRandomNum(5, 20);

         return (
            <CoreBackgroundStar
               key={index}
               style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${width}px`,
                  height: `${height}px`,
                  animationDuration: `${duration}s`,
               }}
            />
         );
      });

   return stars;
}

export default CoreBackgroundStars;
