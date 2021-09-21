
// chrome.runtime.sendMessage({ greeting: 'hi' }, function (response) {
//     console.log(response.received);
// });
fetch(chrome.runtime.getURL('/index.html')).then(r => r.text()).then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
   
    document.getElementById('seconda').addEventListener('click', function () {
        $('#first').load('http://127.0.0.1:5500/suggestion.html')
    })
});
