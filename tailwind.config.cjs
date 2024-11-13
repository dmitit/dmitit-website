module.exports = {
   content: ["./src/**/*.{js,jsx}", "./public/index.html"],
   theme: {
      extend: {
         animation: {
            "anima-star-glow": "star-glow 5s ease-in-out infinite",
            "anima-slide-in-right": "slide-in-right 1.5s ease",
            "anima-slide-in-top": "slide-in-top 1.5s ease",
            "anima-intro-triangle":
               "slide-in-top 1.5s, figure-floating-triangle 20s infinite 1.5s",
            "anima-intro-circle":
               "slide-in-right 1.5s, figure-floating-circle 20s infinite 1.5s",
            "anima-intro-rectangle":
               "slide-in-right 1.5s, figure-floating-rectangle 20s infinite 1.5s",
         },
         keyframes: {
            "figure-floating-rectangle": {
               "0%": {
                  transform: "translate(0px, 0px)",
               },
               "15%": {
                  transform: "translate(3px, -12px)",
               },
               "30%": {
                  transform: "translate(-2px, -8px)",
               },
               "45%": {
                  transform: "translate(1px, -4px)",
               },
               "60%": {
                  transform: "translate(-1px, -6px)",
               },
               "75%": {
                  transform: "translate(2px, -10px)",
               },
               "90%": {
                  transform: "translate(0px, -3px)",
               },
               "100%": {
                  transform: "translate(0px, 0px)",
               },
            },
            "figure-floating-circle": {
               "0%": {
                  transform: "translate(0px, 0px)",
               },
               "10%": {
                  transform: "translate(6px, -2px)",
               },
               "20%": {
                  transform: "translate(-4px, 3px)",
               },
               "30%": {
                  transform: "translate(2px, 6px)",
               },
               "40%": {
                  transform: "translate(5px, -5px)",
               },
               "50%": {
                  transform: "translate(-3px, 2px)",
               },
               "60%": {
                  transform: "translate(7px, 4px)",
               },
               "70%": {
                  transform: "translate(-1px, 3px)",
               },
               "80%": {
                  transform: "translate(2px, 1px)",
               },
               "90%": {
                  transform: "translate(-4px, 5px)",
               },
               "100%": {
                  transform: "translate(0px, 0px)",
               },
            },
            "figure-floating-triangle": {
               "0%": {
                  transform: "translate(0px, 0px)",
               },
               "10%": {
                  transform: "translate(2px, 4px)",
               },
               "20%": {
                  transform: "translate(3px, -3px)",
               },
               "30%": {
                  transform: "translate(-1px, 5px)",
               },
               "40%": {
                  transform: "translate(5px, 2px)",
               },
               "50%": {
                  transform: "translate(4px, -2px)",
               },
               "60%": {
                  transform: "translate(2px, 6px)",
               },
               "70%": {
                  transform: "translate(1px, 3px)",
               },
               "80%": {
                  transform: "translate(3px, 4px)",
               },
               "90%": {
                  transform: "translate(0px, 2px)",
               },
               "100%": {
                  transform: "translate(0px, 0px)",
               },
            },
            "star-glow": {
               "0%": {
                  opacity: "0",
                  transform: "scale(1)",
               },
               "20%": {
                  opacity: "0.5",
               },
               "35%": {
                  opacity: "1",
               },
               "50%": {
                  transform: "scale(2)",
               },
               "100%": {
                  transform: "scale(0)",
               },
            },
            "slide-in-right": {
               "0%": {
                  opacity: "0",
                  transform: "translateX(-150%)",
               },
               "100%": {
                  opacity: "1",
                  transform: "translateX(0)",
               },
            },
            "slide-in-top": {
               "0%": {
                  opacity: "0",
                  transform: "translateY(-200%)",
               },
               "100%": {
                  opacity: "1",
                  transform: "translateY(0)",
               },
            },
         },
         colors: {
            primary: "#1B73E8",
         },
      },
   },
   plugins: [],
};
