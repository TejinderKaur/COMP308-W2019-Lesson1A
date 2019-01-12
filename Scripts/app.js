"use strict";

let myGlobalVariable = 0;

//Self executing Anonymous function
//IIFE- Immediately Invoked Function Expression

(function(){

    let myFunctionVariable = 0;

    function Start(){

        let startVariable = 0;
        console.log("%cApp started...", "font-size: 20px; color: blue;")
       
    }
    function Start() {

        let startVariable = 0;
        console.log(`%cApp started... ${startVariable}`, "font-size: 20px; color: blue;")
       
    }
    window.addEventListener("load", Start);
})();