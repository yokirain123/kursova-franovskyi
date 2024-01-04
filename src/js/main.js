/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'

import Swiper, { Navigation, Pagination } from 'swiper';

// import 'swiper/css/bundle';

import BaseHelpers from './helpers/BaseHelpers';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
// import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();
/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});

let reviewSwiper = new Swiper("#reviews-swiper", {
	modules: [ Navigation ],

	initialSlide: 1,
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},

});

// mobile menu 
const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
    
menuBtnRef.addEventListener('click', () => {
	const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
	menuBtnRef.classList.toggle('is-open');
	menuBtnRef.setAttribute('aria-expanded', !expanded);
	mobileMenuRef.classList.toggle('is-open');
	document.body.classList.toggle('no-scroll');
});


// filters
let filterButtons = document.querySelectorAll('.filter__item');
let projects = document.querySelectorAll('.content__box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        let textCategory = button.textContent;

        projects.forEach(project => {
            let projectCategory = project.querySelector('.project__category').textContent;

            if(textCategory === 'Новинки') {
                project.style.display = 'block';  
              } else if (textCategory === 'Акції' && projectCategory.includes('Сайт')) {
                project.style.display = 'block';
              } else if (textCategory === 'Популярні' && projectCategory.includes('Портфоліо')) {
                project.style.display = 'block';
              }else {
                project.style.display = 'none';
              }
        })
    })
})