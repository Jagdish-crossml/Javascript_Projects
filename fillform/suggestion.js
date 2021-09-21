document.getElementById('firsta').addEventListener('click',function load_home() {
    console.log('clicked');
    document.getElementById("content").innerHTML='<object type="text/html" data="./suggestion.html" ></object>';
})
