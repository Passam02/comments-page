const form = document.querySelector('.createComment')
const buttons = document.querySelector('.buttons')
const inputs = document.querySelectorAll('.inputs')
var turnedOn = false
for (let i of inputs) {
    i.addEventListener('click' , (e) => {
        e.preventDefault()
        if (turnedOn === false) {
            console.log('works')
            buttons.style.display = 'flex'
            turnedOn = true
        }
})}

