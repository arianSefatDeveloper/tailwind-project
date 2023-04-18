 const hamberger = document.querySelector("#hamberger"); 
 const mobileMenu = document.querySelector("#mobile-menu"); 
 const dark = document.querySelector("#dark"); 
 const darkMobile = document.querySelector("#dark-mobile"); 
 const body = document.querySelector("body"); 
 const mobileLinks = document.querySelectorAll("#mobile-link")
 const line = document.querySelectorAll("#line")


 hamberger.addEventListener("click",function(){
    mobileMenu.classList.toggle("hidden")
    hamberger.classList.toggle("text-white")
    line.forEach(function(itme){

      itme.classList.toggle("bg-white")
    })
   
 })


 mobileLinks.forEach(function(link){
   link.addEventListener("click" , function(){

      mobileMenu.classList.toggle("hidden")
      hamberger.classList.toggle("text-white")

   })

 })



 dark.addEventListener("click",function(){
   body.classList.toggle("dark")
 })
