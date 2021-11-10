const image = document.getElementById("picture");
function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}
var ele;
async function process_forms() {
  const response = await fetch("http://localhost:8010/fields");
  const data = await response.json();

  var values = Object.values(data[0].fields);

  //   image.src = data[0].fields.picture;

  const response2 = await fetch("http://localhost:8011/fields");
  const data2 = await response2.json();

  //   for (let index = 0; index < data2.length; index++) {
  const element = data2;
  ele = getElementByXpath(element.xpath);
  // if ((ele.value = 1)) {
  // ele.checked = true;
  // } else ele.checked = false;

  ele.value = data[element.attribute_name];
  console.log("ele", ele);

  fillforms(data);
}
// }

function fillforms(val) {
  // debugger;
  fillField(ele, val[0].fields.fname);
}
function fillField(field, value) {
  if (field) {
    field.value = value;
  }
}
