const form = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const msg = document.querySelector('.msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || passwordInput.value === ''){
        msg.textContent = "Please enter all fields!";
        msg.style.color = "red";
        msg.style.fontSize = "18px";
        msg.style.margin = "10px 0";
        setTimeout(() => {
            msg.textContent = "";
        }, 2000);
        return;
    }

    console.log('Rak 3ajbni');
});
