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
const toplabel = document.getElementById('toplabel')
const search = document.getElementById('srchimg')
const closeicon = document.getElementById('closeicon')
search.addEventListener('click', function() {

    const element1 = document.getElementById('textInput')
    const hide1 = function(element1) {
        element1.classList.toggle('hide')
        closeicon.classList.toggle('hide')
        toplabel.style.display = toplabel.style.display === 'none' ? 'block' : 'none';
        closeicon.addEventListener('click', function() {
            element1.classList.add('hide')
            closeicon.classList.add('hide')
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