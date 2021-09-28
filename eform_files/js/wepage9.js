$(function() {
    $('#load').click(function() {
        $('#box:none').slice(0, 2).show();
        if ($('#box').length == $('#box:block').length) {
            $('#load').hide();
        }
    });
});

var html = '';
const jsondata = async function() {
    const response = await fetch('http://localhost:8000/fields');

    const data = await response.json();
    console.log(data.length)
    for (i = 0; i < data.length; i++) {
        html += `<div id="box"><ul id="datalist">
            <li> ${data[i].fields.fname} <img id="cpimg" alt="e-form" src="assets/copy.png">
            <img id="puimg" alt="e-form" src="assets/pause.png">
            <img id="unimg" alt="e-form" src="assets/unpin.png"></li>
            <li> ${data[i].fields.lname} </li>
            <li><img id="raimg" src="assets/rating.png"></li>
            </ul></div>`;
        var container = document.getElementById("datadiv");
        container.innerHTML = html;
        // contsiner.insertAdjacentHTML('beforeend', '<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>')

    }

}
jsondata();



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
    const response = await fetch('http://localhost:8000/fields');

    const data1 = await response.json();
    console.log(data1[0])
    document.getElementById('textInput').addEventListener('keyup', function() {
        let pattern = new RegExp(this.value, 'g');

        let resultSet = data1.filter(item => item.fields.fname.match(pattern) && this.value != '').map(item => `<li id="resultset"> ${item.fields.fname} </li>`);

        document.getElementById('ismyModal').innerHTML = resultSet;
    });
}
searchValue();


var mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.getElementById('datadiv').scrollTop > 3 || document.documentElement.scrollTop > 2) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.getElementById('datadiv').scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


const modalfunc = function() {
    var modal = document.getElementById("ismyModal");
    var btn = document.getElementById("textInput");

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