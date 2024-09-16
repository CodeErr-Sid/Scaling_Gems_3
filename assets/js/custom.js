// ==================================================
// Project Name   :  COMFY – HTML5 Template
// File           :  CSS Base
// Version        :  1.0.0
// Author         :  DRTheme
// ==================================================
(function($) {
    'use strict';

    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });


    /* Hero Slider */
    const heroSlider = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.hero-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-slider .swiper-button-next',
            prevEl: '.hero-slider .swiper-button-prev',
        }
    });


    /* Blog Carousel */
    const productCarousel = new Swiper('.blog-carousel', {
        loop: true,
        spaceBetween: 0,
        freeMode: false,
        pagination: {
            el: '.blog-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.blog-carousel .swiper-button-next',
            prevEl: '.blog-carousel .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });


    /* Gallery Carousel */
    const commonSwiperOptions = {
        loop: true,
        spaceBetween: 15,
        pagination: {
            el: '.blog-carousel .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            1920: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        }
    };

    const galleryCarousel = new Swiper('.gallery-carousel', {
        ...commonSwiperOptions,
        centeredSlides: false,
    });

    const galleryCarousel2 = new Swiper('.gallery-carousel:nth-child(2)', {
        ...commonSwiperOptions,
        centeredSlides: true,
    });




    /* Blog Carousel */
    const brandCarousel = new Swiper('.brand-carousel', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: '.brand-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.brand-carousel .swiper-button-next',
            prevEl: '.brand-carousel .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    });


    /* Testimonial Carousel */
    const testiCarousel = new Swiper('.testi-carousel', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.testi-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testi-carousel .swiper-button-next',
            prevEl: '.testi-carousell .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1920: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });



    // Shop Tab Slider

    /* Single Product Thumbnail Carousel */
    const singleProductThumbCarousel = new Swiper('.single-product-thumb-carousel', {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: '.single-product-thumb-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.single-product-thumb-carousel .swiper-button-next',
            prevEl: '.single-product-thumb-carousel .swiper-button-prev',
        }
    });


    /* Single Product Image Slider */
    const singleProductImageSlider = new Swiper('.single-product-image-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.single-product-image-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.single-product-image-slider .swiper-button-next',
            prevEl: '.single-product-image-slider .swiper-button-prev',
        },
        thumbs: {
            swiper: singleProductThumbCarousel,
        },
    });



    /* Product Quantity & Shop Details Quantity*/
    const elements = document.querySelectorAll('.product-quantity-count, .category-count-button, .qty-btn, .ctnbutton');

    elements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();

            const btn = e.target; // Clicked button
            const box = btn.parentElement.querySelector('.product-quantity-box, .cart-plus-minus-box');

            if (btn.classList.contains('inc')) {
                box.value = Number(box.value) + 1;
            }
            else if (btn.classList.contains('dec') && Number(box.value) > 1) {
                box.value = Number(box.value) - 1;
            }
        });
    });




    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 5,
        time: 1500
    });

    // Venubox
    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });

    /* Magnific Popup */
    $('.gallery-carousel').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*--------------------------
     scrollUp
    ---------------------------- */


    // widget categories menu
    $(document).ready(function() {
        $('.widget-categories-menu ul li').on('mouseenter', function() {
            $(this).addClass('active');
            $('.widget-categories-menu ul li').not(this).removeClass('active');
        });
    });


    // Faq Accordin
    jQuery(document).ready(function($) {
        "use strict";

        // =======< accordion js >========
        jQuery(document).ready(function() {
            const firstAccordionHeader = document.querySelector('.accordion-content:nth-child(1)');
            if (firstAccordionHeader) {
                firstAccordionHeader.classList.add('open');
            }

            const accordionContent = document.querySelectorAll(".accordion-content");

            accordionContent.forEach((item, index) => {
                let header = item.querySelector("header");
                header.addEventListener("click", () => {
                    item.classList.toggle("open");

                    let description = item.querySelector(".description");
                    if (item.classList.contains("open")) {
                        description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
                        item.querySelector("i").classList.replace("fa-plus", "fa-minus");
                    } else {
                        description.style.height = "0px";
                        item.querySelector("i").classList.replace("fa-minus", "fa-plus");
                    }
                    removeOpen(index); //calling the funtion and also passing the index number of the clicked header
                })
            })

            function removeOpen(index1) {
                accordionContent.forEach((item2, index2) => {
                    if (index1 != index2) {
                        item2.classList.remove("open");

                        let des = item2.querySelector(".description");
                        des.style.height = "0px";
                        item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
                    }
                })
            }
        });



        //======< Custom Tab >======
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $(".tab ul.tabs li a").on("click", function(g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });

    });


    /* Shopping Form Toggle */
    if ($('[data-toggle-shipping]').length) {
        const $shippingToggle = $('[data-toggle-shipping]'),
            $shippingToggleTarget = $($shippingToggle[0].dataset.toggleShipping),
            $shippingShowHide = function() {
                if ($shippingToggle[0].checked) {
                    $shippingToggleTarget.slideDown();
                } else {
                    $shippingToggleTarget.slideUp();
                }
            }
        $shippingShowHide()
        $shippingToggle.on('change', function() {
            $shippingShowHide()
        });
    }


    /* Payment Method Toggle */
    if ($('input[type="radio"][name="payment-method"]').length) {
        const $paymentToggle = $('input[type="radio"][name="payment-method"]'),
            $paymentShowHide = function() {
                $paymentToggle.each(function() {
                    const $this = $(this),
                        $thisContent = $this.siblings('p')
                    if ($this[0].checked) {
                        $thisContent.slideDown();
                        $this.parent().siblings().find('p').slideUp()
                    }
                })
            }
        $paymentShowHide()
        $paymentToggle.on('change', function() {
            $paymentShowHide()
        });
    }




    // Sidebar
    "use strict";
    jQuery(document).ready(function(o) {
        0 < o(".offset-side-bar").length &&
            o(".offset-side-bar").on("click", function(e) {
                e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
            }),
            0 < o(".close-side-widget").length &&
            o(".close-side-widget").on("click", function(e) {
                e.preventDefault(), o(".cart-group").removeClass("isActive");
            }),
            0 < o(".navSidebar-button").length &&
            o(".navSidebar-button").on("click", function(e) {
                e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
            }),
            0 < o(".close-side-widget").length &&
            o(".close-side-widget").on("click", function(e) {
                e.preventDefault(), o(".info-group").removeClass("isActive");
            }),
            o("body").on("click", function(e) {
                o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
            }),
            o(".xs-sidebar-widget").on("click", function(e) {
                e.stopPropagation();
            }),
            0 < o(".xs-modal-popup").length &&
            o(".xs-modal-popup").magnificPopup({
                type: "inline",
                fixedContentPos: !2,
                fixedBgPos: !0,
                overflowY: "auto",
                closeBtnInside: !2,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                    },
                },
            });
    });

    // Cursor Style
    document.addEventListener("DOMContentLoaded", function() {
        var cursor = document.querySelector(".cursor");
        var cursor2 = document.querySelector(".cursor2");

        document.addEventListener("mousemove", function(e) {
            cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        });

        var cursorScale = document.querySelectorAll('a, button, .brand-item,.swiper-button-prev,.swiper-button-next, .icons');


        cursorScale.forEach(link => {
            link.addEventListener('mousemove', () => {
                cursor.classList.add('grow');
                if (link.classList.contains('small')) {
                    cursor.classList.remove('grow');
                    cursor.classList.add('grow-small');
                }
            });

            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('grow');
                cursor.classList.remove('grow-small');
            });
        });
    });




    // menu button - start
    $(document).ready(function() {
        $('.close_btn, .cart_sidebar_overlay').on('click', function() {
            $('.cart_sidebar').removeClass('active');
            $('.cart_sidebar_overlay').removeClass('active');
        });

        $('.cart_btn').on('click', function() {
            $('.cart_sidebar').addClass('active');
            $('.cart_sidebar_overlay').addClass('active');
        });
    });


    // Cart Item - start
    $(document).ready(function() {
        $('.cart_item .remove_btn').on('click', function() {
            $(this).closest('.cart_item').toggleClass('remove');
        });
    });



    // scroll up
    // --------------------------------------------------
    if ($('.prgoress_indicator path').length) {
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.prgoress_indicator').addClass('active-progress');
            } else {
                jQuery('.prgoress_indicator').removeClass('active-progress');
            }
        });
        jQuery('.prgoress_indicator').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        });
    }


    /*------------- preloader js --------------*/
    var percentage = 0;
    var LoadingCounter = setInterval(function() {
        if (percentage <= 100) {
            // $('#loading-screen ').css('opacity', (100 - percentage));
            $("#loading-screen .loading-counter").text(percentage + "%");
            $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
            $("#loading-screen .progress-line").css(
                "transform",
                "scale(" + percentage / 100 + ")"
            );
            percentage++;
        } else {
            $("#loading-screen").fadeOut(500);
            setTimeout(() => {
                $("#loading-screen").remove();
            }, 500);
            clearInterval(LoadingCounter);
        }
    }, 10);
    /*-----------------  End Percentage loading screen interactions -----------------  */


    /*--
        Ajax Contact Form
    -----------------------------------*/
    document.addEventListener("DOMContentLoaded", function() {
        function handleFormSubmission(form, statusElement, formIndex) {
            form.addEventListener("submit", function(ev) {
                ev.preventDefault();
                var data = new FormData(form);
                sendAjaxRequest("POST", form.action, data, function(response) {
                    handleSuccess(response, statusElement, formIndex);
                }, function(statusCode, responseText) {
                    handleError(statusCode, responseText, statusElement, formIndex);
                });
            });
        }

        function handleSuccess(response, statusElement, formIndex) {
            forms[formIndex].reset();
            statusElement.classList.add("success");
            statusElement.innerHTML = '<i class="far fa-check-circle"></i> Thank you message sent.';
            // You can do something with the response from the server if needed.
        }

        function handleError(statusCode, responseText, statusElement, formIndex) {
            statusElement.classList.add("error");
            statusElement.innerHTML = '<i class="far fa-times-circle"></i> Oops! There was a problem.';
            // You can display more specific error information if needed.
        }

        function sendAjaxRequest(method, url, data, successCallback, errorCallback) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    successCallback(xhr.response);
                } else {
                    errorCallback(xhr.status, xhr.responseText);
                }
            };
            xhr.send(data);
        }

        var forms = document.querySelectorAll(".dreamit-form, .dreamit-form2, .dreamit-form3, .dreamit-form4");
        var statuses = document.querySelectorAll(".status, .status2, .status3, .status4");

        forms.forEach(function(form, index) {
            handleFormSubmission(form, statuses[index], index);
        });
    });


    // Direction
    // --------------------------------------------------
    $(".portfolio-single-box").snakeify({
        inaccuracy: 50,
        speed: 500
    });
    $(".gallery-single-box").snakeify({
        inaccuracy: 50,
        speed: 500
    });




})(jQuery);