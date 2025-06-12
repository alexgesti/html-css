document.addEventListener("DOMContentLoaded", function () {
  // Open just one tab by default
  const tabcontent = document.getElementsByClassName("tab-content");
  const buttons = document.getElementsByClassName("button-part2");
  if (tabcontent.length > 0) {
    if (window.matchMedia("(min-width: 1024px)").matches)
      tabcontent[0].style.display = "flex";
    else tabcontent[0].style.display = "block";
  }
  if (buttons.length > 0) {
    buttons[0].className += " active";
  }

  // Handles the email validation for the contact form
  const emailInput = document.getElementById("email-input");
  const emailErrorImg = document.getElementById("img-error-footer");
  const emailError = document.getElementById("email-error");

  emailError.style.display = "none";
  emailInput.addEventListener("input", function () {
    const email = emailInput.value;
    if (email.includes("@") && email.includes(".")) {
      emailError.style.display = "none";
      emailErrorImg.style.display = "none";
      emailInput.classList.remove("error");
    } else {
      emailError.style.display = "flex";
      emailErrorImg.style.display = "inline";
      emailInput.classList.add("error");
      e.preventDefault();
    }
  });

  // Handles the menu button click to show the dropdown menu
  const menuBtn = document.querySelector(".button-header");
  const dropdown = document.getElementById("dropdown-menu");
  if (menuBtn && dropdown) {
    menuBtn.addEventListener("click", function () {
      dropdown.classList.add("active");
    });
  }
});

// Tabs fuction.
function openTag(event, tagName) {
  let tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  buttons = document.getElementsByClassName("button-part2");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"; // Hide all tab content
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", ""); // Remove active class from all tabs
  }

  const tab = document.getElementById(tagName);

  tab.style.display = "flex"; // Show the selected tab content
  setTabDirection(tab);

  currentTab = tab;

  event.currentTarget.className += " active"; // Add active class to the clicked tab
}

window.addEventListener("resize", function resizeHandler() {
  setTabDirection(currentTab);
});

function setTabDirection(tab) {
  if (!tab) return;
  if (window.matchMedia("(min-width: 1024px)").matches)
    tab.style.flexDirection = "row";
  else tab.style.flexDirection = "column";
}

// Close the dropdown menu when clicking in the X
function closeMenu() {
  const dropdown = document.getElementById("dropdown-menu");
  if (dropdown) {
    dropdown.classList.remove("active");
  }
}
