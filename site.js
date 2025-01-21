

const firstP = document.querySelector('p')
console.log(firstP)
firstP.textContent = "Hello"

const nav = document.querySelector('nav')
nav.style.textDecoration = 'overline'

const contactA = document.querySelector('#contact')
contactA.style.backgroundColor = '#440000'

const active = document.querySelector('.active')
console.log(active)
active.style.textDecoration = 'underline'

document.title = "CoolUsernameFvtcStudents' webpage"

document.addEventListener('click', (e) => {
    e.target.parentElement.style.border = '2px solid red'
    const section = e.target.closest('section')
})