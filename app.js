const div = document.querySelector('div')
const btn = document.querySelector('button')


btn.addEventListener('click', () => {
    let a = Math.floor(Math.random() * 100)
    console.log(a)
    let num1 = 1
    const interval = setInterval(function () {
        div.innerHTML = num1++
    }, 50)
})

