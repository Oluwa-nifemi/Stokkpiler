const cardInput = document.querySelector(".credit-card")
const cvv = document.querySelector(".cvv")

let arr = []


cardInput.addEventListener("input", function(e){
	// console.log(e.target)
	// console.log(arr)
	// arr = e.target.value.split('')
	// if (arr.length === 4 || arr.length === 9 || arr.length === 14 ){
	// 	arr.push("-")
	// 	e.target.value = arr.join('')
	// }
	const {value} = this;
    const split = value.split('-').join('').split('').reduce((acc,cur,i) => {
        if(!acc[Math.floor(i / 4)])
            acc.push('')
        acc[Math.floor(i / 4)] += cur
        return acc
    },[]).filter(val => val) 
    this.value = split.join('-')
})

let cvvArray = []
let savedArrCvv = []

cvv.addEventListener("input", (e) => {
	cvvArray = e.target.value.split("")
	if(cvvArray.length === 3){
		savedArrCvv = [...cvvArray]
	}
	if(cvvArray.length > 3){
		e.target.value = savedArrCvv.join('')
	}

})
