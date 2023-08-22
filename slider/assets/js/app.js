//Получаем видимую часть слайда
let viewport = document.getElementById("slider__viewport").offsetWidth;
// Получаем кнопку вперёд
let btnNext = document.getElementById("slider__control-next");
// Получаем кнопку назад
let btnPrev = document.getElementById("slider__control-prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector("div.slider");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;

// Назначаем цвет индикатор слайда красный
viewSliders[0].style.backgroundColor = "red";
// viewSliders[0].classList.add("active");

// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    // viewSliders[viewSlide].classList.remove("active");
    viewSliders[viewSlide].style.backgroundColor = "orange";
    // Условие, если номер слайда меньше четырёх
    if (viewSlide < 4) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // Закрашиваем индикатор слайда в красный
    viewSliders[viewSlide].style.backgroundColor = "red";
    // viewSliders[viewSlide].classList.remove("active");
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});

// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
    // Условие, если номер слайда больше нуля
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--;
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = 4;
    }
      // Делаем индикатор слайда коричневый
      viewSliders[viewSlide].style.backgroundColor = "brown";
      // Меняем позицию всего слайда
      slider.style.left = -viewSlide * viewport + "px";
});
