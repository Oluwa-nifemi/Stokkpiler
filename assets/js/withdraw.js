const overlay = document.querySelector('.overlay')
const withdrawalTable = document.querySelector('.withdrawal-confirmation')
const successImg = document.querySelector('.success-img')
const failedImg = document.querySelector('.failed-img')
const confirmBtn = document.querySelector('.confirm')
const submit = document.querySelector('.plans-submit')
const closeImg = document.querySelector('.close-img')

submit.addEventListener("click", (e) => {
    e.preventDefault()
    overlay.classList.add('show-form')
})

confirmBtn.addEventListener("click", () => {
    withdrawalTable.classList.add('hideConfirmation')
    successImg.classList.add('showSuccess')
    closeImg.classList.add('showSuccess')
})




