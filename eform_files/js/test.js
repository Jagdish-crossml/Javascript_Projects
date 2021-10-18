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
    // const span = document.getElementById('data_label')
const span = document.getElementsByClassName('data')
const element1 = document.getElementById('text_input_box')
    // const change1 = document.getElementById('change_info_icon')
const change1 = document.getElementsByClassName('rotateimg')
const close = document.getElementById('check_icon');
const showdata = document.getElementById('close_icon');

const texttoinput = function() {
    Array.prototype.forEach.call(change1, function(el) {
        el.addEventListener('click', function() {
            console.log('click')
                // Array.prototype.forEach.call(span, function(sp) {
                //         sp.style.display = 'none'
                //         element1.value = sp.innerHTML
                //     })
            for (i = 0; i < span.length; i++) {
                span.item[i].style.display = 'none'
                element1.value = span[i].innerHTML
            }

            const hide1 = function(element1, element2) {
                element1.classList.toggle('hide')
                element2.classList.toggle('hide')
                el.style.display = 'none'

                element1.style = 'margin-top:30px;margin-left:47px'
                element2.style = 'margin-top:-35px'
            }
            hide1(element1, element2)
            close.addEventListener('click', function() {
                const hideone = function(element1, element2) {
                    Array.prototype.forEach.call(span, function(sp) {
                        sp.innerHTML = element1.value
                        sp.style.display = 'inline-block'
                    })

                    element1.classList.add('hide')
                    element2.classList.add('hide')
                    el.style.display = 'block'

                }
                hideone(element1, element2)
            })
            showdata.addEventListener('click', function() {
                const hideone = function() {
                    Array.prototype.forEach.call(span, function(sp) {
                            sp.innerHTML = element1.value
                            sp.style.display = 'inline-block'
                        })
                        // span.innerHTML = element1.value
                    element1.classList.add('hide')
                    element2.classList.add('hide')
                    el.style.display = 'block'
                        // span.style.display = 'inline-block'
                }
                hideone(element1, element2)
            })
        })
    })

};


texttoinput()


//drawer function
document.getElementById('top_arrow').addEventListener('click', function() {
    const element = document.getElementById('main_container')
    const hide = function(element) {
        element.style.display = 'none';
        document.getElementById('top_div').style.top = '581px';
    }
    const show = function(element) {
        element.style.display = 'block';
        document.getElementById('top_div').style.top = '173px';
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