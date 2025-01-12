// Example: Enable auto-scrolling for the carousel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    let scrollAmount = 0;
  
    setInterval(() => {
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += 200; // Adjust scroll speed
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000); // Adjust the delay (in milliseconds)
  });
  