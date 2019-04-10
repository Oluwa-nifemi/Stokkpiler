const verifyButton = document.querySelector('.Verification-submit')
const successImage = document.querySelector('.success-image')
const overlay = document.querySelector('.overlay')


verifyButton.addEventListener('click', (e) => {
    e.preventDefault()
    overlay.classList.add('backgroundBlend')
    successImage.classList.add('show-success')
})