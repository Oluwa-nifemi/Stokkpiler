const slideBitches = (e) => {

    // main js
    
    const AddPlan = document.querySelector(".add-plan-image");
    const EmptyDiv = document.querySelector(".empty-div")
    const Form = document.querySelector(".NewPlanForm")
    const listOfSpecialInputs = document.querySelectorAll(".special-dropdown")

    if (AddPlan !== null) {
        AddPlan.addEventListener("click", (e) => {
            EmptyDiv.style.display = "none"
            Form.classList.add("show-form")
        })    
    }

    listOfSpecialInputs.forEach((input) => {
        input.addEventListener("click", (e) => {
            input.firstElementChild.firstElementChild.textContent =  e.target.textContent;
        })
    })



    function listener(elm, listeners, cb) {
        let events = listeners.split(" ").filter(a => a).join("").split(",")
        events.forEach(event => {
            if(elm !== null){
            elm.addEventListener(event, cb)}
        })
    }

    // slider code

    const slider = document.querySelector(".slider")
    const currentPercent = document.querySelector(".current")
    const leftOver = document.querySelector(".negative")

    listener(slider, "mousemove,touchmove,change", (e) => {
        let sliderValue = slider.value
        updateSlider(sliderValue)
    })

    // slider.addEventListener("mousemove", )

    // slider.addEventListener("touchmove", (e) => {
    //     let sliderValue = slider.value
    //     console.log("noo")
    //     updateSlider(sliderValue)
    // })

    console.log(slider) 


    const updateSlider = (val) => {
        document.documentElement.style.setProperty("--colorMax", `${val}%`)
        currentPercent.textContent = `${val}%` 
        leftOver.textContent = `${100 - val}%`
    }
}

document.addEventListener("DOMContentLoaded", slideBitches)