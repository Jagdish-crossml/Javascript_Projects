chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    name: "chrome_extension",
  });
  console.log("name stored");
});



// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if(request.cmd == "read_file") {
//       $.ajax({
//           url: chrome.extension.getURL("./suggest/appointment.html"),
//           dataType: "html",
//           success: sendResponse
//       });
//      return true;
//   }
// })