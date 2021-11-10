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
      '<svg id="top_arrow" width="17" height="11"\
      viewBox="0 0 17 11" fill="none"\
      xmlns="http://www.w3.org/2000/svg">\
      <path d="M3.31963 0.823223L3.19222 0.69581L3.03105\
          0.776393L0.888197 1.84782L0.577959 2.00294L0.823223\
          2.24821L8.32322 9.74821L8.5 9.92498L8.67678\
          9.74821L16.1768 2.24821L16.422 2.00294L16.1118\
          1.84782L13.9689 0.776393L13.8078 0.69581L13.6804\
          0.823223L8.5 6.00359L3.31963 0.823223Z" fill="black"\
          stroke="black" stroke-width="0.5" />\
      </svg>';
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
