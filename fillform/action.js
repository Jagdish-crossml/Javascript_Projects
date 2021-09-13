const image = document.getElementById('picture');
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
  
async function process_forms(){  
    const response = await fetch('http://localhost:8000/fields');
    // console.log(response);
    const data = await response.json();
    console.log(data);
    image.src=data.picture;
    const response2 = await fetch('http://localhost:8001/fields');
    const data2 = await response2.json();
    
    for (let index = 0; index < data2.length; index++) {
        const element = data2[index];
        var ele = getElementByXpath(element.xpath)
        console.log('ele', ele)
        ele.value = data[element.attribute_name]
        
    }
// (data => {
//     fillforms(data); 
//     console.log(data);
//   });
}  

function fillforms(data) {
    
    fillField(document.querySelector('input[name="firstname"]'), data.fname);
    fillField(document.querySelector('input[name="lastname"]'), data.lname);
    fillField(image, data.picture);
}

function fillField(field, value) {
    if (field) {
        field.value = value;
    }
}

process_forms()
