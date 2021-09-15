
// console.log(JSON.stringify(response.data[0].fields.fname))
document.getElementById('submitbtn').addEventListener('click', function () {
    var username = document.getElementById('username').value;



    // debugger
    // if(username==JSON.stringify(response.data[0].fields.fname)){
    // chrome.tabs.executeScript({

    //     // code: `text is ${result}` + JSON.stringify(result)
    // }, function () {
    //     debugger
    // var getting;
    // async function main(){
    // var api; 
    // new Promise(function(){
const api={};
        chrome.storage.local.get('data', function (result) {
        // alert(JSON.stringify(result.data[0].fields.fname))
        
         api= JSON.stringify(result.data[0].fields.fname);
        //  alert(api);
        return api;
    });
// })
    // getting= await api;
    
    // if (username == api) {
        
    // }
// }
alert(api);
if (username==api){
chrome.tabs.executeScript({
    file: './action.js'
}
)
}
    // });
    // }
});

// function receive(){
chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
    alert(JSON.stringify(response.data[0].fields.fname)),
        alert(response.greeting), sendResponse({ received: 'thankyou' })

})

// }




//     function (request, sender, sendResponse,response) {
//         // console.log(sender.tab ?
//         //     "from action script:" + sender.tab.url :
//         //     "from the extension");
//         if (request.greeting === 'hello') {
//             if (response.data_to_send) {

//                 sendResponse({ data: response.data_to_send });
//             }
//             sendResponse({ farewell: "goodbye" });
//         }
//     }
// );

