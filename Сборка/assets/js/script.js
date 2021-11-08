$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		// в переменной хранится текущий скролл
		scrollOffset = $(window).scrollTop();




// Fixed-header

// функция появится сразу же в начале 
	checkScroll(scrollOffset);

// Функция отвечает за скролл
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});

// если обновим страницу пропадет скоролл и шапка тоже
// для этого пишем функцию что при обновлении шапка не пропадала

	function checkScroll(scrollOffset) {	

		if( scrollOffset >= introH) {
			header.addClass("header--fixed");
		} else {
			header.removeClass("header--fixed");
		}
	}




// Плавный скролл к элементам/местоположение ссылки в Header
	$("[data-scroll]").on("click", function(event){
		// отменим стандартное поведение ссылки
		event.preventDefault();

		var $this = $(this),
// Нажали на ссылку  с атрибутом data-scroll и получаем id
			blockId = $this.data('scroll');
			blockOffset = $(blockId).offset().top;
// в header задали айдишник nav  в котором убираем все ссылки 
			$("#nav a").removeClass("active")
// задаём класс для ссылки на которую нажали, чтобы понять где находимся на сайтe
			$this.addClass("active");
// плавный скролл при нажатии на ссылку 
			$("html, body").animate({
				scrollTop: blockOffset
			}, 500)
		
	});




// Menu nav toggle - при клике на бургер появляется меню
	$("#nav_toggle").on("click", function(event) {
		// стандартное поведение кнопки
		event.preventDefault();

		// делаем крестик
		$(this).toggleClass("active");
		// Добавляем класс active
		// Использвали toggle а не addClass для переключения между классами
		$("nav").toggleClass("active");
	});





	// Block whatwedo - collapse
// следим по клику по атрибуту data-collapse
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

			var $this = $(this),
			blockId = $this.data('collapse');

			// здесь this  это "accordion__item"
			$this.toggleClass("active");

	});

// https://kenwheeler.github.io/slick/ ссылка на slickJs
// к атрибуту data-slider мы привязали slick
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});