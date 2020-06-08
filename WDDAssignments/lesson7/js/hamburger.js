const hamburger = document.querySelector(".primeNav");
hamburger.addEventListener("click", toggleMenu, false);

function toggleMenu(){
    console.log("it worked");
 document.getElementById("primeNav").classList.toggle("hide");
}