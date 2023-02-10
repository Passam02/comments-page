const buttons = document.querySelectorAll('.buttons')
const inputs = document.querySelectorAll('.inputs')
const edits = document.querySelectorAll('.edit')
var turnedOn = false
for (let i of inputs) {
    i.addEventListener('click' , (e) => {
        if (turnedOn === false) {
            console.log('works')
            buttons[0].style.display = 'flex'
            for (let i of inputs) {
            i.style.borderColor = 'white'
            i.style.transition = '0.7s'
            }
            turnedOn = true
        }
})}

const cancel = document.querySelectorAll('.cancel')
for (let c of cancel) {
c.addEventListener('click', () => {
    for (let b of buttons) {
    b.style.display = 'none'
    }
    for (let i of inputs) {
        i.style.borderColor = 'grey'
        }
    for (let e of edits) {
        var ep = e.parentElement.parentElement.parentElement
        ep.style.display = 'flex'
        ep.parentElement.children[1].children[0].style.borderColor = 'grey'
    }
    turnedOn = false
})
}

for (let e of edits) {
    let ep = e.parentElement.parentElement.parentElement
    console.dir(ep.parentElement.children[1])
    e.addEventListener('click', () => {
        ep.style.display = 'none'
        const txt = ep.parentElement.children[1].innerText
        ep.parentElement.children[1].innerHTML = '<input class="comment"value="'+txt+'">'
        ep.parentElement.nextElementSibling.style.display = 'flex'
        ep.parentElement.children[1].children[0].style.transition = '0.7s'
        ep.parentElement.children[1].children[0].style.borderColor = 'white'
        })
}