/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  // ???
  let formElement = document.getElementById(id);

  // ???
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // ???
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {
  console.log("button clicked.");

  // retrive form vals
  let relative = formValue("relative");
  console.log("relative");

  let adj1 = formValue("adj-1");
  console.log("adj1");

  let adj2 = formValue("adj-2");
  console.log("adj2");

  let adj3 = formValue("adj-3");
  console.log("adj3");

  let fmsPerson = formValue("fms-person");
  console.log("relative");

  let noun = formValue("noun");
  console.log("noun");

  let dessert = formValue("dessert");
  console.log("dessert");

  let petName = formValue("pet-name");
  console.log("petName");

  // insert form values into madlib

  let madLib = `
  Dear ${relative},
  <br><br>
  I have been having a really ${adj1} time
  at camp. The counselour is ${adj2} and
  the food is ${adj3}. I met ${fmsPerson}
  and we quickly became ${noun}. Talk soon!
  <br><br>
  Your ${dessert},
  <br>
  ${petName}
  `;

  // output madlib to player
  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
}
