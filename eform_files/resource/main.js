const top_div = document.getElementById("top_div");
const element = document.getElementById("main_container");
const top_row = document.getElementById('top_row')
const arrow = document.getElementById('user_dropdown_arrow');
const modal= document.getElementById('myModal'); 
const search = document.getElementById("search_img");
const closeicon = document.getElementById("closeicon");
const element1 = document.getElementById("input_grp");
const label = document.getElementById('label');
const logo = document.getElementById('eform_logo');
const user_dropdown_arrow = document.getElementById('user_dropdown_arrow');
const Current_user_icon = document.getElementById('Current_user_icon');
const srch_modal=document.getElementById('srch_modal');
const input = document.getElementById('input_grp');
const close=document.getElementById('closeicon');
const en_img = document.getElementById("en_img_modal");
const docs = document.getElementsByClassName("opac");
const modalimg = document.getElementById("modalimg");
const img_label = document.getElementById('image_label');
const span = document.getElementsByClassName("close")[0];
const cp_modal = document.getElementById("copy_url_modal");
const copy = document.getElementById("copy_url");
const close_cp_modal = document.getElementById('close_copy_url_modal');
const change1 = document.getElementsByClassName("rotateimg");
const check = document.getElementsByClassName("check");
const cross = document.getElementsByClassName("cross");


//Drawer function

const drawer=function(){
  top_div.addEventListener("click", function () {
  
  const hide = function (element) {
    element.style.display = "none";
    top_row.style.top = "400px";
    top_div.innerHTML =
      '<svg id="eformimg" width="43" height="15" viewBox="0 0 43 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
      <rect width="42.8125" height="15" fill="url(#pattern0)"/>\
      <defs>\
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">\
      <use xlink:href="#image0_3149:441" transform="scale(0.00729927 0.0208333)"/>\
      </pattern>\
      <image id="image0_3149:441" width="137" height="48" xlink:href="data:image/png;base64,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"/>\
      </defs>\
      </svg>';
  };
  const show = function (element) {
    element.style.display = "block";
    top_row.style.top = "0px";
    top_div.innerHTML =
      '<svg class="arrow" id="arrow_down" width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.31963 0.823223L3.19222 0.69581L3.03105 0.776393L0.888197 1.84782L0.577959 2.00294L0.823223 2.24821L8.32322 9.74821L8.5 9.92498L8.67678 9.74821L16.1768 2.24821L16.422 2.00294L16.1118 1.84782L13.9689 0.776393L13.8078 0.69581L13.6804 0.823223L8.5 6.00359L3.31963 0.823223Z" fill="black" stroke="black" stroke-width="0.5" /> </svg>';
  };
  const toggle = function (element) {
    if (window.getComputedStyle(element).display !== "none") {
      hide(element);
      return;
    }
    show(element);
  };
  toggle(element);
});}




// text_box

const text_box=function(){
  search.addEventListener("click", function () {
    const hide1 = function (element1) {
      label.style.display='none'
      search.style.display='none'
      element1.style.display = "block";
      closeicon.style.display = "block";
      closeicon.addEventListener("click", function () {
        element1.style.display = "none";
        closeicon.style.display = "none";
        label.style.display='block'
        search.style.display='block'
      });
    };
    hide1(element1);
  });
  
}



//suggestions_text_box

const suggest_text_box =function(){
  search.addEventListener("click", function () {
    console.log('clk')
    const hide1 = function (element1) {
      label.style.display='none'
      logo.style.display='none'
      Current_user_icon.style.display='none'
      user_dropdown_arrow.style.display='none'
      element1.style.display = "block";
      closeicon.style.display = "block";
      closeicon.addEventListener("click", function () {
        element1.style.display = "none";
        closeicon.style.display = "none";
        label.style.display='block'
        logo.style.display='block'
        Current_user_icon.style.display='block'
        user_dropdown_arrow.style.display='block'  
      });
    };
    hide1(element1);
  });
}


// options modal function

const options_modal =function(){    if (modal.style.display = "none") {
  arrow.onclick = function () {
    console.log('click')
    modal.style.display = modal.style.display === "none" ? "block" : "none";
  };
}}




  //  btn switch

const btn_switch =function(){
  $('.btn-switch').click(function() {
    $('.btn-switch').removeClass("active ");
    if ($(this).find('span').text() == "Cancel")
      $(this).addClass('active ');
      else
      $(this).addClass('active')
  });
}  


//search_modal

const search_modal = function(){
 
  input.addEventListener('click',function(){
      
      srch_modal.style.display='block'
  })
  close.addEventListener('click',function(){
      srch_modal.style.display='none'
  })
}


//image_enlarge_modal

const modalfunc = function () {

  if ((en_img.style.display = "none")) {
    Array.prototype.forEach.call(docs, function (el) {
      console.log('click')
      el.onclick = function () {
        en_img.style.display = "block";
      
        modalimg.src = el.src;
        
        img_label.innerHTML=el.nextElementSibling.innerText
      };
    });
  }
  span.onclick = function () {
    en_img.style.display = "none";
  };
  $(document).click(function (e) {
    if ($(e.target).is("#ismyModal")) {
      $("#ismyModal").fadeOut(500);
    }
  });
};


//copy_url modal

const copy_url_modal = function () {
  
  if ((cp_modal.style.display = "none")) {
    copy.onclick = function () {
      cp_modal.style.display = "block";
    };
  }
  close_cp_modal.onclick = function () {
    cp_modal.style.display = "none";
  };
  $(document).click(function (e) {
    if ($(e.target).is("#thisModal")) {
      $("#thisModal").fadeOut(500);
    }
  });
};


//checkbox input to text



const saveInfo = function () {
  Array.prototype.forEach.call(check, function (ch) {
    ch.addEventListener("click", function () {
      ch.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerText=ch.parentElement.parentElement.parentElement.previousElementSibling.children[0].value; 
      ch.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].style.display='block';
      ch.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display='block';      
      ch.parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none';
    });
  });
};

const close_input = function () {
  Array.prototype.forEach.call(cross, function (cl) {
    cl.addEventListener("click", function () {
      cl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].style.display='block';
      cl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display='block';      
      cl.parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none';
    });
  });
};

const texttoinput = function () {
  Array.prototype.forEach.call(change1, function (el) {
    el.addEventListener("click", function () {
      el.parentElement.previousElementSibling.children[0].style.display = "none";
      el.parentElement.previousElementSibling.children[1].children[0].children[0].value =
      el.parentElement.previousElementSibling.children[0].innerText;
      el.style.display = "none";
      el.parentElement.previousElementSibling.children[1].style.display='block';
    });
  });
  saveInfo();
  close_input();
};
