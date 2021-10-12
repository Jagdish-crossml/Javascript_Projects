const modalfunc = function() {
    var modal = document.getElementById("ismyModal");
    var btn = document.getElementById("image");
    var modalimg = document.getElementById('modalimg')

    var span = document.getElementsByClassName("close")[0];
    if (modal.style.display = "none") {
        btn.onclick = function() {
            modal.style.display = "block";
            modalimg.src = image.src
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

const image = document.getElementById('image')
    // var copy = document.getElementById('copy')
const modalfunction = function() {
    var modal1 = document.getElementById("thisModal");
    var copy = document.getElementById('copy_url')

    var span1 = document.getElementsByClassName("close1")[0];
    if (modal1.style.display = "none") {
        copy.onclick = function() {
            modal1.style.display = "block";
        }
    }
    span1.onclick = function() {
        modal1.style.display = "none";
    }
    $(document).click(function(e) {
        if ($(e.target).is('#thisModal')) {
            $('#thisModal').fadeOut(500);
        }
    });
}
modalfunction();
// const image = document.getElementById('picture');
// const image1 = document.getElementById('picture1');
// const image2 = document.getElementById('picture2');
// const image3 = document.getElementById('picture3');
// const image4 = document.getElementById('picture4');


// var html = '';
// const jsondata = async function() {
//     const response = await fetch('http://localhost:8000/fields');

//     const data = await response.json();
//     const response2 = await fetch('http://localhost:8003/fields');
//     const data2 = await response2.json();
//     // console.log(data2)
//     for (i = 0; i < data.length; i++) {
//         html += `<div id="box"><img id='docimg${i}' src=${data[i].fields.picture}></div>`;
//         var container = document.getElementById("rectangle2");
//         container.innerHTML = html;
//     }

//     function getElementByXpath(path) {
//         return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     }
//     for (let i = 0; i < data2.length; i++) {
//         const element = data2[i];
//         console.log(element)

//         var ele = getElementByXpath(element.xpath);
//         console.log('ele', ele);
//         document.getElementById(`docimg${i}`).addEventListener('click', function() {
//             document.getElementById('box').style = 'border:1px solid black';
//             console.log('click')

//             ele.src = data[i].fields[element.attribute_name];
//             // fillforms(data[i]);
//         })

//         // console.log(ele.src)


//         // function fillforms(data) {
//         //     fillField(image, data[i]);
//         //     fillField(image1, data[i]);
//         //     fillField(image2, data[i]);
//         // }

//         // function fillField(field, value) {
//         //     if (field) {
//         //         field.value = value;
//         //     }
//         // }
//     }
//     const box = document.getElementById('box')
//     const docimg = document.getElementById(`docimg${i}`)
//     for (i = 0; i < 6; i++) {
//         box.addEventListener('click', function() {
//             box.style = 'width:346px;height:200px;'

//         })
//     }
// }
// jsondata()





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

        // show the element
        show(element);

    }
    toggle(element)

});
const doclable = document.getElementById('top_label')
const search = document.getElementById('search_img')
search.addEventListener('click', function() {

    const element1 = document.getElementById('textInput')
    const hide1 = function(element1) {
        element1.classList.toggle('hide')
    }
    hide1(element1)
});