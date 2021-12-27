var isTop = true;
    // var iframe=document.getElementsByTagName('iframe');
    var iframe=document.querySelector('iframe').contentWindow;
    
        debugger
    let mymsg='this'
    iframe.postMessage(mymsg,'*')


chrome.runtime.onMessage.addListener(function(details) {
    console.log('Message from frame: ' +(details));
});