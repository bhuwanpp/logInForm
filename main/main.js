

document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const labels = document.querySelectorAll('.form-control label')
    
const email = document.getElementById('email');
const btn = document.getElementById('btn');
 const password = document.getElementById('password');

 const form = document.getElementById('form')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

btn.addEventListener('click', (e) => {
    console.log('button clicked')
    if (email.value === '' || password.value === '') {
       
        alert('Please fill in all fields ');
    } else if (email.value === 'bhubanpaudel79@gmail.com' && password.value === '12345') {
        // alert('Right');
        console.log('you came')
        window.location.href = "/log/log.html";
    } else {
        alert('You entered the wrong email or password');
    }
});

});