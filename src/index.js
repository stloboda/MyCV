$(".navbar a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      500
    );
  }
});

// $('.navbar, a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function (event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, "") ==
//         this.pathname.replace(/^\//, "") &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $("html, body").animate(
//           {
//             scrollTop: target.offset().top,
//           },
//           1000,
//           function () {
//             // Callback after animation
//             // Must change focus!
//             var $target = $(target);
//             $target.focus();
//             if ($target.is(":focus")) {
//               // Checking if the target was focused
//               return false;
//             } else {
//               $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
//               $target.focus(); // Set focus again
//             }
//           }
//         );
//       }
//     }
//   });

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();
