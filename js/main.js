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

menuButton.addEventListener("click", () => {
	document.querySelector(".header-menu").classList.toggle("header-menu__visible")
	document.querySelector("body").classList.toggle("body__hidden")
})

$('.newsletter').parallax({ imageSrc: '/img/bg-news.jpg' });

// document.body.contentEditable = true