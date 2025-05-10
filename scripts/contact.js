const inputs = document.querySelectorAll('.input input, .input textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('show-placeholder');
    });

    input.addEventListener('blur', () => {
        input.classList.remove('show-placeholder');
        input.classList.add('touched');
    });
});
