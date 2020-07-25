var nav = document.querySelector(".container");
var position =0;
window.addEventListener("scroll", function(){
   if(position<window.pageYOffset){
       console.log("down")
       nav.classList+=" up"
       position=window.pageYOffset
   }
   else{
       console.log("up")
       nav.classList="container small"
       position=window.pageYOffset 
   }
   }