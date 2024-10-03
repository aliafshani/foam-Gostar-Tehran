var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // فقط یک اسلاید نشان داده شود
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, // در صورتی که می‌خواهید اسلاید‌ها بی‌پایان چرخش کنند
});