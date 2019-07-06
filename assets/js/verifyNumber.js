const verifyButton = document.querySelector('.Verification-submit')
const successImage = document.querySelector('.success-image')
const overlay = document.querySelector('.overlay')
const input = document.querySelector('.Verification-input')


verifyButton.addEventListener('click', (e) => {
	if(input.value !== ''){
		e.preventDefault()
    overlay.classList.add('backgroundBlend')
    successImage.classList.add('show-success')	
	}
    
})