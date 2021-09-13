
document.getElementById('submitbtn').addEventListener('click', function () {
    //grab the text filed value
    // var stringValue = document.getElementById('username').value;  
    var username = document.getElementById('username').value
    // var username = document.getElementById('username').value
    // debugger 
                  
            chrome.tabs.executeScript({
                file: './action.js'} 
                );   
});
    
 