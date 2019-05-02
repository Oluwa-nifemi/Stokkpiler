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