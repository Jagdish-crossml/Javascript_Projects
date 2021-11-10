document.getElementById("submitbtn").addEventListener("click", function () {
  // chrome.tabs.executeScript({file:'./content.js'});

  var username = document.getElementById("username").value;

  //Storage api to retrieve data stored locally
  const call = function () {
    chrome.storage.local.get("data", function (result) {
      //   const api = JSON.stringify(result.data[0].fields.fname);
      // executes script if entered username matches with stored username
      // if (username == JSON.parse(api)) {
      chrome.tabs.executeScript({
        file: "./action.js",
      });
      chrome.app.runtime.onLaunched.addListener(function () {
        chrome.app.window.create("./suggest/suggestion.html", {
          bounds: {
            width: 400,
            height: 400,
            left: 0,
            top: 0,
          },
        });
      });

      // }
    });
  };
  call();
});
// chrome.runtime.sendMessage({ greeting: 'hello jagdish' }, function (response) {
//     console.log(response.received);
// });
//Message Passing between popup and action.js
// chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
//     alert(JSON.stringify(response.data[0].fields.fname)),
//         alert(response.greeting), sendResponse({ received: 'thankyou' })

// });

// chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
//     alert(response.greeting),sendResponse({received:'welcome'})
// });
