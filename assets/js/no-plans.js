document.addEventListener("DOMContentLoaded", function (e) {slideBitches()})


const slideBitches = (e) => {

    // main js
    
    const AddPlan = document.querySelector(".add-plan-image");
    const EmptyDiv = document.querySelector(".empty-div")
    const Form = document.querySelector(".NewPlanForm")
    const listOfSpecialInputs = document.querySelectorAll(".special-dropdown")

    AddPlan.addEventListener("click", (e) => {
        EmptyDiv.style.display = "none"
        Form.classList.add("show-form")
    })

    listOfSpecialInputs.forEach((input) => {
        input.addEventListener("click", (e) => {
            input.firstElementChild.firstElementChild.textContent =  e.target.textContent;
        })
    })



    // slider code

    const slider = document.querySelector(".slider")
    const currentPercent = document.querySelector(".current")
    const leftOver = document.querySelector(".negative")
    slider.addEventListener("mousemove", (e) => {
        let sliderValue = slider.value
        updateSlider(sliderValue)
    })

    const updateSlider = (val) => {
        document.documentElement.style.setProperty("--colorMax", `${val}%`)
        currentPercent.textContent = `${val}%` 
        leftOver.textContent = `${100 - val}%`
    }
}

