
chrome.runtime.onMessage.addListener(function(message, sender) {
  if(message.title){
    console.log(message.title)
  }
  
  if (message.sendBack) {
      chrome.tabs.sendMessage(sender.tab.id, message.data);
      console.log(sender.tab.id, message.data)
  }
});