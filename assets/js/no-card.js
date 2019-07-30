document.querySelector('.add-card-btn').addEventListener('click', () => {
   document.querySelector('.no-card').classList.add('hide') 
   document.querySelector('form').classList.remove('hide')
})

document.querySelector('#card-number').addEventListener('input', function(){
    const {value} = this;
    const split = value.split('-').join('').split('').reduce((acc,cur,i) => {
        if(!acc[Math.floor(i / 4)])
            acc.push('')
        acc[Math.floor(i / 4)] += cur
        return acc
    },[]).filter(val => val) 
    this.value = split.join('-')
})


document.querySelector('#expiry-date').addEventListener('input', function(){
    const {value} = this;
    const split = value.split('/').join('').split('').reduce((acc,cur,i) => {
        if(!acc[Math.floor(i / 2)])
            acc.push('')
        acc[Math.floor(i / 2)] += cur
        return acc
    },[])
    this.value = split.join('/')
})

document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault()
    document.querySelector('.success-background').classList.remove('hide')
    setTimeout(() => {
        document.querySelector('.success').classList.add('active')
    },50)
    setTimeout(() => {
        document.querySelector('.success').classList.add('show')
    },350)
})

document.querySelector('.close-modal').addEventListener('click',(e) => {
    e.preventDefault()

    document.querySelector('.success').classList.remove('show')
    setTimeout(() => {
        document.querySelector('.success').classList.remove('active')
    },350)
    setTimeout(() => {
        document.querySelector('.success-background').classList.add('hide')
    },700)
})

window.addEventListener('DOMContentLoaded', () => {
    if(location.href.includes('new=true')){
        document.querySelector('.add-card-btn').click()
    }
})