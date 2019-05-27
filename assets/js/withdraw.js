const overlay = document.querySelector('.overlay')
const withdrawalTable = document.querySelector('.withdrawal-confirmation')
const successImg = document.querySelector('.success-img')
const failedImg = document.querySelector('.failed-img')
const confirmBtn = document.querySelector('.confirm')
const submit = document.querySelector('.plans-submit')


submit.addEventListener("click", (e) => {
    e.preventDefault()
    overlay.classList.add('openOverlay')
})

confirmBtn.addEventListener("click", () => {
    // overlay.classList.remove('openOverlay')
    withdrawalTable.classList.add('hideConfirmation')
    successImg.classList.add('showSuccess')
})




