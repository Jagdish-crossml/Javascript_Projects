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




const change = document.querySelectorAll('.rotateimg')
const change1 = document.getElementById('rotateimg')
const change2 = document.getElementById('rotateimg1')
const change3 = document.getElementById('rotateimg2')
const change4 = document.getElementById('rotateimg3')
const change5 = document.getElementById('rotateimg4')
const span = document.getElementById('data')
const element1 = document.getElementById('textbox')
const element10 = document.getElementById('textbox1')
const element11 = document.getElementById('textbox2')
const element12 = document.getElementById('textbox3')
const element13 = document.getElementById('textbox4')
const element2 = document.getElementById('textdiv')
const element20 = document.getElementById('textdiv1')
const element21 = document.getElementById('textdiv2')
const element22 = document.getElementById('textdiv3')
const element23 = document.getElementById('textdiv4')

const close = document.getElementById('wrongimg');
const showdata = document.getElementById('rightimg');
// change.forEach(item => {
change1.addEventListener('click', function() {
    console.log('click')
    const hide1 = function(element1, element2) {
        element1.classList.toggle('hide')
        element2.classList.toggle('hide')
        change1.style.display = 'none'
        element1.style = 'margin-top:30px'
        element2.style = 'margin-top:-35px'
    }
    hide1(element1, element2)
});
// })
close.addEventListener('click', function() {
    const hideone = function(element1, element2) {
        element1.classList.toggle('hide')
        element2.classList.toggle('hide')
            // .forEach(i => {
        change1.style.display = 'block'
            // })
    }
    hideone(element1, element2)
})
showdata.addEventListener('click', function() {
    const hideone = function(element1, element2) {
        element1.classList.toggle('hide')
        element2.classList.toggle('hide')
            // change.forEach(i => {
        change1.style.display = 'block'
            // })
        span.innerHTML = element1.value

    }
    hideone(element1, element2)
})

// change2.addEventListener('click', function() {
//     console.log('click')
//     const hide1 = function(element10, element20) {
//         element10.classList.toggle('hide')
//         element20.classList.toggle('hide')
//         change2.style.display = 'none'
//         element10.style = 'margin-top:-30px'
//         element20.style = 'margin-top:-41px'
//     }
//     hide1(element10, element20)
// });
// // })
// close.addEventListener('click', function() {
//     const hideone = function(element10, element20) {
//         element10.classList.toggle('hide')
//         element20.classList.toggle('hide')
//             // .forEach(i => {
//         change2.style.display = 'block'
//             // })
//     }
//     hideone(element10, element20)
// })
// showdata.addEventListener('click', function() {
//     const hideone = function(element10, element20) {
//         element10.classList.toggle('hide')
//         element20.classList.toggle('hide')
//             // change.forEach(i => {
//         change2.style.display = 'block'
//             // })
//         span.innerHTML = element10.value
//     }
//     hideone(element10, element20)
// })

// change1.addEventListener('click', function() {
//     console.log('click')
//     const hide1 = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//         change1.style.display = 'none'
//         element1.style = 'margin-top:-30px'
//         element2.style = 'margin-top:-41px'
//     }
//     hide1(element1, element2)
// });
// // })
// close.addEventListener('click', function() {
//     const hideone = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//             // .forEach(i => {
//         change1.style.display = 'block'
//             // })
//     }
//     hideone(element1, element2)
// })
// showdata.addEventListener('click', function() {
//     const hideone = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//             // change.forEach(i => {
//         change1.style.display = 'block'
//             // })
//         span.innerHTML = element1.value
//     }
//     hideone(element1, element2)
// })
// change1.addEventListener('click', function() {
//     console.log('click')
//     const hide1 = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//         change1.style.display = 'none'
//         element1.style = 'margin-top:-30px'
//         element2.style = 'margin-top:-41px'
//     }
//     hide1(element1, element2)
// });
// // })
// close.addEventListener('click', function() {
//     const hideone = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//             // .forEach(i => {
//         change1.style.display = 'block'
//             // })
//     }
//     hideone(element1, element2)
// })
// showdata.addEventListener('click', function() {
//     const hideone = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//             // change.forEach(i => {
//         change1.style.display = 'block'
//             // })
//         span.innerHTML = element1.value
//     }
//     hideone(element1, element2)
// })
// change1.addEventListener('click', function() {
//     console.log('click')
//     const hide1 = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//         change1.style.display = 'none'
//         element1.style = 'margin-top:-30px'
//         element2.style = 'margin-top:-41px'
//     }
//     hide1(element1, element2)
// });
// // })
// close.addEventListener('click', function() {
//     const hideone = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//             // .forEach(i => {
//         change1.style.display = 'block'
//             // })
//     }
//     hideone(element1, element2)
// })
// showdata.addEventListener('click', function() {
//     const hideone = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//             // change.forEach(i => {
//         change1.style.display = 'block'
//             // })
//         span.innerHTML = element1.value
//     }
//     hideone(element1, element2)
// })


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