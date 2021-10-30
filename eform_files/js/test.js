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

const span = document.getElementsByClassName("data");
const element1 = document.getElementById("text_input_box");
const element2 = document.getElementById("icon_div");
// const change1 = document.getElementById('change_info_icon')
const change1 = document.getElementsByClassName("rotateimg");
const check = document.getElementsByClassName("bi-check-circle");
const close = document.getElementsByClassName("bi-x-circle");

const saveInfo = function () {
  Array.prototype.forEach.call(check, function (ch) {
    ch.addEventListener("click", function () {
      console.log("click");
      // debugger;
      ch.parentElement.previousSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML =
        ch.parentElement.previousSibling.previousElementSibling.value;

      ch.parentElement.previousSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.display =
        "inline-block";
      ch.parentElement.previousSibling.previousElementSibling.style.display =
        "none";
      ch.parentElement.style.display = "none";
      ch.parentElement.previousSibling.previousElementSibling.previousElementSibling.style.display =
        "block";
    });
  });
};

const close_input = function () {
  Array.prototype.forEach.call(close, function (cl) {
    cl.addEventListener("click", function () {
      console.log("click");

      cl.parentElement.previousSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.display =
        "inline-block";
      cl.parentElement.previousSibling.previousElementSibling.style.display =
        "none";
      cl.parentElement.style.display = "none";
      cl.parentElement.previousSibling.previousElementSibling.previousElementSibling.style.display =
        "block";
    });
  });
};

const texttoinput = function () {
  Array.prototype.forEach.call(change1, function (el) {
    el.addEventListener("click", function () {
      console.log("click");
      el.parentElement.children[2].style.display = "none";

      el.parentElement.children[4].value =
        el.parentElement.children[2].innerHTML;

      el.style.display = "none";

      el.parentElement.children[4].style = "margin-top:30px;margin-left:47px";
      el.parentElement.children[4].style.display = "block";

      el.parentElement.children[5].style.display = "block";
    });
  });
  saveInfo();
  close_input();
};
texttoinput();

// showdata.addEventListener("click", function () {
//   const hideone = function () {
//     Array.prototype.forEach.call(span, function (sp) {
//       sp.innerHTML = element1.value;
//       sp.style.display = "inline-block";
//     });
//     // span.innerHTML = element1.value
//     element1.classList.add("hide");
//     element2.classList.add("hide");
//     el.style.display = "block";
//     // span.style.display = 'inline-block'
//   };
//   hideone(element1, element2);
// });

//drawer function
document.getElementById("top_div").addEventListener("click", function () {
  const element = document.getElementById("main_container");
  const hide = function (element) {
    element.style.display = "none";
    document.getElementById("top_div").style.top = "400px";
    document.getElementById("top_div").innerHTML =
      '<img id="eformimg" src="assets/eform.png">';
  };
  const show = function (element) {
    element.style.display = "block";
    document.getElementById("top_div").style.top = "0px";
    document.getElementById("top_div").innerHTML =
      '<i class="fa fa-chevron-down" id="top_arrow"></i>';
  };
  const toggle = function (element) {
    if (window.getComputedStyle(element).display !== "none") {
      hide(element);
      return;
    }
    show(element);
  };
  toggle(element);
});

//select all elements
function checkAll(ele) {
  var checkboxes = document.getElementsByName("check");
  if (ele.checked) {
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = true;
      }
    }
  } else {
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = false;
      }
    }
  }
}
