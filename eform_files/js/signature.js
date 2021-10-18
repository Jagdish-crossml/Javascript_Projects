document.getElementById('top_div').addEventListener('click', function() {
    const element = document.getElementById('main_container')
    const hide = function(element) {
        element.style.display = 'none';
        document.getElementById('top_div').style.top = '550px';
        document.getElementById('top_div').innerHTML = '<img id="eformimg" src="assets/eform.png">'
    }
    const show = function(element) {
        element.style.display = 'block';
        document.getElementById('top_div').style.top = '142px';
        document.getElementById('top_div').innerHTML = '<img id="top_arrow" src="assets/down.png">'
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


const search = document.getElementById('search_img')
search.addEventListener('click', function() {
    const element1 = document.getElementById('textInput')
    const element2 = document.getElementById('close_srch_bar')
    const hide1 = function(element1, element2) {
        element1.style.display = 'block'
        element2.classList.toggle('hide')
        element2.addEventListener('click', function() {
            element1.style.display = 'none'
            element2.classList.add('hide')
        })
    }
    hide1(element1, element2)
});




//search function
var rect = document.getElementById('search_div');
async function searchValue() {
    const response = await fetch('http://localhost:8002/fields');

    const data1 = await response.json();
    console.log(data1[0].fields.address)
    document.getElementById('textInput').addEventListener('keyup', function() {
        let pattern = new RegExp(this.value, 'g');
        let resultSet = data1.filter(item => item.fields.address.match(pattern) && this.value != '').map(item => `<div id="resultset"><p id="resultdata">${item.fields.address}<p> <button type="button" id="btn"> In the suggestions <i class="bi bi-reply" id="reply"></i></button></div>`);
        console.log(resultSet)
        document.getElementById('ismyModal').innerHTML = resultSet;
        const btn = document.querySelectorAll('#resultdata')
        btn.forEach(function(i) {
            i.addEventListener('click', function() {
                modalfunctions();
            })
        })
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
    var modal = document.getElementById("avatar_modal");
    var btn = document.getElementById("user_dropdown_arrow");
    if (modal.style.display = "none") {
        btn.onclick = function() {
            modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
        }
    }
}
modalfunction();

const togglePin = document.getElementById('pin_icon');
togglePin.addEventListener('click', function() {
    this.classList.toggle('bi-pin');
});


//Get the button
var mybutton = document.getElementById("scroll_to_top_btn");
var rectangle = document.getElementById('suggestion_div');

// When the user scrolls down 5px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (rectangle.scrollTo > 5) {
        mybutton.classList.remove('hide');
    } else {
        mybutton.classList.add('hide');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    rectangle.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    // document.documentElement.scrollTo = 0;
}



const modalfunctions = function() {
    var select = document.getElementById('select')
    var srch_modal = document.getElementById("search_reslt_modal");
    var span1 = document.getElementsByClassName("closeone")[0];
    if (srch_modal.style.display = "none") {
        srch_modal.style.display = "block";
        const fetchsearch = async function() {
            await fetch('http://localhost:8002/fields')
                .then(response => response.json())
                .then(data =>
                    select.textContent = (data[0].fields.address));
        }
        fetchsearch()
    }
    span1.onclick = function() {
        srch_modal.style.display = "none";
    }
    $(document).click(function(e) {
        if ($(e.target).is('#search_reslt_modal')) {
            $('#search_reslt_modal').fadeOut(500);
        }
    });
}