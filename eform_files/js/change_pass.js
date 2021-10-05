const modalfunc = function() {
    var modal = document.getElementById("ismyModal");
    var btn = document.getElementById("gen");

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
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#npassword');
togglePassword.addEventListener('click', function(e) {
    const type = password.getAttribute('type') === 'npassword' ? 'text' : 'npassword';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});
const reptogglePassword = document.querySelector('#reptogglePassword');
const reppassword = document.querySelector('#rpassword');
reptogglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = reppassword.getAttribute('type') === 'rpassword' ? 'text' : 'rpassword';
    reppassword.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});


document.getElementById('arrow').addEventListener('click', function() {
    const element = document.getElementById('rectangle1')
    const hide = function(element) {
        element.style.display = 'none';
        document.getElementById('topdiv').style.top = '550px';
    }
    const show = function(element) {
        element.style.display = 'block';
        document.getElementById('topdiv').style.top = '142px';
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