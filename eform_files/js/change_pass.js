const modalfunc = function() {
    var modal = document.getElementById("ismyModal");
    var btn = document.getElementById("generate_pass_link");

    var span = document.getElementsByClassName("close")[0];
    if (modal.style.display = "none") {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }


    span.onclick = function() {
        modal.style.display = "none";
    }

    $(document).click(function(e) {
        if ($(e.target).is('#ismyModal')) {
            $('#ismyModal').fadeOut(500);
        }

    });


}
modalfunc();

//toggle eye icon
const togglePassword = document.querySelector('#toggle_Password');
const password = document.querySelector('#new_pass_input');
togglePassword.addEventListener('click', function(e) {
    const type = password.getAttribute('type') === 'new_pass_input' ? 'text' : 'new_pass_input';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});
const reptogglePassword = document.querySelector('#rpt_toggle_Password');
const reppassword = document.querySelector('#repeat_pass_input');
reptogglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = reppassword.getAttribute('type') === 'repeat_pass_input' ? 'text' : 'repeat_pass_input';
    reppassword.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});


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

        // show the element
        show(element);

    }
    toggle(element)

});