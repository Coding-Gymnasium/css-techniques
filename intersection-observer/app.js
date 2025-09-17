const section = document.querySelector("#my-work");
const images = section.querySelectorAll("#my-work img");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {threshold: 0});

images.forEach(image => {
  observer.observe(image);
});

