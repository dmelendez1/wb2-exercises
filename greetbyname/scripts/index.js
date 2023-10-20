
function onGreetUserBtnClicked() {
    const nameInput = document.getElementById('nameInput')
    const userName = nameInput.value;
    if (userName.trim() === '') {
        alert('Please enter your name')
    } else {
        const greetingMessage = ` Hello ${userName},`
        alert(greetingMessage);
    }
}


function init() {
    const greetButton = document.getElementById('greetBtn')

    greetButton.addEventListener('click', onGreetUserBtnClicked)
}

window.onload = init