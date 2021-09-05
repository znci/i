const random = document.getElementById('random-room');
const required = document.getElementById('required-fill');
const user = document.getElementById('username');
const joinRoom = document.getElementById('join-room');

random.addEventListener('click', () => {
    if(user.value) {
        window.location.href = `chat.html?username=${user.value}&room=${Math.floor(Math.random() * 99999)}`
    } else {
        usernameReq()
    }
})

joinRoom.addEventListener('click', () => {
    if(!user.value) {
        usernameReq()
    }
})

function usernameReq() {
    user.disableValidation = true;
    required.innerHTML = "Username is required."
    setTimeout(() => {
        required.innerHTML = ""
    }, 2000);

}