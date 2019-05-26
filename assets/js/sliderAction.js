let hamburger = document.querySelector(".open")
let sliderClose = document.querySelector(".close")
let menu = document.querySelector(".withdraw-sidebar")
let overlayNew = document.querySelector(".cover-overlay")



const openSlider = () => {
    overlayNew.style.display = "block"
    menu.classList.add("slidein")    
    menu.classList.add("visible")
}


const closeSlider = () => {

    menu.classList.add("slideout")
    setTimeout(() => {
        menu.classList.remove("slidein")
        menu.classList.remove("slideout")
        menu.classList.remove("visible")
        overlayNew.style.display = "none"
    }, 400)

}


hamburger.addEventListener("click", openSlider)
sliderClose.addEventListener("click", closeSlider)
overlayNew.addEventListener("click", closeSlider)