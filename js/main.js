/* const submitButton = document.getElementsByClassName("submit-box"); */

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form = document.querySelector(".contact-form");
    const message = document.getElementById("submittedMessage");
    form.classList.add("fade-out");

    setTimeout(() => {
      form.style.display = "none";
      message.style.display = "block";
      setTimeout(() => {
        message.classList.add("fade-in");
      }, 10);
    }, 500);
  });
