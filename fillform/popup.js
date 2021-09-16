document.getElementById('submitbtn').addEventListener('click', function () {

    var username = document.getElementById('username').value;

    //Storage api to retrieve data stored locally   
    const call = function () {

        chrome.storage.local.get('data', function (result) {

            const api = JSON.stringify(result.data[0].fields.fname);
            // executes script if entered username matches with stored username
            if (username == JSON.parse(api)) {

                chrome.tabs.executeScript({
                    file: './action.js'
                }
                )
            }
        });
    }
    call();
});
//Message Passing between popup and action.js
chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
    alert(JSON.stringify(response.data[0].fields.fname)),
        alert(response.greeting), sendResponse({ received: 'thankyou' })

})
