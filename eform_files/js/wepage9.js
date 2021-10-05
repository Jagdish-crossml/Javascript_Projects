// var html = '';
// const jsondata = async function() {
//     const response = await fetch('http://localhost:8002/fields');

//     const data = await response.json();
//     console.log(data.length)
//     for (i = 0; i < data.length; i++) {
//         html += `<div id="box"><ul id="datalist">
//             <li> ${data[i].fields.address} <img id="cpimg" alt="e-form" src="assets/copy.png">
//             <img id="puimg" alt="e-form" src="assets/pause.png">
//             <img id="unimg" alt="e-form" src="assets/unpin.png"></li>
//             <li><img id="raimg" src="assets/rating.png"><label id="number">8.5</label></li>
//             </ul></div>`;
//         var container = document.getElementById("datadiv");
//         container.innerHTML = html;
//         const btns = document.createElement('button')
//         btns.innerText = 'Load More'
//         btns.id = 'load'
//         btns.className = 'btn btn-primary'
//         document.getElementById('datadiv').insertAdjacentElement('beforeend', btns)
//         btns.addEventListener('click', function() {
//             $(window).scroll(function() {
//                 if ($(window).scrollTop() == $(document).height() - $(window).height()) {
//                     // ajax call get data from server and append to the div

//                 }
//             });
//         })
//     }

// }
// jsondata();

// var html = '';
// const jsondata = async function() {
//     const response = await fetch('http://localhost:8002/fields');

//     const data = await response.json();
//     console.log(data.length)
//     for (i = 0; i < data.length; i++) {

//         html += `<div id="one">
//         <p id="text"> ${data[i].fields.address}</p>
//         <div id="images">
//                 <i class="far fa-copy" id="cpimg"></i>
//                 <i class="fas fa-pause" id="puimg"></i>
//                 <i class="bi bi-pin-angle" id="unimg"></i>
//             </div>
//             <div id="group">
//             <img id="raimg" src="assets/rating.png">
//             <label id="number"> ${data[i].fields.rating} </label>
//             </div></div>`;
//         var container = document.getElementById("datadiv");
//         container.innerHTML = html;
//         const btns = document.createElement('button')
//         btns.innerText = 'Load More'
//         btns.id = 'load'
//         btns.className = 'btn btn-primary'
//         document.getElementById('datadiv').insertAdjacentElement('beforeend', btns)
//         btns.addEventListener('click', function() {
//             window.scroll({ top: 100, behavior: 'smooth' })

//         })
//     }

// }
// jsondata();


document.getElementById('topdiv').addEventListener('click', function() {
    const element = document.getElementById('rectangle1')
    const hide = function(element) {
        element.style.display = 'none';
        document.getElementById('topdiv').style.top = '550px';
        document.getElementById('topdiv').innerHTML = '<img id="eformimg" src="assets/eform.png">'
    }
    const show = function(element) {
        element.style.display = 'block';
        document.getElementById('topdiv').style.top = '142px';
        document.getElementById('topdiv').innerHTML = '<img id="arrow" src="assets/down.png">'
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


const search = document.getElementById('srchimg')
search.addEventListener('click', function() {
    const element1 = document.getElementById('textInput')
    const hide1 = function(element1) {
        element1.classList.toggle('hide')
    }
    hide1(element1)
});




//search function
var rect = document.getElementById('sdiv');
async function searchValue() {
    const response = await fetch('http://localhost:8002/fields');

    const data1 = await response.json();
    console.log(data1[0].fields.address)
    document.getElementById('textInput').addEventListener('keyup', function() {
        let pattern = new RegExp(this.value, 'g');
        let resultSet = data1.filter(item => item.fields.address.match(pattern) && this.value != '').map(item => `<div id="resultset"><p id="resultdata">${item.fields.address}<p> <button type="button" id="btn"> In the suggestions <i class="bi bi-reply" id="reply"></i></button></div>`);
        console.log(resultSet)
        document.getElementById('ismyModal').innerHTML = resultSet;
    });
}
searchValue();


//search box 
const modalfunc = function() {
    var modal = document.getElementById("ismyModal");
    var btn = document.getElementById("textInput");
    if (modal.style.display = "none") {
        btn.onclick = function() {
            modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
        }
    }
}
modalfunc();

//+2 user icon modal
const modal_function = function() {
    var modals = document.getElementById("iconModal");
    var btns = document.querySelector(".icon");
    if (modals.style.display = "none") {
        btns.onclick = function() {
            modals.style.display = modals.style.display === 'none' ? 'block' : 'none';
        }
    }
}
modal_function();


//current user modal
const modalfunction = function() {
    var modal = document.getElementById("userModal");
    var btn = document.getElementById("dimg");
    if (modal.style.display = "none") {
        btn.onclick = function() {
            modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
        }
    }
}
modalfunction();

// const togglePin = document.getElementById('#unimg');
// // const password = document.querySelector('#npassword');
// togglePassword.addEventListener('click', function(e) {
//     const type = password.getAttribute('type') === 'npassword' ? 'text' : 'npassword';
//     password.setAttribute('type', type);
//     this.classList.toggle('bi-eye');
// });


//Get the button
var mybutton = document.getElementById("myBtn");
var rectangle = document.getElementById('datadiv');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (rectangle.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        mybutton.classList.remove('hide');
    } else {
        mybutton.classList.add('hide');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    rectangle.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
}