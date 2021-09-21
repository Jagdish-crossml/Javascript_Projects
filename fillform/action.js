const image = document.getElementById('picture');
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

async function process_forms() {
    const response = await fetch('http://localhost:8000/fields');

    const data = await response.json();

    image.src = data[0].fields.picture;

    const response2 = await fetch('http://localhost:8001/fields');
    const data2 = await response2.json();

    for (let index = 0; index < data2.length; index++) {
        const element = data2[index];
        var ele = getElementByXpath(element.xpath);
        // console.log('ele', ele);
        ele.value = data[element.attribute_name];
        fillforms(data); 
    }
    chrome.storage.local.set({ 'data': data });

    // chrome.runtime.sendMessage({ greeting: 'hello', data: data }, function (response) {
    //     console.log(response.received);
    // });
}

function fillforms(data) {
    fillField(document.querySelector('input[name="firstname"]'), data[0].fields.fname);
    fillField(document.querySelector('input[name="lastname"]'), data[0].fields.lname);
    fillField(image, data[0].fields.picture);
}

function fillField(field, value) {
    if (field) {
        field.value = value;
    }
}

process_forms();



