/* Add your JavaScript to this file */
window.addEventListener("DOMContentLoaded", function() {
  var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zAZ0-9-]+)*$/;
  var emailInput = document.getElementById("email");
  var messageElement = document.querySelector(".message");
  var submitButton = document.querySelector("button");

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var enteredEmail = emailInput.value.trim();

    if (enteredEmail === "" || !emailPattern.test(enteredEmail)) {
      messageElement.innerHTML = "Please provide a valid email address.";
      emailInput.value = "";
    } else {
      messageElement.innerHTML = "Thanks! Your email address (" + enteredEmail + ") has been added to our mailing list.";
    }
  });
});

