// ========================== HEADER FETCH START ======================================
var header=document.getElementById("header")

fetch("header.html")
.then(e => e.text())
.then((e)=>{
 
  header.innerHTML=`
  ${e}
  `
  
})

// ========================== HEADER FETCH END ======================================


window.addEventListener("scroll", function () {
  var navunder = document.getElementById("navunder");
  const scrollableHeight = document.body.scrollHeight - window.innerHeight;
  const scrollProgress = (window.scrollY / scrollableHeight) * 93;
  if (scrollProgress > 95) {
    document.getElementById("topbtn").innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
}
  else {
    this.document.getElementById("topbtn").innerHTML = scrollProgress.toFixed(0) + "%";

  }
  navunder.style.width = `${scrollProgress}vw`
  var navbar = document.getElementById("navbar");
  var navbar1 = document.getElementById("navbar1");
  var iconf = document.querySelectorAll(".btn-red");
  const logo = document.querySelector(".logo_nb"); 

  var navlinkd = this.document.querySelectorAll(".nav-item>.nav-link")

 
  if (window.scrollY > 700) {
    navbar.classList.add("navfix");

    iconf.forEach((e) => {
      e.classList.add("icon-fixeds");
    });

   
    navlinkd.forEach((e) => {
      e.classList.add("nav-sec-col");
    });
  } 
   else {

    iconf.forEach((e) => {
      e.classList.remove("icon-fixeds")
    })
    navbar.classList.remove("navfix");
    navlinkd.forEach((e) => {


      e.classList.remove("nav-sec-col")
    })
  }
});

;


// COUNTRY CODE
const inputs = document.querySelectorAll(".phonenum");

inputs.forEach(input => {
  window.intlTelInput(input, {
    initialCountry: "us",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js", // For formatting
  });
});
// COUNTRY CODE

// ACCORDIAN
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// ACCORDIAN

// MARQUEE START

// MARQUEE END

// SWIPER HOME JS 
// Get elements
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Responsive for mobile/tablet
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  }
});
// SWIPER HOME JS 


document.addEventListener("DOMContentLoaded", () => {
  // Disable scrolling initially
  // document.body.style.overflow = "hidden";

  const load = document.getElementById("loader");

  // Prepare for transition
  load.style.transition = "opacity 0.9s ease, top 0.6s ease";

  setTimeout(() => {
    // Start fade-out
    load.style.opacity = "0";

    // After fade, move it out of view (slide up)
    setTimeout(() => {
      load.style.top = "-100%";

      // Finally, enable scrolling
      // document.body.style.overflow = "auto";
    }, 600); // wait for opacity transition to finish
  }, 900); // loader wait time before fade
});
