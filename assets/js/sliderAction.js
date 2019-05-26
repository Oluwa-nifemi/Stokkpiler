let hamburger = document.querySelector(".open")
let sliderClose = document.querySelector(".close")
let menu = document.querySelector(".withdraw-sidebar")
let overlayNew = document.querySelector(".cover-overlay")



const openSlider = () => {
    overlayNew.style.display = "block"
    menu.style.visibility = "visible"
    menu.classList.add("slidein")    
}


const closeSlider = () => {

    menu.classList.add("slideout")
    setTimeout(() => {
        menu.classList.remove("slidein")
        menu.classList.remove("slideout")
        overlayNew.style.display = "none"
        menu.style.visibility = "hidden"
    }, 1000)

}


hamburger.addEventListener("click", openSlider)
sliderClose.addEventListener("click", closeSlider)
overlayNew.addEventListener("click", closeSlider)