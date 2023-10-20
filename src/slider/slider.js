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
    this.interval = 0;

    this.prevBtn.addEventListener("click", this.prevSlide.bind(this));
    this.nextBtn.addEventListener("click", this.nextSlide.bind(this));
    this.menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", this.menuSlide.bind(this));
    });
    this.prevSlide();
    this.startAutoSlide();
  }


  menuSlide(event) {
    event.preventDefault();
    this.pauseAutoSlide();
    const targetId = event.target.getAttribute("id");
    const targetIndex = Array.from(this.images).findIndex(
      (image) => image.id === targetId
    );
  
    this.currentIndex = targetIndex
    this.showSlide(targetIndex);
    this.resumeAutoSlide();
    this.printMenu(targetIndex);
  }
  
  
  showSlide(targetIndex) {
    this.images.forEach((image) => {
      image.style.display = "none";
    });
    this.images[targetIndex].style.display = "block";
    this.printMenu(targetIndex);
  }
  
  printMenu(targetIndex) {
    this.menuItems.forEach((menuItem) => {
      menuItem.style.backgroundColor = "#08a6e4";
    });
    this.menuItems[targetIndex].style.backgroundColor = "black";
  }
  
  prevSlide() {
    this.pauseAutoSlide();
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
    this.interval = this.currentIndex
    this.showSlide(this.currentIndex);
    this.resumeAutoSlide();
  }
  
  nextSlide() {
    this.pauseAutoSlide();
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.interval = this.currentIndex
    this.showSlide(this.currentIndex);
    this.resumeAutoSlide();
  }

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
