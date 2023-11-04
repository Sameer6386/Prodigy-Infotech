
 const menuToggle = document.querySelector(".menu-toggle");
 const navList = document.querySelector(".nav-list");
 
 menuToggle.addEventListener("click", () => {
     navList.classList.toggle("active");
 });
 
 
 const navLinks = document.querySelectorAll(".nav-list a");
 
 navLinks.forEach((link) => {
     link.addEventListener("click", (e) => {
         e.preventDefault();
 
         const target = document.querySelector(e.target.getAttribute("href"));
         target.scrollIntoView({
             behavior: "smooth",
             block: "start",
         });
     });
 });