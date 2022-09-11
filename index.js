// document.querySelector('h1').innerHTML ='Hi ATiq'
// using jquery
// $("h1").text("Hi ATiq")

$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll :1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false,
        dots:false,
        pauseOnHover: false,
        responsive: [{
            breakpoint:768,
            setting:{
                slidesToShow: 4
            }
        },{
            breakpoint:520,
            setting:{
                slidesToShow:3,
            }
        }]
    });
});