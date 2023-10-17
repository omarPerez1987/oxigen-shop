export function scrollToTop() {
  const clickTop = document.getElementById("clickTop");

  clickTop.addEventListener("click", function () {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 200);
  });
}
