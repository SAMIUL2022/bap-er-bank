document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField =document.getElementById('user-email');
    const email =emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email==='sami35@gmail.com'&& password==='467486'){window.location.href = 'taka.html'}
    else {
        alert('invalid user');
    }
})
