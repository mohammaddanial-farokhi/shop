  $('.custom-slider1').slick({

    rtl: true,
    autoplay: true,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots:true,
    focusOnSelect:true,
    accessibility: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
      {  
          breakpoint: 1000,
          settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }},
      {
        
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.custom-slider2').slick({

    rtl: true,
    autoplay: true,
    arrows: true,
    prevArrow: $('.prev1'),
    nextArrow: $('.next1'),
    dots:true,
    focusOnSelect:true,
    accessibility: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
      {  
          breakpoint: 1000,
          settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }},
      {
        
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

