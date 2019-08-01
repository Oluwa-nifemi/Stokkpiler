document.querySelectorAll('.password-div').forEach(e => {
    e.querySelector('button').addEventListener('click', () => {
        const passwordInput = e.querySelector('input');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
    })
});
