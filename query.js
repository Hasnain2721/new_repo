$(document).ready(function () {
    $('#service').mouseenter(function () {
        // $('.drop_down').css('display' , 'inline-block');
        // $('.drop_down').css('display' , 'flex');
        $('.drop_down').addClass('active');
    })
    $('#service').mouseleave(function () {
        // $('.drop_down').css('display' , 'none');
        $('.drop_down').removeClass('active');
    })

    $('.drop_down').mouseenter(function () {
        // $('.drop_down').css('display' , 'inline-block');
        // $('.drop_down').css('display' , 'flex');
        $('.drop_down').addClass('active');
    })
    $('.drop_down').mouseleave(function () {
        // $('.drop_down').css('display' , 'none');
        $('.drop_down').removeClass('active');
    })
})

// ............<<<<< Burger Menu>>>>>>>>>>>>.......

$(document).ready(function () {
    // $('#burger_click').click(function () {
    //     $(this).css('display', 'none');
    //     $('.hamburger .closing_icon img').css('display', 'inline-block');
    //     $('.nav_hamburger').css('display', 'block');
        
    // });
    // $('#burger_active').click(function () {
    //     // $(this).css('display', 'none');
    //     $('.hamburger .closing_icon img').css('display', 'none');
    //     $('#burger_click').css('display', 'block');
    //     $('.nav_hamburger').css('display', 'none');

    // });
    $('#burger_click').click(function () {
        // $(this).css('display', 'none');
        // $('.hamburger .closing_icon img').css('display', 'inline-block');
        // $('.nav_hamburger').css('display', 'block');
        $('.nav_hamburger').slideToggle();

        $(this).toggleClass('active');
        
        if ($("#burger_click" ).hasClass( "active" )) {
            $(this).find('i').removeClass('fa-bars');
            $(this).find('i').addClass('fa-times');
        }else{
            $(this).find('i').removeClass('fa-times');
            $(this).find('i').addClass('fa-bars');
        }
    });
    
    



    // $('#menu_icon').click(function () {
    //     $('menu').toggleClass('active');

    //     $('menu_icon').innerHTML('active');
                
    // })
    
})



// <<<<<<<<<<<<<<<<<< ......... slider ......>>>>>>>>>>>>>>
$(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<span class=" slider_arrow">&#129128; </span>',
        nextArrow: '<span class=" slider_arrow">&#129130; </span>',
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            // {
            //     breakpoint: 630,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     }
            // }
        ]
    });
})
$(document).ready(function () {
    $('.counts').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
})

// <<<<...........................<<<<<<<<<<<<< Tab Sliders>>>>>>>>>>>........................................?>>


$(document).ready(function () {
    $('#mobile').click(function () {
        // $(this).css('display', 'block');
        $('.mobile_icons').css('display', 'block');
        $('.web_icons').css('display', 'none');

    })
    $('#web_development').click(function () {
        // $(this).css('display', 'none');
        $('.mobile_icons').css('display', 'none');
        $('.web_icons').css('display', 'block');

    })
})


// <<<<<<<<<<<<< Isotopes Filters>>>>>>>>>>>>>>>>>></Isotopes>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$(document).ready(function () {
var $grid = $('.latest-item');

$grid.isotope({
    itemSelector: '.items',
    layoutMode: 'fitRows',
    // filter: '.branding',

    // filter: filterValue
});

$('.tabs').on('click', 'a', function () {
    var filterValue = $(this).attr('data-filter');
    // console.log(filterValue);
    $grid.isotope({
        filter: filterValue
    });
});
})