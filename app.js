const $resDesign =document.querySelector(".resDesign");
const $navLinksContainer =document.querySelector(".nav-links-container");
const $navLinks =document.querySelectorAll(".nav-links-container li");
$resDesign.onclick = () =>{
    $navLinksContainer.classList.toggle("nav-clicked");
    $resDesign.classList.toggle("resDesign-clicked");

    $navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = "";
        }
        else{
            link.style.animation= `navLinkAnimation 0.5s ease forwards ${index / 5 +
                0.5}s`;
        }
    });
};
