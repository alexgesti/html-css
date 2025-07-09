document.addEventListener("DOMContentLoaded", function () {
  // Open just one tab by default
  const tabcontent = document.getElementsByClassName("tab-content");
  const buttons = document.getElementsByClassName("button-tab");

  // Oculta todos los tabs
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("d-flex");
    tabcontent[i].classList.add("d-none");
  }

  for (let i = 0; i < buttons.length; i++)
    buttons[i].classList.remove("active");

  // Muestra solo el primer tab
  if (tabcontent.length > 0) {
    tabcontent[0].classList.remove("d-none");
    tabcontent[0].classList.add("d-flex");
  }

  if (buttons.length > 0) {
    buttons[0].classList.add("active");
  }

  // Handles the email validation for the contact form
  const emailInput = document.getElementById("email-input");
  const emailErrorImg = document.getElementById("img-error-footer");
  const emailError = document.getElementById("email-error");

  emailError.style.display = "none";
  emailInput.addEventListener("input", function () {
    const email = emailInput.value;
    if (email.includes("@") && email.includes(".")) {
      emailError.classList.remove("d-flex");
      emailError.classList.add("d-none");
      emailErrorImg.classList.remove("d-flex");
      emailErrorImg.classList.add("d-none");
      emailInput.classList.remove("border", "border-5", "border-danger");
    } else {
      emailError.classList.remove("d-none");
      emailError.classList.add("d-flex");
      emailErrorImg.classList.remove("d-none");
      emailErrorImg.classList.add("d-flex");
      emailInput.classList.add("border", "border-5", "border-danger");
      e.preventDefault();
    }
  });

  // Handles the menu button click to show the dropdown menu
  const menuBtn = document.querySelector(".button-header");
  const closeBtn = document.querySelector(".dropdown-close");
  const dropdown = document.querySelector(".dropdown-menu-custom");

  if (menuBtn && dropdown) {
    menuBtn.addEventListener("click", function () {
      dropdown.classList.add("d-flex");
      dropdown.classList.remove("d-none");
    });
  }
  if (closeBtn && dropdown) {
    closeBtn.addEventListener("click", function () {
      dropdown.classList.remove("d-flex");
      dropdown.classList.add("d-none");
    });
  }

  // Close the rest of the details when no active.
  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach((targetDetail) => {
    targetDetail.addEventListener("toggle", () => {
      if (targetDetail.open) {
        detailsElements.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.open = false;
          }
        });
      }
    });
  });
});

// Tabs fuction.
function openTag(event, tagName) {
  const tabcontent = document.getElementsByClassName("tab-content");
  const buttons = document.getElementsByClassName("button-tab");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("d-flex");
    tabcontent[i].classList.add("d-none");
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  event.currentTarget.classList.add("active");

  const tab = document.getElementById(tagName);
  tab.classList.remove("d-none");
  tab.classList.add("d-flex");
  setTabDirection(tab);
  currentTab = tab;
}
