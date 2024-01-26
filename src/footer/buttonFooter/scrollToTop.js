const clickTop = document.getElementById("clickTop");

export function scrollToTop() {
  clickTop.addEventListener("click", function () {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 200);
  });
}

export const showScrollToTop = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      clickTop.style.display = "block";
    } else {
      clickTop.style.display = "none";
    }
  });
};
