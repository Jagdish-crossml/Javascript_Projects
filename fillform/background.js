// const content=function(){ fetch(chrome.runtime.getURL('/index.html')).then(r => r.text()).then(html => {
//   document.body.insertAdjacentHTML('afterbegin', html);

//   document.getElementById('seconda').addEventListener('click', function () {
//       $('#first').load('http://127.0.0.1:5500/suggestion.html')
//   })
// });}
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.local.set({
//     name: "Jagdish"
//   });
// });
document.getElementById('submitbtn').addEventListener('click', function () {
  // chrome.tabs.executeScript({file:'./content.js'});

  var username = document.getElementById('username').value;

  chrome.storage.local.get('data', function (result) {
    const api = JSON.stringify(result.data[0].fields.fname);
    // executes script if entered username matches with stored username
    if (username == JSON.parse(api)) {
      chrome.tabs.executeScript({

        file: './content.js'
      })
        .then(() => {
          console.log("INJECTED THE FOREGROUND SCRIPT.");
        })
        .catch(err => console.log(err));
    }
  })
});


// chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
//   // alert(JSON.stringify(response.data[0].fields.fname)),
//   alert(response.greeting),
//     sendResponse({ received: 'thankyou' })

// });