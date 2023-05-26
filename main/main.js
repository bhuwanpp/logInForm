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


btn.addEventListener('click',(e) =>{
    if(email.value=== '' || password.value === ''){
        alert('please fill all ')
        e.preventDefault();
    }else if(email.value === 'bhbanpaudel79@gmail.com' && password.value === '12345'){
    

      window.location.href = "/log/log.html";

    }else{
        alert('you entered the wrong email or password')
    }
})
