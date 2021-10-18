// const rect = document.getElementById('checkdiv')
// const checkbox = '<input type="checkbox" id="checktwo">'
// const text = ["What is your PAN number?", "What is your Social Security Number?", "What is your Email ID?", "What is your Father's name?"]
//     // for (j = 0; j < 10; j++) {
// // const name = `<label id="name">${text.map(a=>a[i]).join('')}</label>`
//     // }
// const changeimg = '<img id="rotateimg" src="assets/change.png">'
// const textbox = '<input class="hide" id="textbox" type="text">'
// const textdiv = '<div id="textdiv" class="hide">'
// const checkimg = '<i class="fa fa-check-circle" id="rightimg"></i>'
// const cancelimg = '<i class="fa fa-times-circle" id="wrongimg"></i>'
// const enddiv = '</div>'
// var toAdd = document.createDocumentFragment();

// for (i = 0; i < 5; i++) {
//     var div = document.createElement("div");
//     div.className = "finalBlock";
//     div.id = i
//     div.innerHTML = checkbox + name + changeimg + textbox + textdiv + checkimg + cancelimg + enddiv;
//     toAdd.appendChild(div)
// }
// rect.appendChild(toAdd)





const element2 = document.getElementById('icon_div')
const span = document.getElementById('data_label')
const element1 = document.getElementById('text_input_box')
const change1 = document.getElementById('change_info_icon')

const close = document.getElementById('check_icon');
const showdata = document.getElementById('close_icon');
// change.forEach(item => {
// if (span.value = '')
const texttoinput = function() {
    change1.addEventListener('click', function() {
        console.log('click')
        span.style.display = 'none'
        element1.value = span.innerHTML
        const hide1 = function(element1, element2) {
            element1.classList.toggle('hide')
            element2.classList.toggle('hide')
            change1.style.display = 'none'

            element1.style = 'margin-top:30px;margin-left:47px'
            element2.style = 'margin-top:-35px'
        }
        hide1(element1, element2)
        close.addEventListener('click', function() {
            const hideone = function(element1, element2) {
                span.innerHTML = element1.value
                element1.classList.add('hide')
                element2.classList.add('hide')
                change1.style.display = 'block'
                span.style.display = 'inline-block'
            }
            hideone(element1, element2)
        })
        showdata.addEventListener('click', function() {
            const hideone = function() {
                span.innerHTML = element1.value
                element1.classList.add('hide')
                element2.classList.add('hide')
                change1.style.display = 'block'
                span.style.display = 'inline-block'
            }
            hideone(element1, element2)
        })
    })

};


texttoinput()


//drawer function
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


//select all elements
function checkAll(ele) {
    var checkboxes = document.getElementsByName('check');
    if (ele.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {

            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}