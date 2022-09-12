// document.querySelector('h1').innerHTML ='Hi ATiq'
// using jquery
// $("h1").text("Hi ATiq")

// $(document).ready(function() {
//     $('.customer-logos').slick({
//         slidesToShow: 3,
//         // slidesToScroll :1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         // arrows:true,
//         dots:false,
//         pauseOnHover: false,
//         easing:'linear',
//         variableWidth:true,
//         pauseOnHover:true,

//       swipeToSlide:true,
//         responsive: [
//             {
//             breakpoint:768,
//             setting:{
//                 slidesToShow: 4,
//             }
//         },{
//             breakpoint:520,
//             setting:{
//                 slidesToShow:2,
//                 slidesToScroll :2,
//             }
//         },
//         {
//             breakpoint:364,
//             setting:{
//                 slidesToShow:1,
//             }
//         },
//     ]
//     });
// });



$('#gallery').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
                    {
                    breakpoint:768,
                    setting:{
                        slidesToShow: 4,
                    }
                },{
                    breakpoint:520,
                    setting:{
                        slidesToShow:7,
                        slidesToScroll :2,
                    }
                },
                {
                    breakpoint:364,
                    setting:{
                        slidesToShow:1,
                    }
                },
            ]
  });

  $(document).ready(function() {
    $('.toggle').click(function(){
        $('ul').toggleClass('active');
    })  })