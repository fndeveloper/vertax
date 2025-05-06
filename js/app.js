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

// ====================== LOADER START ======================
document.addEventListener("DOMContentLoaded", () => {


  const load = document.getElementById("loader");

  load.style.transition = "opacity 0.9s ease, top 0.6s ease";

  setTimeout(() => {
    load.style.opacity = "0";
    setTimeout(() => {
      load.style.top = "-100%";

    }, 600);  
  }, 900); 
});

// ====================== LOADER END ==========================

// ===================== CHART JS START =================================
const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2000", "2005", "2010", "2015", "2020", "2025"],

    datasets: [
      {
        label: "Data",
        data: [10, 20,5 , 9, 19, 18, 17],
        backgroundColor: "#002b22", // Light green
        borderRadius: 10,
        barPercentage: 0.2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#cccccc2a ",          // Light grid lines
          borderColor: "#cccccc2a "     // Not needed, just clarifying
        },
        border: {
          display: false          // ❌ Hides Y-axis border
        },
        ticks: {
          color: "#cccccc2a ",          // Optional: Label color
          font: {
            size: 1
          }
        }
      },
      x: {
        grid: {
          color: "#cccccc2a ",          // Light horizontal grid lines
        },
        border: {
          display: false          // ❌ Hides X-axis border
        },
        ticks: {
          color: "#666",
          font: {
            size: 13
          }
        }
      }
    }
    
  }
  
});
// ===================== CHARTS JS END ====================
