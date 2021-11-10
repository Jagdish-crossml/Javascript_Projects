export function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}
var ele;
export async function process_forms() {
  const response = await fetch("http://localhost:8011/fields");
  const data = await response.json();
  // debugger;
  // console.log(data[0].fields);
  var values = Object.values(data[0].fields);

  const response2 = await fetch("http://localhost:8010/fields");
  const data2 = await response2.json();

  for (let index = 0; index < data2.length; index++) {
    const element = data2[index];
    ele = getElementByXpath(element.xpath);

    if (ele.type == "text") {
      // debugger;
      ele.value = data[0].fields[element.attribute_name];

      ele.checked = true;
      console.log("ele", ele);

      // fillforms(values[index]);
    } else if (ele.type == "radio" || ele.type == "checkbox") {
      if (
        ele.name == data[0].fields.gender ||
        ele.name == data[0].fields.passport
      ) {
        ele.value = data[0].fields[element.attribute_name];
        ele.checked = true;
      } else {
        ele.checked = false;
      }
    } else if (ele.type == "image") {
      ele.src = data[0].fields.picture;
    } else if (ele.type == "password") {
      ele.value = data[0].fields[element.attribute_name];
    } else if (ele.type == "select-one") {
      for (i = 0; i < ele.options.length; i++) {
        if (ele.options[i].value == data[0].fields[element.attribute_name]) {
          ele.options[i].selected = true;

          ele.value = data[0].fields[element.attribute_name];
        } else {
          console.log("error");
        }
      }
    } else if (ele.type == "textarea") {
      ele.value = data[0].fields[element.attribute_name];
    } else if (ele.type == "number") {
      ele.value = data[0].fields[element.attribute_name];
    } else if (ele.type == "date") {
      ele.value = data[0].fields[element.attribute_name];
    }
    // else if (ele.type == "file") {
    //   ele.value = "C:\\fakepath\\" + data[0].fields[element.attribute_name];
    // }
    else if (ele.type == "select-multiple") {
      for (i = 0; i < ele.options.length; i++) {
        if (
          ele.options[i].value == data[0].fields[element.attribute_name][0] ||
          ele.options[i].value == data[0].fields[element.attribute_name][1]
        ) {
          // debugger;
          ele.value[i] = data[0].fields[element.attribute_name][i];
          ele.options[i].selected = true;
        }
      }
    } else {
      console.log("type does not match");
    }
  }
}

function fillforms(val) {
  fillField(ele, val);
}
function fillField(field, value) {
  if (field) {
    field.value = value;
  }
}

process_forms();

// export default process_forms();
