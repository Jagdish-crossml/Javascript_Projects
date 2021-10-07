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

var num;
var change = document.getElementById(`rotateimg${num}`);
var m1;
var m2;
var m3;
var s1;
var t1;
var t2;
const element2 = document.getElementById(`textdiv${t2}`)
const span = document.getElementById(`data${s1}`)
const element1 = document.getElementById(`textbox${t1}`)
const change1 = document.getElementById('rotateimg')
const close = document.getElementById('wrongimg');
const showdata = document.getElementById('rightimg');

const texttoinput = function(num, m1, m2, m3, s1, t1, ) {
    document.getElementById(`rotateimg${num}`).addEventListener('click', function() {
        console.log('click')
        document.getElementById(`data${s1}`).style.display = 'none'
        document.getElementById(`textbox${t1}`).value = document.getElementById(`data${s1}`).innerHTML
        const hide1 = function(t1, t2) {
            document.getElementById(`textbox${t1}`).classList.toggle('hide')
            document.getElementById(`textdiv${t2}`).classList.toggle('hide')
            document.getElementById(`rotateimg${num}`).style.display = 'none'

            document.getElementById(`textbox${t1}`).style = `margin-top:${m1}px;margin-left:${m2}px`
            document.getElementById(`textdiv${t2}`).style = `margin-top:${m3}px`
        }
        hide1(1, 1)
        hide1(2, 2)

    });
}
texttoinput(0, 30, 47, -35, 1, 1)
texttoinput(1, 30, 47, -35, 2)
texttoinput(2, 30, 47, -35, 3)


const click = function(num, s1) {
    close.addEventListener('click', function() {
        const hideone = function(t1, t2) {
            document.getElementById(`data${s1}`).innerHTML = document.getElementById(`textbox${t1}`).value
            document.getElementById(`textbox${t1}`).classList.add('hide')
            document.getElementById(`textdiv${t2}`).classList.add('hide')
            document.getElementById(`rotateimg${num}`).style.display = 'block'
            document.getElementById(`data${s1}`).style.display = 'inline-block'
        }
        hideone(1, 1)
        hideone(2, 2)
    })
    showdata.addEventListener('click', function() {
        const hideone = function(t1, t2) {
            document.getElementById(`data${s1}`).innerHTML = document.getElementById(`textbox${t1}`).value
            document.getElementById(`textbox${t1}`).classList.add('hide')
            document.getElementById(`textdiv${t2}`).classList.add('hide')
            document.getElementById(`rotateimg${num}`).style.display = 'block'
            document.getElementById(`data${s1}`).style.display = 'inline-block'
        }
        hideone(1, 1)
        hideone(2, 2)

    })
}
click(0, 1)
click(1, 2)
click(2, 3)




// close.addEventListener('click', function() {


//     const hideone = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')

//         change.forEach(i => {
//             i.style.display = 'block'
//         })


//     }
//     hideone(element1, element2)
// })


// showdata.addEventListener('click', function() {


//     const hideone = function(element1, element2) {
//         element1.classList.toggle('hide')
//         element2.classList.toggle('hide')
//         change.forEach(i => {
//             i.style.display = 'block'
//         })
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