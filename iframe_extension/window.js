
if (!window.isTop) {
  var data = 'iframe';
  var msg;
  window.addEventListener('message',function(e){
      console.log(e.data)
      debugger
  msg=e.data
  // window.parent.frames[0].frameElement.contentDocument.body.children[2].contentDocument.body.style.backgroundColor='red'
  for(let i=0;i<=window.parent.length;i++){
  //   const ifm=window.parent.frames[i].document.querySelector('[title="Iframe Example"]')
  // ifm.remove()
    const element= window.parent.frames[i].document
    element.body.style.backgroundColor='red'
    element.body.children[1].children[0].children[1].value='2'
  }
  // const element= window.parent.frames[0].document
  // element.body.style.backgroundColor='red'
  // const footer= element.getElementsByClassName('ast-small-footer-section-1')
  // Array.prototype.forEach.call(footer,function(e){
  //   e.style.backgroundColor='black'
  //   })
  
  chrome.runtime.sendMessage({sendBack:true, data:msg});
      })
  
}