$(document).ready(function() {
	$('.item-menu__none').click(function(event) {
		if($('.info-menu__body').hasClass('one')){
			$('.info-menu__label').not($(this)).removeClass('active');
			$('.info-menu__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
}); 

// POOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOG
const pmenuLinks = document.querySelectorAll('.pmenu-link');
const body = document.querySelector('body');
const pockPadding = document.querySelectorAll(".pock-padding");

let unpock = true;

const timeout = 300;

if (pmenuLinks.length > 0) {
	for (let index = 0; index < pmenuLinks.length; index++) {
		const pmenuLink = pmenuLinks[index];
		pmenuLink.addEventListener("click", function (e) {
			const pmenuName = pmenuLink.getAttribute('href').replace('#', '');
			const curentPmenu = document.getElementById(pmenuName);
			pmenuOpen(curentPmenu);
			e.preventDefault();
		});
	}
}
const pmenuCloseIcon = document.querySelectorAll('.close-pmenu');
if (pmenuCloseIcon.length > 0) {
	for (let index = 0; index < pmenuCloseIcon.length; index++) {
		const el = pmenuCloseIcon[index];
		el.addEventListener('click', function (e) {
			pmenuClose(el.closest('.pmenu'));
			e.preventDefault();
		});
	}
}

function pmenuOpen(curentPmenu) {
	if (curentPmenu && unpock) {
		const pmenuActive = document.querySelector('.pmenu.open');
		if (pmenuActive) {
			pmenuClose(pmenuActive, false);
		} else {
			bodyPock();
		}
		curentPmenu.classList.add('open');
		curentPmenu.addEventListener("click", function (e) {
			if (!e.target.closest('.pmenu__content')) {
				pmenuClose(e.target.closest('.pmenu'));
			}
		});
	}
}

function pmenuClose(pmenuActive, doUnpock = true) {
	if (unpock) {
		pmenuActive.classList.remove('open');
		if (doUnpock) {
			bodyUnPock();
		}
	}
}

function bodyPock() {
	const pockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (pockPadding.length > 0) {
		for (let index = 0; index < pockPadding.length; index++) {
			const el = pockPadding[index];
			el.style.paddingRight = pockPaddingValue;
		}
	}
	body.style.paddingRight = pockPaddingValue;
	body.classList.add('pock');

	unpock = false;
	setTimeout(function () {
		unpock = true;
	}, timeout);
}

function bodyUnPock() {
	setTimeout(function () {
		if (pockPadding.length > 0) {
			for (let index = 0; index < pockPadding.length; index++) {
				const el = pockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('pock');
	}, timeout);

	unpock = false;
	setTimeout(function () {
		unpock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const pmenuActive = document.querySelector('.pmenu.open');
		pmenuClose(pmenuActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();




























//потом закоментить надо
/*if (isMobile.any()) {
	let menuParents = document.querySelectorAll('.menu-page__parent>a');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("click", function (e) {
			menuParent.parentElement.classList.toggle('_active');
			e.preventDefault();
		});
	}
} else {
	let menuParents = document.querySelectorAll('.menu-page__parent');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("mouseenter", function (e) {
			menuParent.classList.add('_active');
		});
		menuParent.addEventListener("mouseleave", function (e) {
			menuParent.classList.remove('_active');
		});
	}
}


let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click", function (e) {
	menuPageBurger.classList.toggle('_active');
	_slideToggle(menuPageBody);
});

let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');
searchSelect.addEventListener("click", function (e) {
	searchSelect.classList.toggle('_active');
	_slideToggle(categoriesSearch);
});*/