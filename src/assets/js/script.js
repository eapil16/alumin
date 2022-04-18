'use strict';
document.addEventListener('DOMContentLoaded', () => {
    $('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('menu-toggle-cont_active')) { 
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown(300); 
            $('body').addClass('hidd'); 
        } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
        } 
    });

    document.querySelector('body').addEventListener('click', e => {
        if (e.target.closest('.search-button')) {
            document.querySelector('.search-block').classList.add('active');
        }
        if (!e.target.closest('.search-block') && !e.target.closest('.search-button')) {
            document.querySelector('.search-block').classList.remove('active');
        } 
        if (e.target.closest('.add_to_basket')) {
            e.preventDefault();
            const target = e.target.closest('.add_to_basket');
            target.classList.add('active');           
        } 
        if (e.target.closest('.header-basket__link')) {
          e.preventDefault();
          document.querySelector('#basket').classList.add('show');
          document.querySelector('body').classList.add('hidden');
          document.querySelector('.fixed-menu').style.display = 'none';
          document.querySelector('.menu-toggle-cont').classList.remove('menu-toggle-cont_active')          
        }
        if (e.target.closest('.basket-panel__close')) {
          e.preventDefault();
          document.querySelector('#basket').classList.remove('show');
          document.querySelector('body').classList.remove('hidden');
        }
        // if(!e.target.closest('.basket-panel') && !e.target.closest('.header-basket__link')) {
        //   document.querySelector('#basket').classList.remove('show');
        //   document.querySelector('body').classList.remove('hidden');
        // }
        if (e.target.closest('.show-order')) {
          e.preventDefault();
          document.querySelector('#order').classList.add('show');
          document.querySelector('body').classList.add('hidden');
          document.querySelector('.fixed-menu').style.display = 'none';
          document.querySelector('.menu-toggle-cont').classList.remove('menu-toggle-cont_active')          
        }
        if (e.target.closest('.order-panel__close')) {
          e.preventDefault();
          document.querySelector('#order').classList.remove('show');
          document.querySelector('body').classList.remove('hidden');
        }
        // if(!e.target.closest('.order-panel') && !e.target.closest('.show-order')) {
        //   document.querySelector('#order').classList.remove('show');
        //   document.querySelector('body').classList.remove('hidden');
        // }
    });
    if (document.querySelector('.input-count')) {
      const collection = document.querySelectorAll('.input-count');
      collection.forEach((element) => {
        element.addEventListener('focus', e => {
          const value = element.value.replace(' шт.', ' ');
          element.value = value;
        });
      });
    }
    if (document.querySelector('.input-count')) {
      const collection = document.querySelectorAll('.input-count');
      collection.forEach((element) => {
        element.addEventListener('blur', e => {
          const value = element.value;
          element.value = value + ' шт.';
        });
      });
    }
    if (document.querySelector('.input-count')) {
      const collection = document.querySelectorAll('.input-count');
      collection.forEach((element) => {
        element.addEventListener('input', e => {
          element.value = element.value.replace(/[^\d]/g, '');
        }); 
      });
    }
    

    const swiperBanner= new Swiper(".banner-slider", {
		allowTouchMove: true,
		slidesPerView: 1,
 		loop: true,
		spaceBetween: 0,
        speed: 800,
        navigation: {
           nextEl: ".banner-button-next",
           prevEl: ".banner-button-prev",
        },
    });
    

    const swiperMsinText= new Swiper(".main-text-slider", {
		allowTouchMove: true,
		slidesPerView: 1,
 		loop: true,
		spaceBetween: 0,
        speed: 800,
        navigation: {
           nextEl: ".main-text-button-next",
           prevEl: ".main-text-button-prev",
        },
    });

    const swiperServices= new Swiper(".services-slider", {
		allowTouchMove: true,
		slidesPerView: 2,
 		loop: true,
		spaceBetween: 15,
        speed: 800,
        navigation: {
           nextEl: ".services-button-next",
           prevEl: ".services-button-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    const swiperCatalogMobile= new Swiper(".catalog-slider-mobile", {
      allowTouchMove: true,
      slidesPerView: 1,
      oop: true,
      spaceBetween: 0,
      speed: 800,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const swiperTechnology= new Swiper(".technology-slider", {
		allowTouchMove: true,
		slidesPerView: 2,
 		loop: true,
		spaceBetween: 15,
        speed: 800,
        navigation: {
           nextEl: ".technology-button-next",
           prevEl: ".technology-button-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    });

    $(window).scroll(function(){ if($(this).scrollTop() > 550) $('#scroller').fadeIn(700); else $('#scroller').fadeOut(700); });
	  $('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 0); return false;});

    $('.catalog-menu__button').click(function (e) {
        $(this).toggleClass('active');
        $('.catalog-menu__dropdown ').slideToggle();
    });

    $('.filter-botton').click(function (e) {
      $('.catalog-content__flex_sidebar').slideToggle();
    });

    $('.product-page__button').click(function (e) {
      $(this).toggleClass('active');
      $('.product-page__hidden').slideToggle();
    });

    (function ($) {
		$.fn.HvrSlider = function () {
		  return this.each(function () {
			var el = $(this);
			if (el.find('img').length > 1) {
			  var hvr = $('<div>', {
				class: 'hvr',
				append: [
				  $('<div>', {
					class: 'hvr__images',
					append: $('<div>', {
					  class: 'hvr__sectors',
					}),
				  }),
				  $('<div>', {
					class: 'hvr__dots',
				  }),
				],
				insertAfter: el,
				prepend: el,
			  });
			  var hvrImages = $('.hvr__images', hvr);
			  var hvrImage = $('img', hvr);
			  var hvrSectors = $('.hvr__sectors', hvr);
			  var hvrDots = $('.hvr__dots', hvr);
			  el.prependTo(hvrImages);
			  hvrImage.each(function () {
				hvrSectors.prepend('<div class="hvr__sector"></div>');
				hvrDots.append('<div class="hvr__dot"></div>');
			  });
			  $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
			  var setActiveEl = function (el) {
				hvrImage.hide().eq(el.index()).show();
				$('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
			  };
			  $('.hvr__sector', hvrSectors).hover(function () {
				setActiveEl($(this));
			  });
			  hvrSectors.on('touchmove', function (e) {
				e.preventDefault();
				var position = e.originalEvent.changedTouches[0];
				var target = document.elementFromPoint(position.clientX, position.clientY);
				if ($(target).is('.hvr__sector')) {
				  setActiveEl($(target));
				}
			  });
			}
		  });
		};
	})(jQuery);
  $('.images-preview').HvrSlider();

  const count = ' шт.';

  $(document).on('click', '.btn.decrease', function(){
    const $field = $(this).siblings('input');
    $field.val(parseInt($field.val()) + 1 + count);
    $field.trigger('change');
  })

  $(document).on('click', '.btn.increase', function(){
      const $field = $(this).siblings('input');
      const value = $field.val();
      const valueInt = value.replace(' шт.', ' ');
      if (valueInt - 1 >= 1) {
          $field.val((valueInt - 1) + count);
      }
      $field.trigger('change');
  })

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiperAccessories = new Swiper(".accessories-slider", {
		allowTouchMove: true,
		slidesPerView: 2,
 		loop: true,
		spaceBetween: 2,
        speed: 800,
        navigation: {
           nextEl: ".accessories-button-next",
           prevEl: ".accessories-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 2,
            }
        }
    });
    // $("#phone").mask("+9 (999) 999 - 99 - 99");
});