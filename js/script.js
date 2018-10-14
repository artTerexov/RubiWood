// Плавный скролл к якорям

$(document).ready(function(){
    $('.page-header a').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});

// Слайдер в блоке Портфолио

 // Индекс слайда по умолчанию 
var slideIndex = 1;
showSlides(slideIndex);

 // Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}

 // Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);
}

 // Устанавливает текущий слайд 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

 // Основная функция слайдера 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
