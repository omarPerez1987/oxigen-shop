export class Slider {
  constructor(id) {
    this.slider = document.getElementById(id);
    this.images = this.slider.querySelectorAll(".slider__div__images li");
    this.prevBtn = this.slider.querySelector("#prevBtn");
    this.nextBtn = this.slider.querySelector("#nextBtn");
    this.menuItems = this.slider.querySelectorAll(
      ".slider__section__menu li a"
    );
    this.currentIndex = 0;
    this.interval = null;

    this.prevBtn.addEventListener("click", this.prevSlide.bind(this));
    this.nextBtn.addEventListener("click", this.nextSlide.bind(this));
    this.menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", this.menuSlide.bind(this));
    });
    this.prevSlide(); // muestra una imagen al inicio
    this.startAutoSlide(); // incia el autoSlider
  }

  // Metodo que compara el indice del array de las imagenes con el id del click del evento
  // y devuelve el indice
  menuSlide(event) {
    event.preventDefault();
    this.pauseAutoSlide();
    const targetId = event.target.getAttribute("id");
    const targetIndex = Array.from(this.images).findIndex(
      (image) => image.id === targetId
    );
    this.showSlide(targetIndex);
    this.resumeAutoSlide();
  }

  // Método para muestra el slide del indice pasado a través del parametro
  showSlide(targetIndex) {
    this.images.forEach((image) => {
      image.style.display = "none";
    });
    this.images[targetIndex].style.display = "block";
  }

  prevSlide() {
    this.pauseAutoSlide();
    // si el indice es 0 avanzará al final del indice
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
    this.showSlide(this.currentIndex);
    this.resumeAutoSlide();
  }

  nextSlide() {
    this.pauseAutoSlide();
    // si el indice es el ultimo volverá al principio del indice
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.showSlide(this.currentIndex);
    this.resumeAutoSlide();
  }

  // funciones del autoSlide
  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  pauseAutoSlide() {
    clearInterval(this.interval);
  }

  resumeAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }
}
