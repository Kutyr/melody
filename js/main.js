$(document).ready(function () {
    var currentFloor = 2; //переменная с текущим этажом
    var floorPath = $(".home-image path");//каждый отдельный этаж в SVG
    var counterUp = $(".counter-up");//+ этаж
    var counterDown = $(".counter-down");//-этаж
    var modal = $(".modal");
    var modalCloseButton = $('.modal-close-button');
    var viewFlatsButton = $(".view-flats");

    // функция при наведении мышью //
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); //удаляем активный класс этажа
        currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
        $(".counter").text(currentFloor); //записываем значение этажа в счетчик справа
    });

    floorPath.on('click', toggleModal); /* при клике на этаж вызвать окно */
    modalCloseButton.on('click', toggleModal); /* при клике на крест закрыть окно */
    viewFlatsButton.on("click", toggleModal);
    counterUp.on("click", function () { //отслеживаем клик по кнопке вверх
        if (currentFloor < 18) {// проверяем значение не больше 18
            currentFloor++;//добавляем один этаж
        usCurrentFloor = currentFloor.toLocaleString('en-US' , {minimumIntegerDigits: 2,useGroupping: false });// чтобы было 02 а не 2
        $(".counter").text(usCurrentFloor);//записываем значение этажа в счетчик справа
        floorPath.removeClass("current-floor");//удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсветка текущего этажа
        }
    });

    counterDown.on("click", function () {//отслеживаем клик по кнопке вниз
        if (currentFloor > 2) {// проверяем значение не меньше 2
            currentFloor--;//убавляем один этаж
        usCurrentFloor = currentFloor.toLocaleString('en-US' , {minimumIntegerDigits: 2,useGroupping: false });// чтобы было 02 а не 2
        $(".counter").text(usCurrentFloor);//записываем значение этажа в счетчик справа
        floorPath.removeClass("current-floor");//удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсветка текущего этажа
        }
    });
    function toggleModal() { //открыть закрыть окно
        modal.toggleClass('is-open');
    }
});