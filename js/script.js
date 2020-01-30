$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true
  });

  let scroll = new SmoothScroll('a[href*="#section-"]');

  $(window).scroll(function () {
    /* affix after scrolling 100px */
    if ($(document).scrollTop() > 100) {
      $('.navbar').addClass('on-scroll');
    } else {
      $('.navbar').removeClass('on-scroll');
    }
  });

  $('.product-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});