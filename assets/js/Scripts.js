(function ($) {
  "use strict";

  // Banner Carousel / Owl Carousel
  if ($(".banner-carousel").length) {
    $(".banner-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  if ($(".causestudeis-carousel").length) {
    $(".causestudeis-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  // Single Item Carousel
  if ($(".single-item-carousel").length) {
    $(".single-item-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  if ($(".ecosysytem-carousel").length) {
    $(".ecosysytem-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  // Services Carousel
  if ($(".services-carousel").length) {
    $(".services-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: [
        '<span class="fa fa-long-arrow-alt-left"></span>',
        '<span class="fa fa-long-arrow-alt-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  // Team Carousel
  if ($(".team-carousel").length) {
    $(".team-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: [
        '<span class="fa fa-long-arrow-alt-left"></span>',
        '<span class="fa fa-long-arrow-alt-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  if ($(".projects-slider").length) {
    var swiper = new Swiper(".projects-slider", {
      effect: "coverflow",
      loop: true,
      centeredSlides: true,
      slidesPerView: 2,
      initialSlide: 3,
      keyboardControl: true,
      mousewheelControl: false,
      lazyLoading: true,
      preventClicks: false,
      preventClicksPropagation: false,
      lazyLoadingInPrevNext: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      coverflow: {
        rotate: 40,
        stretch: 1,
        depth: 0,
        modifier: 1,
      },
      breakpoints: {
        1199: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 1,
        },
      },
    });
  }

  // Testimonial Carousel
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          margin: 0,
          items: 1,
        },
        768: {
          margin: 0,
          items: 2,
        },
        1024: {
          margin: 30,
          items: 2,
        },
      },
    });
  }

  // tetsAbout Carousel
  if ($(".tetsAbout-carousel").length) {
    $(".tetsAbout-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      dots: true,
      items: 1,
      autoplayTimeout: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          margin: 0,
          items: 1,
        },
        768: {
          margin: 0,
          items: 1,
        },
        1024: {
          margin: 0,
          items: 1,
        },
      },
    });
  }

  // Sponsors Carousel
  if ($(".sponsors-carousel").length) {
    $(".sponsors-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1024: {
          items: 5,
        },
      },
    });
  }

  // eventhome Carousel
  if ($(".eventhome-carousel").length) {
    $(".eventhome-carousel").owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      smartSpeed: 500,
      items: 3,
      autoplay: false,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }

  // whyclassera Carousel
  if ($(".whyclassera-carousel").length) {
    $(".whyclassera-carousel").owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      smartSpeed: 500,
      items: 2,
      autoplay: false,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        768: {
          items: 2,
        },
      },
    });
  }

  if ($(".classeraproducts-carousel").length) {
    $(".classeraproducts-carousel").owlCarousel({
      loop: false,
      margin: 0,
      nav: false,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1024: {
          items: 4,
        },
      },
    });
  }

  if ($(".lspitems-carousel").length) {
    $(".lspitems-carousel").owlCarousel({
      loop: false,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 4,
        },
        768: {
          items: 4,
        },
        1024: {
          items: 4,
        },
      },
    });
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }
})(window.jQuery);


$(document).ready(function() {
  $('.nav-item').on('click', function() {
    // تبديل (toggle) الكلاس 'active'
    $(this).toggleClass('active');
  });
});