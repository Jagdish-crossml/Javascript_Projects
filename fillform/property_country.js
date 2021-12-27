// chrome.runtime.sendMessage({ greeting: 'hi' }, function (response) {
//     console.log(response.received);
// });

// import process_forms from "./action";
// console.log("click");
// debugger;

fetch(chrome.runtime.getURL("./suggest/wepage9.html"))
  .then((r) => r.text())
  .then((html) => {
    document.body.insertAdjacentHTML("afterend", html);

    // document.body.appendChild(html);
    // debugger;
    // $(document).ready(function () {
    // document.getElementById("login_btn").addEventListener("click", function () {
    //   //   $("#main").load("suggest/wepage9.html");
    //   chrome.extension.getURL("./suggest/wepage9.html");
    // });
    // });
  });
var urls;
var rslt;
const active = function () {
  document.addEventListener(
    "focus",
    async function () {
      console.log("focused: ", document.activeElement);
      console.log(document.activeElement.type);

      urls = `http://localhost:3000/propertySuggestions?property=${document.activeElement.name}`;
      const res = await fetch(urls);
      // debugger;
      rslt = await res.json();

      if (!Object.keys(rslt).length) {
        console.log("response is empty");
        // div.innerHTML = "Response is empty";
      } else if (document.activeElement.name == rslt[0].property) {
        // div.innerHTML = inner;
        for (i = 0; i < rslt.length; i++) {
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
// async function process_forms() {
//   // const response = await fetch("http://localhost:3000/groupInstance");
//   // const response = await fetch(
//   //   "http://localhost:3000/propertySuggestions"
//   // );
//   // debugger;
//   // const data = await response.json();
//   // debugger;
//   const response2 = await fetch("http://localhost:8008/fields");
//   const data2 = await response2.json();
//   debugger;

//   for (
//     i = 0;
//     // i < data.instancesByUser[0].instances.instances[0].length - 1;
//     i < rslt.length;
//     i++
//   ) {
//     ele = getElementByXpath(data2[i].xpath);
//     // var reg =
//     //   data.instancesByUser[0].instances.instances[index][i].formattedValue;
//     // var ex = reg.split(" ");
//     if (rslt[0].property == ele.name) {
//       debugger;
//       ele.value = rslt[0].suggestions[i].value;
//     }

//     // if (
//     //   data2[i].property_name ==
//     //     data.instancesByUser[0].instances.instances[index][i].name &&
//     //   data2[i].type == ele.type
//     // ) {
//     //   ele.value =
//     //     data.instancesByUser[0].instances.instances[index][i].formattedValue;
//     //   // }
//     // } else if (data2[i].type == "select-one") {
//     //   if (
//     //     ele.options[i].value ==
//     //     data.instancesByUser[0].instances.instances[index][i].formattedValue
//     //   ) {
//     //     ele.value =
//     //       data.instancesByUser[0].instances.instances[index][i].formattedValue;
//     //   }
//     // } else {
//     //   console.log("error");
//     //   ele.value =
//     //     data.instancesByUser[0].instances.instances[index][
//     //       i + 1
//     //     ].formattedValue;
//     // }
//   }
//   // }
// }
var address = document.getElementsByClassName("address");
const avatar_fetch = async function () {
  const response = await fetch("http://localhost:3000/groupInstance");
  // const response = await fetch("http://localhost:3000/propertySuggestions");
  // debugger;
  const data = await response.json();
  // debugger;
  var avatar = document.getElementsByClassName("avatar");

  const rating = document.getElementsByClassName("bi-circle");
  // address[0].innerHTML = data[0].suggestions[0].summary;
  for (i = 0; i < data.relatedUsers.length; i++) {
    // avatar[i].src = data.relatedUsers[i].thumbnailImageUrl;
    avatar[i].src = data.relatedUsers[i].thumbnailImageUrl;

    // address[i].innerHTML =
    //   data.instancesByUser[0].instances.instances[i].instanceSummary.value;
    // data.instancesByUser[0].instances.instances[i][5].value;
  }
  Array.prototype.forEach.call(address, function (add, index) {
    add.addEventListener("click", function () {
      console.log(index);
      // var text = address[index].innerText;
      // var text_split = text.split(" ");
      async function process_forms() {
        // const response = await fetch("http://localhost:3000/groupInstance");
        // const response = await fetch(
        //   "http://localhost:3000/propertySuggestions"
        // );
        // debugger;
        // const data = await response.json();
        // debugger;
        const response2 = await fetch("http://localhost:8008/fields");
        const data2 = await response2.json();
        // debugger;

        for (
          i = 0;
          // i < data.instancesByUser[0].instances.instances[0].length - 1;
          i < rslt.length;
          i++
        ) {
          ele = getElementByXpath(data2[i].xpath);
          // var reg =
          //   data.instancesByUser[0].instances.instances[index][i].formattedValue;
          // var ex = reg.split(" ");
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

//   });
// console.log(data);
// };
// avatar_fetch();
