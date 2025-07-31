/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
})(jQuery); // End of use strict

// Tampil paklaring
function tampilkanGambar1() {
  const passwordInput = document.getElementById("password1").value;
  const errorDiv = document.getElementById("error1");
  const gambarList = document.querySelectorAll(".gambar1");

  if (passwordInput === "252525") {
    errorDiv.textContent = "";
    gambarList.forEach((gambar1) => (gambar1.style.display = "block"));
  } else {
    errorDiv.textContent = "Password salah!";
    gambarList.forEach((gambar1) => (gambar1.style.display = "none"));
  }
}

function tampilkanGambar2() {
  const passwordInput = document.getElementById("password2").value;
  const errorDiv = document.getElementById("error2");
  const gambarList = document.querySelectorAll(".gambar2");

  if (passwordInput === "252525") {
    errorDiv.textContent = "";
    gambarList.forEach((gambar2) => (gambar2.style.display = "block"));
  } else {
    errorDiv.textContent = "Password salah!";
    gambarList.forEach((gambar2) => (gambar2.style.display = "none"));
  }
}

// caption jobdesk
document.addEventListener("DOMContentLoaded", function () {
  const entries = document.querySelectorAll(".job-entry");

  entries.forEach((entry, index) => {
    const collapseId = `captionCollapse${index + 1}`;
    const button = entry.querySelector(".toggle-btn");
    const collapseDiv = entry.querySelector(".collapse");

    if (button && collapseDiv) {
      button.setAttribute("data-bs-target", `#${collapseId}`);
      collapseDiv.setAttribute("id", collapseId);
    }
  });
});
