document.getElementById('top_div').addEventListener('click', function() {
    const element = document.getElementById('main_container')
    const hide = function(element) {
        element.style.display = 'none';
        document.getElementById('top_div').style.top = '400px';
        document.getElementById('top_div').innerHTML = '<img id="eformimg" src="assets/eform.png">'
    }
    const show = function(element) {
        element.style.display = 'block';
        document.getElementById('top_div').style.top = '0px';
        document.getElementById('top_div').innerHTML = '<i class="fa fa-chevron-down" id="top_arrow"></i>'
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
    var btn2 = document.getElementById('Current_user_icon')
    if (modal.style.display = "none") {
        btn.onclick = function() {
            modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
        }
        btn2.onclick = function() {
            modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
        }
    }
}
modalfunction();



// const chnge_pass= document.getElementById('options')
// chnge_pass.addEventListener('click',function(){

// })