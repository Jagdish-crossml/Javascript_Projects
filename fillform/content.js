$.get(chrome.runtime.getURL("./suggest/wepage9.html"), function (html) {
  $(html).appendTo("body");
  $(html).css('display','inline');

$('#professional_label').on('click',function(){
  
    $("#style_suggestions").attr("disabled", "disabled");
  $.get(chrome.runtime.getURL("./suggest/appointment.html"), function (html1) {
    $.get(chrome.runtime.getURL("./suggest/css/appointment.css"),function(){
      console.log('css loaded')
    })
    $('#main').html(html1);})

})


    const element2 = document.getElementById("close_srch_bar");

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
    
    const search = document.getElementById("search_img");
    search.addEventListener("click", function () {
      const element1 = document.getElementById("textInput");
      const element2 = document.getElementById("close_srch_bar");
      const hide1 = function (element1, element2) {
        element1.style.display = "block";
        element2.style.display = "block";
        element2.addEventListener("click", function () {
          element1.style.display = "none";
          element2.style.display = "none";
        });
      };
      hide1(element1, element2);
    });
    
    //search function
    var rect = document.getElementById("search_div");
    async function searchValue() {
      const response = await fetch("http://localhost:8002/fields");
    
      const data1 = await response.json();
      console.log(data1[0].fields.address);
      document.getElementById("textInput").addEventListener("keyup", function () {
        let pattern = new RegExp(this.value, "g");
        let resultSet = data1
          .filter((item) => item.fields.address.match(pattern) && this.value != "")
          .map(
            (item) =>
              `<div id="resultset"><p id="resultdata">${item.fields.address}<p> <button type="button" id="btn"> In the suggestions <i class="bi bi-reply" id="reply"></i></button></div>`
          );
        console.log(resultSet);
        document.getElementById("ismyModal").innerHTML = resultSet;
        const btn = document.querySelectorAll("#resultdata");
        btn.forEach(function (i) {
          i.addEventListener("click", function () {
            modalfunctions();
          });
        });
      });
    }
    searchValue();
    
    //search box
    var modal = document.getElementById("ismyModal");
    const modalfunc = function () {
      var btn = document.getElementById("textInput");
      if ((modal.style.display = "none")) {
        btn.onclick = function () {
          modal.style.display = modal.style.display === "none" ? "block" : "none";
        };
        element2.onclick = function () {
          modal.style.display = modal.style.display === "none" ? "block" : "none";
        };
      }
    };
    modalfunc();
    
    //+2 user icon modal
    const modal_function = function () {
      var modals = document.getElementById("iconModal");
      var btns = document.querySelector(".icon");
      if ((modals.style.display = "none")) {
        btns.onclick = function () {
          modals.style.display = modals.style.display === "none" ? "block" : "none";
        };
      }
    };
    modal_function();
    
    //current user modal
    const modalfunction = function () {
      var modal = document.getElementById("avatar_modal");
      var btn = document.getElementById("user_dropdown_arrow");
      var btn2 = document.getElementById("Current_user_icon");
      if ((modal.style.display = "none")) {
        btn.onclick = function () {
          modal.style.display = modal.style.display === "none" ? "block" : "none";
        };
        btn2.onclick = function () {
          modal.style.display = modal.style.display === "none" ? "block" : "none";
        };
      }
    };
    modalfunction();
    
    const togglePin = document.getElementById("pin_icon");
    togglePin.addEventListener("click", function () {
      this.classList.toggle("bi-pin");
    });
    
    const load = document.getElementById("load_btn");
    let mybutton = document.getElementById("scroll_to_top_btn");
    let mydiv = document.getElementById("suggestion_div");
    
    // When the user scrolls down 20px from the top of the document, show the button
    mydiv.onscroll = function () {
      scrollFunction();
      // scroll();
    };
    
    function scrollFunction() {
      if (mydiv.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
    
    function backToTop() {
      mydiv.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      load.innerHTML = "Load more";
      load.style = "margin-left:157px";
      load.disabled = false;
    }
    
    mydiv.addEventListener("scroll", function (event) {
      var element = event.target;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        load.innerHTML = "No more data...";
        load.style = "margin-left:147px";
        load.disabled = true;
      }
    });
    
    const modalfunctions = function () {
      var slct = document.getElementsByClassName("slct");
      var select = document.getElementById("select");
      var srch_modal = document.getElementById("search_reslt_modal");
      var span1 = document.getElementsByClassName("closeone")[0];
      if ((srch_modal.style.display = "none")) {
        srch_modal.style.display = "block";
        const fetchsearch = async function () {
          await fetch("http://localhost:8002/fields")
            .then((response) => response.json())
            .then((data) =>
              Array.prototype.forEach.call(slct, function (a) {
                a.textContent = data[0].fields.address;
              })
            );
        };
        fetchsearch();
      }
      element2.onclick = function () {
        srch_modal.style.display = "none";
        modal.style.display = "none";
      };
      span1.onclick = function () {
        srch_modal.style.display = "none";
      };
      $(document).click(function (e) {
        if ($(e.target).is("#search_reslt_modal")) {
          $("#search_reslt_modal").fadeOut(500);
        }
      });
    };
    
    //Tooltip
    
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
        
});



var urls;
var rslt;
const active = function () {
  document.addEventListener(
    "focus",
    async function () {
      console.log("focused: ", document.activeElement);
      console.log(document.activeElement.type);

      // urls = `http://localhost:3000/propertySuggestions?userId=8960dc31-09c4-4ed7-9bad-39fec671ab74&property=${document.activeElement.name}`;
      urls = `http://localhost:3001/fields?userId=8960dc31-09c4-4ed7-9bad-39fec671ab74&property=${document.activeElement.name}`;
      const res = await fetch(urls);

      rslt = await res.json();
      // debugger;
      if (!Object.keys(rslt).length) {
        console.log("response is empty");
      } else if (document.activeElement.name == rslt[0].property) {
        for (i = 0; i < rslt[0].suggestions.length; i++) {
          address[i].innerHTML = rslt[0].suggestions[i].summary;
          console.log(rslt);
        }
      }
    },
    true
  );
};
active();

function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}
var ele;

