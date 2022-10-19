(function ($) {
    "use strict";
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };
    });
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $(document).on('click', 'a.scroll-to-top', function (e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });
    $(function () {
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    $(".hijri-date-input").on('dp.change', function (arg) {
        if ($(this).val() == "") {
            $(this).closest('.floating-label-form-group').removeClass('floating-label-form-group-with-value');
        } else {
            $(this).closest('.floating-label-form-group').addClass('floating-label-form-group-with-value');
        }
        
    });

    var oneobjowlcarousel = $(".owl-carousel-one");
    if (oneobjowlcarousel.length > 0) {
        oneobjowlcarousel.owlCarousel({
            rtl: true,
            items: 1,
            lazyLoad: true,
            pagination: false,
            loop: false,
            dots: false,
            autoPlay: 2000,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"]
        });
    }
    var objowlcarousel = $(".owl-carousel-two");
    if (objowlcarousel.length > 0) {
        objowlcarousel.owlCarousel({
            rtl: true,
            items: 2,
            lazyLoad: true,
            pagination: false,
            loop: false,
            dots: false,
            autoPlay: 2000,
            margin: 15,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                979: {
                    items: 2
                },
                1199: {
                    items: 2
                }
            }
        });
    }
    var threeobjowlcarousel = $(".owl-carousel-three");
    if (threeobjowlcarousel.length > 0) {
        threeobjowlcarousel.owlCarousel({
            rtl: true,
            items: 3,
            lazyLoad: true,
            pagination: false,
            loop: false,
            dots: false,
            autoPlay: 2000,
            margin: 15,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 2
                },
                979: {
                    items: 3
                },
                1199: {
                    items: 3
                }
            }
        });
    }
    var fiveobjowlcarousel = $(".owl-carousel-four");
    if (fiveobjowlcarousel.length > 0) {
        fiveobjowlcarousel.owlCarousel({
            rtl: true,
            items: 4,
            lazyLoad: true,
            pagination: false,
            loop: false,
            dots: false,
            margin: 15,
            autoPlay: 2000,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 2
                },
                979: {
                    items: 4
                },
                1199: {
                    items: 4
                }
            }
        });
    }
    var fiveobjowlcarousel = $(".owl-carousel-five");
    if (fiveobjowlcarousel.length > 0) {
        fiveobjowlcarousel.owlCarousel({
            rtl: true,
            items: 5,
            lazyLoad: true,
            pagination: false,
            loop: false,
            dots: false,
            autoPlay: 2000,
            margin: 15,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 2
                },
                979: {
                    items: 4
                },
                1199: {
                    items: 5
                }
            }
        });
    }
    var restaurantslider = $(".restaurant-slider");
    if (restaurantslider.length > 0) {
        restaurantslider.owlCarousel({
            rtl: true,
            items: 1,
            lazyLoad: true,
            pagination: false,
            loop: false,
            dots: false,
            autoPlay: 2000,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"]
        });
    }


    var threeobjowlcarousel = $(".owl-carousel.coupons-deals");
    if (threeobjowlcarousel.length > 0) {
        threeobjowlcarousel.owlCarousel({
            rtl: true,
            items: 3,
            lazyLoad: true,
            pagination: false,
            loop: false,
            dots: false,
            margin: 15,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 2
                },
                979: {
                    items: 3
                },
                1199: {
                    items: 3
                }
            }
        });
    }

    var allStores = $(".owl-carousel.all-stores");
    if (allStores.length > 0) {
        allStores.owlCarousel({
            rtl: true,
            items: 9,
            slideBy:'page',
            lazyLoad: true,
            rewind:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            smartSpeed:50,
            pagination: false,
            loop: false,
            dots: false,
            margin: 15,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 2
                },
                479: {
                    items: 3
                },
                768: {
                    items: 5
                },
                979: {
                    items: 7
                },
                1199: {
                    items: 9
                }
            }
        });
    }

    var allStores = $(".owl-carousel.banners");
    if (allStores.length > 0) {
        allStores.owlCarousel({
            rtl: true,
            items: 1,
            lazyLoad: true,
            pagination: false,
            loop: false,
            dots: false,
            rewind:true,
            autoplay:true,
            autoplayTimeout:7000,
            autoplayHoverPause:true,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"]
        });
    }

    
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
    $('select').select2();
    $('[data-toggle="tooltip"]').tooltip();

    $("#country-code").intlTelInput({
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            $.get('https://ipinfo.io', function () {}, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "us";
                callback(countryCode);
            });
        }
    });

    $(document).on('click', '.toggle-password', function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $(".input-img .password");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }

    });

    $(".hijri-date-input").hijriDatePicker({
        isRTL: true,
        showTodayButton: true,
        icons: {
            today: 'تاريخ اليوم'
        },
        locale: "ar-sa",
        format: "DD-MM-YYYY",
        hijriFormat: "iYYYY-iMM-iDD",
        dayViewHeaderFormat: "MMMM YYYY",
        hijriDayViewHeaderFormat: "iMMMM iYYYY",
    });


    const form = document.querySelector('.form-code')
    const inputs = form.querySelectorAll('.code-input')
    const KEYBOARDS = {
        backspace: 8,
        arrowLeft: 37,
        arrowRight: 39,
    }

    function handleInput(e) {
        const input = e.target
        const nextInput = input.nextElementSibling
        if (nextInput && input.value) {
            nextInput.focus()
            if (nextInput.value) {
                nextInput.select()
            }
        }
    }

    function handlePaste(e) {
        e.preventDefault()
        const paste = e.clipboardData.getData('text')
        inputs.forEach((input, i) => {
            input.value = paste[i] || ''
        })
    }

    function handleBackspace(e) {
        const input = e.target
        if (input.value) {
            input.value = ''
            return
        }

        input.previousElementSibling.focus()
    }

    function handleArrowLeft(e) {
        const previousInput = e.target.previousElementSibling
        if (!previousInput) return
        previousInput.focus()
    }

    function handleArrowRight(e) {
        const nextInput = e.target.nextElementSibling
        if (!nextInput) return
        nextInput.focus()
    }

    form.addEventListener('input', handleInput)
    inputs[0].addEventListener('paste', handlePaste)

    inputs.forEach(input => {
        input.addEventListener('focus', e => {
            setTimeout(() => {
                e.target.select()
            }, 0)
        })

        input.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case KEYBOARDS.backspace:
                    handleBackspace(e)
                    break
                case KEYBOARDS.arrowLeft:
                    handleArrowLeft(e)
                    break
                case KEYBOARDS.arrowRight:
                    handleArrowRight(e)
                    break
                default:
            }
        })
    })



})(jQuery);