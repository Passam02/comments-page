const form = document.querySelector('.createComment')
const buttons = document.querySelector('.buttons')
var turnedOn = false
form.addEventListener('click' , (e) => {
    e.preventDefault()
    if (turnedOn === false) {
        console.log('works')
        const cancel = document.createElement('button')
        const send = document.createElement('button')
        cancel.className = '.cancel'
        cancel.innerText ='Cancel'
        send.className = '.send'
        send.innerText = 'Send'
        buttons.append(cancel)
        buttons.append(send)
        turnedOn = true
    }
})