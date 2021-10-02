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
const span = document.getElementById('data')
const element1 = document.getElementById('textbox')
const element2 = document.getElementById('textdiv')

const close = document.getElementById('wrongimg');
const showdata = document.getElementById('rightimg');

change.forEach(item => {
    const id = item.getAttribute("id");
    // console.log(id)
    item.addEventListener('click', function() {

        const hide1 = function(element1, element2) {


            // console.log(id)
            if (id == 'rotateimg1') {
                element1.classList.toggle('hide')
                element2.classList.toggle('hide')
                item.id('rotateimg1').style.display = 'none'
                element1.style = 'margin-top:-30px'
                element2.style = 'margin-top:-41px'
            } else if (id == 'rotateimg2') {
                element1.classList.toggle('hide')
                element2.classList.toggle('hide')
                item.id('rotateimg2').style.display = 'none'
                element1.style = 'margin-top:40px'
                element2.style = 'margin-top:-35px'
            } else if (id == 'rotateimg3') {
                element1.classList.toggle('hide')
                element2.classList.toggle('hide')
                item.style.display = 'none'
                element1.style = 'margin-top:100px'
                element2.style = 'margin-top:-35px'
            } else if (id == 'rotateimg4') {
                element1.classList.toggle('hide')
                element2.classList.toggle('hide')
                item.style.display = 'none'
                element1.style = 'margin-top:160px'
                element2.style = 'margin-top:-35px'
            } else if (id == 'rotateimg5') {
                element1.classList.toggle('hide')
                element2.classList.toggle('hide')
                item.style.display = 'none'
                element1.style = 'margin-top:220px'
                element2.style = 'margin-top:-35px'
            } else {
                item.style.display = 'block'
            }
        }
        hide1(element1, element2)
    });
})



close.addEventListener('click', function() {


    const hideone = function(element1, element2) {
        element1.classList.toggle('hide')
        element2.classList.toggle('hide')

        change.forEach(i => {
            i.style.display = 'block'
        })


    }
    hideone(element1, element2)
})


showdata.addEventListener('click', function() {


    const hideone = function(element1, element2) {
        element1.classList.toggle('hide')
        element2.classList.toggle('hide')
        change.forEach(i => {
            i.style.display = 'block'
        })
        span.innerHTML = element1.value


    }
    hideone(element1, element2)

})


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