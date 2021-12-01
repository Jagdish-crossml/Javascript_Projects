document.getElementById("top_div").addEventListener("click", function () {
  const element = document.getElementById("main_container");
  const save_icon = document.getElementById("save_icon");
  const top_label = document.getElementById("save_top_label");
  const element2 = document.getElementById("inner_container");
  const save_all_info = document.getElementById("save_all_info");
  const hide = function () {
    document.getElementById("top_div").style.top = "358px";
    // debugger;
    element.style = "height:44px";
    element2.style.display = "none";
    save_icon.style.display = "none";
    save_all_info.style.display = "block";
    top_label.style =
      "left:41px; top:11px; font-family: Manrope; font-style: normal; font-weight: 500; font-size: 16px; line-height: 22px; color: #16243C;";

    document.getElementById("top_div").innerHTML =
      '<svg class="arrow" width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.31963 0.823223L3.19222 0.69581L3.03105 0.776393L0.888197 1.84782L0.577959 2.00294L0.823223 2.24821L8.32322 9.74821L8.5 9.92498L8.67678 9.74821L16.1768 2.24821L16.422 2.00294L16.1118 1.84782L13.9689 0.776393L13.8078 0.69581L13.6804 0.823223L8.5 6.00359L3.31963 0.823223Z" fill="black" stroke="black" stroke-width="0.5" /> </svg>';
  };
  const show = function () {
    console.log("click");
    document.getElementById("top_div").style.top = "0px";
    document.getElementById("top_div").innerHTML =
      '<svg class="arrow" width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.31963 0.823223L3.19222 0.69581L3.03105 0.776393L0.888197 1.84782L0.577959 2.00294L0.823223 2.24821L8.32322 9.74821L8.5 9.92498L8.67678 9.74821L16.1768 2.24821L16.422 2.00294L16.1118 1.84782L13.9689 0.776393L13.8078 0.69581L13.6804 0.823223L8.5 6.00359L3.31963 0.823223Z" fill="black" stroke="black" stroke-width="0.5" /> </svg>';
    element.style = "height:403px";
    element2.style.display = "block";
    save_icon.style.display = "block";
    save_all_info.style.display = "none";
    top_label.style =
      "position: absolute; width: 277px; height: 25px; left: 16px; top: 16px; font-family: Manrope; font-style: normal; font-weight: 600; font-size: 18px; line-height: 25px; color: #16243c;";
  };
  const toggle = function () {
    if (window.getComputedStyle(element2).display !== "none") {
      hide();
      return;
    }
    show();
  };
  toggle();
});
