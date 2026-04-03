// Initialize Swiper
let swiper = new Swiper(".myHeroSwiper", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});