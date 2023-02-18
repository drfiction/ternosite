$(function () {

	// fixed header
	let header = $("#header");
	let offer = $("#offer");
	let offerH;
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function () {
		offerH = offer.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > 0) { /*offerH - высота блока intro можно задать свои значения в px*/
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	});

	/*navToggle*/

	let nav = $(".nav");
	let icon = $(".header__icon");
	let navToggle = $("#navToggle");
	let link = $(".nav__item");
	let section = $("section");

	navToggle.on("click", function (event) {
		event.preventDefault(); /*отменяем стандартное поведение*/

		icon.toggleClass("_active");
		nav.toggleClass("_active");

	});


	link.on("click", function (event) {
		// event.preventDefault(); /*отменяем стандартное поведение*/

		nav.removeClass("_active");
		icon.removeClass("_active");
	});


	section.on("click", function (event) {
		// event.preventDefault(); /*отменяем стандартное поведение*/

		nav.removeClass("_active");
		icon.removeClass("_active");
	});

	// =======

	jQuery(window).scroll(function () {
		var $sections = $('section');
		$sections.each(function (i, el) {
			var top = $(el).offset().top - 100;
			var bottom = top + $(el).height();
			var scroll = $(window).scrollTop();
			var id = $(el).attr('id');
			if (scroll > top && scroll < bottom) {
				$('a.active').removeClass('active');
				$('a[href="#' + id + '"]').addClass('active');

			}
		})
	});

	$(".nav").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),

			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 30;

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800);
	});


	$(function () {
		// при нажатии на кнопку scrollup
		$('.scrollup').click(function () {
			// переместиться в верхнюю часть страницы
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
		})
	})
	// при прокрутке окна (window)
	$(window).scroll(function () {
		// если пользователь прокрутил страницу более чем на 200px
		if ($(this).scrollTop() > 200) {
			// то сделать кнопку scrollup видимой
			$('.scrollup').fadeIn();
		}
		// иначе скрыть кнопку scrollup
		else {
			$('.scrollup').fadeOut();
		}
	})

});



