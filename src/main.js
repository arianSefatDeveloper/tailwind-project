 const hamberger = document.querySelector("#hamberger"); 
 const mobileMenu = document.querySelector("#mobile-menu"); 


 hamberger.addEventListener("click",function(){
    mobileMenu.classList.toggle("opacity-0")
    hamberger.classList.toggle("text-white")
   
 })