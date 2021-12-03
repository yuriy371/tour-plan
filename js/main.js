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

let menuButton = document.querySelector(".menu-button")
let modalBtn = $("[data-toggle=modal]")
let closeModalBtn = $(".modal__close")

let modalOverlay = $(".modal__overlay")
let modalDialog = $(".modal__dialog")

let openModal = () => {
	modalOverlay.addClass("modal__overlay--visible")
	modalDialog.addClass("modal__dialog--visible")
	$("body").addClass("body__hidden")
}

let closeModal = (e) => {
	e.preventDefault()
	modalOverlay.removeClass("modal__overlay--visible")
	modalDialog.removeClass("modal__dialog--visible")
	$("body").removeClass("body__hidden")

}

$(document).on('keydown', (e) => {
	if (e.which === 27) { // key = esc (27)
		modalOverlay.removeClass("modal__overlay--visible")
		modalDialog.removeClass("modal__dialog--visible")
		$("body").removeClass("body__hidden")
		return false;
	}
});
menuButton.addEventListener("click", () => {
	document.querySelector(".header-menu").classList.toggle("header-menu__visible")
	document.querySelector("body").classList.toggle("body__hidden")
})

modalBtn.on("click", openModal)
closeModalBtn.on("click", closeModal)

$('.newsletter').parallax({ imageSrc: '/img/bg-news.jpg' });

// document.body.contentEditable = true