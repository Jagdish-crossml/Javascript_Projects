document.getElementById('top_arrow').addEventListener('click', function() {
    const element = document.getElementById('main_container')
    const hide = function(element) {
        element.style.display = 'none';
        document.getElementById('top_div').style.top = '550px';
    }
    const show = function(element) {
        element.style.display = 'block';
        document.getElementById('top_div').style.top = '142px';
    }
    const toggle = function(element) {
        if (window.getComputedStyle(element).display !== 'none') {
            hide(element);
            return;
        }
        show(element);
    }
    toggle(element)
});


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password_input');
togglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});

const modalfunction = function() {
    var modal = document.getElementById("avatar_modal");
    var btn = document.getElementById("user_dropdown_arrow");
    if (modal.style.display = "none") {
        btn.onclick = function() {
            modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
        }
    }
}
modalfunction();



// const chnge_pass= document.getElementById('options')
// chnge_pass.addEventListener('click',function(){

// })