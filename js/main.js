const hotelSlider = new Swiper('.hotel-slider', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-button__next',
		prevEl: '.slider-button__prev',
	},
	keyboard: {
		enabled: true,
	}
});

const reviewsSlider = new Swiper('.reviews-slider', {
	// Optional parameters
	loop: true,
	autoHeight: true,
	// Navigation arrows
	navigation: {
		nextEl: '.reviews-button__next',
		prevEl: '.reviews-button__prev',
	},
});

$('.newsletter').parallax({ imageSrc: './img/bg-news.webp' });

let menuButton = document.querySelector(".menu-button");
let modalBtn = $("[data-toggle=modal]");
let closeModalBtn = $(".modal__close");

let modalOverlay = $(".modal__overlay");
let modalDialog = $(".modal__dialog");

let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

let openModal = () => {
	modalOverlay.addClass("modal__overlay--visible")
	modalDialog.addClass("modal__dialog--visible")
	$("body").addClass("body__hidden")
	$("body").css("paddingRight", scrollWidth)
};

let closeModal = (e) => {
	e.preventDefault()
	modalOverlay.removeClass("modal__overlay--visible")
	modalDialog.removeClass("modal__dialog--visible")
	$("body").removeClass("body__hidden")
	$("body").css("paddingRight", 0)
};

menuButton.addEventListener("click", () => {
	document.querySelector(".header-menu").classList.toggle("header-menu__visible")
	document.querySelector("body").classList.toggle("body__hidden")
}, { passive: true });

modalBtn.on("click", openModal);
closeModalBtn.on("click", closeModal);

$(document).on('keydown', (e) => {
	if (e.which === 27) { // key = esc (27)
		modalOverlay.removeClass("modal__overlay--visible")
		modalDialog.removeClass("modal__dialog--visible")
		$("body").removeClass("body__hidden")
		$("body").css("paddingRight", 0)
		return false;
	}
});

$(".form").each(function () {
	$(this).validate({
		errorClass: "invalid",
		rules: {
			name: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			name: {
				required: "Please specify your name",
				minlength: "The name must be at least 2 characters long",
			},
			email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com"
			},
			phone: {
				required: "We need your phone number to contact you",
			}
		}
	});
});

$("[type=tel]").mask('+0 (000) 000-00-00')

AOS.init();
// document.body.contentEditable = true