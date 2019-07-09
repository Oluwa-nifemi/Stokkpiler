const closeImgbtn = document.querySelectorAll('.x-button')
const overlayImage = document.querySelector('.overlay')
const cfm = document.querySelector(".withdrawal-confirmation")
const shsucces = document.querySelectorAll(".notify-img")
const clImg = document.querySelector(".close-img")

closeImgbtn.forEach(button => {
	button.addEventListener('click', (e) => {
		overlayImage.classList.remove("show-form")
		if(cfm !== null){
			cfm.classList.remove("hideConfirmation")
		}
		if ( shsucces !== []){
			shsucces.forEach(img => {
				img.classList.remove("showSuccess")
			})
		}
		if(clImg !== null){
			clImg.classList.remove("showSuccess")
		}
	})

})
