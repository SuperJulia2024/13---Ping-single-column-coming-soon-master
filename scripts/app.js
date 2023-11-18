const errorMsg = document.getElementById("error-msg");
const emailField = document.getElementById("email-field");

/* Form validator */
function myValidator() {
  let numberOfErrors = 0;
  const reg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  errorMsg.style.display = "none";
  emailField.style["border-color"] = "hsl(223, 100%, 88%)";

  /* if (emailField.value.trim() === "") { */
  if (!reg.test(emailField.value)) {
    console.log("Y aqui");
    errorMsg.style.display = "block";
    emailField.style["border-color"] = "red";
    numberOfErrors++;
  }

  return !numberOfErrors;
}
