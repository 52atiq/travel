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


    // filter destination 
    $(document).ready(function() {
        $('list').click(function(){
            const value = $(this).attr('data-filter');
            if( value =='all'){
                $('.itemBox').show('1000');
            }
            else{
                $('itemBox').not('.'+value).hide('1000');
                $('itemBox').filter('.'+value).show('1000');
            }
        })
    })


    // new filter 

    $(document).ready(function(){

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
        });
        
        if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
    
    });