var address = document.getElementsByClassName("address");
const avatar_fetch = async function () {
  const response = await fetch("http://localhost:3000/groupInstance");

  const data = await response.json();

  var avatar = document.getElementsByClassName("avatar");

  for (i = 0; i < data.relatedUsers.length; i++) {
    // debugger
    avatar[i].src = data.relatedUsers[i].thumbnailImageUrl;
  }
  Array.prototype.forEach.call(avatar, function (avt) {
    avt.addEventListener("click", async function () {
      urls = `http://localhost:3001/fields?userId=8960dc31-09c4-4ed7-9bad-39fec671ab74`;
      const incoming = await fetch(urls);

      result = await incoming.json();
      for (j = 0; j < data.relatedUsers.length; j++) {
        // debugger;
        address[j].innerHTML = result[0].suggestions[j].summary;
      }
    });
  });

  Array.prototype.forEach.call(address, function (add, index) {
    add.addEventListener("click", function () {
      console.log(index);

      async function process_forms() {
        const response2 = await fetch("http://localhost:8008/fields");
        const data2 = await response2.json();

        for (i = 0; i < rslt[0].suggestions.length; i++) {
          ele = getElementByXpath(data2[i].xpath);

          if (rslt[0].property == ele.name) {
            // debugger;
            ele.value = rslt[0].suggestions[index].value;
          }
        }
      }

      process_forms();
    });
  });
};
avatar_fetch();

chrome.onUpdated.addListener(() => {
  chrome.storage.local.get("name", () => {
    console.log("value retrieved is:");
  });
});
