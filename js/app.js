// ========================== HEADER FETCH START ======================================
var header = document.getElementById("header")
if(header){
fetch("header.html")
  .then(e => e.text())
  .then((e) => {

    header.innerHTML = `
  ${e}
  `

  })
}


// ========================== HEADER FETCH END ======================================
// ========================== FOOTER FETCH START ======================================
var footer = document.getElementById("footer")
if(footer){
fetch("footer.html")
  .then(e => e.text())
  .then((e) => {

    footer.innerHTML = `
  ${e}
  `

  })
}
// ========================== FOOTER FETCH END ======================================



window.addEventListener("scroll", function () {
  var navunder = document.getElementById("navunder");
  const scrollableHeight = document.body.scrollHeight - window.innerHeight;
  const scrollProgress = (window.scrollY / scrollableHeight) * 93;
  if (scrollProgress > 95) {
    document.getElementById("topbtn").innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
  }
  else {
    // this.document.getElementById("topbtn").innerHTML = scrollProgress.toFixed(0) + "%";

  }
  navunder.style.width = `${scrollProgress}vw`
  var navbar = document.getElementById("navbar");
  var navbar1 = document.getElementById("navbar1");
  const logo = document.querySelector(".logo_nb");

  var navlinkd = this.document.querySelectorAll(".nav-item>.nav-link")


  if (window.scrollY > 550) {
    navbar.classList.add("navfix");
    navlinkd.forEach((e) => {
      e.classList.add("nav-sec-col");
    });
  }
  else {

   
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



// ====================== LOADER START ======================
document.addEventListener("DOMContentLoaded", () => {


  const load = document.getElementById("loader");
if(load){
  load.style.transition = "opacity 0.9s ease, top 0.6s ease";

  setTimeout(() => {
    load.style.opacity = "0";
    setTimeout(() => {
      load.style.top = "-100%";

    }, 0);
  },0);
}
});

// ====================== LOADER END ==========================

// ===================== CHART JS START =================================

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("myChart");

  if (canvas) {
    // Dynamically load Chart.js only if the canvas exists
    const chartScript = document.createElement("script");
    chartScript.src = "https://cdn.jsdelivr.net/npm/chart.js";
    chartScript.onload = () => {
      const ctx = canvas.getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["2000", "2005", "2010", "2015", "2020", "2025"],
          datasets: [
            {
              label: "Data",
              data: [10, 20, 5, 9, 19, 18],
              backgroundColor: "#002b22",
              borderRadius: 10,
              barPercentage: 0.2,
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: "#cccccc2a" },
              border: { display: false },
              ticks: {
                color: "#cccccc2a",
                font: { size: 1 },
              },
            },
            x: {
              grid: { color: "#cccccc2a" },
              border: { display: false },
              ticks: {
                color: "#666",
                font: { size: 13 },
              },
            },
          },
        },
      });
    };

    chartScript.onerror = () => {
      console.error("Failed to load Chart.js");
    };

    document.head.appendChild(chartScript);
  }
});

// ===================== CHARTS JS END ====================





//  ===================== QUERY FORM =========================

var  inquiryformbtn=document.getElementById("inquiryformbtn");
if(inquiryformbtn){
inquiryformbtn.addEventListener("click", (e) => {
  e.preventDefault()
  var inquiryform = document.getElementById("inquiryform");
  if(inquiryform) {
  var formData = [];

  inquiryform.querySelectorAll("input, select, textarea").forEach(element => {
    formData.push(element.value);
  });

  localStorage.setItem("QueryForm", JSON.stringify(formData));
   var modalElement = document.getElementById("customInquiryModal");
  var modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();

  setTimeout(() => {
    
  Swal.fire({
  title: "Form Is Submit Successfull",

  icon: "success"
});
  }, 1500);
  
}
});
}

//  ====================== QUERY FORM ============================

// =============================================================
var  inquiryformbtn1=document.getElementById("inquiryformbtn1");

if(inquiryformbtn1){
inquiryformbtn1.addEventListener("click", (e) => {
  e.preventDefault()
  var inquiryform = document.getElementById("inquiryform1");
  var formData = [];

  inquiryform.querySelectorAll("input, select, textarea").forEach(element => {
    formData.push(element.value);
  });

  localStorage.setItem("QueryForm", JSON.stringify(formData));
 var collapseElement = document.getElementById("collapseExample");

  setTimeout(() => {
    collapseElement.classList.remove("show");
    document.querySelector(".btn_inquire").innerHTML=`Inquiry Now`

  Swal.fire({
  title: "Form Is Submit Successfull",

  icon: "success"
});
  }, 1500);
});
}

// =============================================================

// SWIPER HOME JS 
// ========================= <button id="btn_sharte">share now</button>
var btn_sharte=document.getElementById("btn_sharte")
if(btn_sharte){
btn_sharte.addEventListener("click", async () => {
  if (navigator.share) {
    try {
    await navigator.share({
  title: "New site is here",
  text: "Check out this amazing site! It's full of useful information and cool features.",
  url: window.location.href
});
      console.log("Shared successfully");
    } catch (error) {
      console.log("Error sharing:", error);
    }
  } else {
    console.log("Web Share API is not supported on this browser.");
  }
});
}
// =================================================================

  document.addEventListener("DOMContentLoaded", () => {
    const collapseElement = document.getElementById("collapseExample");

  if(collapseElement){
    collapseElement.addEventListener("shown.bs.collapse", () => {
         document.querySelector(".btn_inquire").innerHTML=` <i class="fa-solid fa-xmark "></i>`
    })
    

    collapseElement.addEventListener("hidden.bs.collapse", () => {
     document.querySelector(".btn_inquire").innerHTML=`Inquiry Now`
    });
  }
  });



// =================================================================

// Get elements{
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
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    }
  }
});
// SWIPER HOME JS 