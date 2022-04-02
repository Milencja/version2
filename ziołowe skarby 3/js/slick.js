$('.carousel-products').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slideToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 490,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2

        }
      },
      {
        breakpoint: 768,
          settings: {
            centerMode: true,
              centerPadding: '50px',
              slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
          settings: {
            centerMode: true,
              centerPadding: '50px',
              slidesToShow: 4
        }
      }
    ]
  });