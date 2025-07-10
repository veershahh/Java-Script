// Immediately Invoked Function Expression (IIFE) 

(function() {
    const username = "veer";
    console.log("IIFE:", username);
})();

(() =>{
    const username = "veer";
    console.log("IIFE Arrow:", username);
})()