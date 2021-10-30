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
const toplabel = document.getElementById('top_label')
const search = document.getElementById('search_img')
const closeicon = document.getElementById('closeicon')
search.addEventListener('click', function() {

    const element1 = document.getElementById('textInput')
    const hide1 = function(element1) {
        element1.style.display = 'block'
        closeicon.style.display = 'block'
        toplabel.style.display = toplabel.style.display === 'none' ? 'block' : 'none';
        closeicon.addEventListener('click', function() {
            element1.style.display = 'none'
            closeicon.style.display = 'none'
            toplabel.style.display = 'block'
        })
    }
    hide1(element1)
});

const dropdown_menu = document.getElementById('dropdown_menu')

function change(x) {
    if (x.value === 'up') {
        dropdown_menu.selectedIndex = dropdown_menu.selectedIndex + 1
    } else {
        dropdown_menu.selectedIndex = dropdown_menu.selectedIndex - 1
    }
};

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})