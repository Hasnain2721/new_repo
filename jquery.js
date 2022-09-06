
$(document).ready(function(){
  $('.multiple-items1').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed:1000,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1
});
$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    // autoplay: true,
    speed: 300,
    autoplaySpeed:1000,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,

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
  });
});
$(document).ready(function(){
  $('.multiple-items2').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed:2000,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});



$(document).ready(function () {
  console.log("jquery working");
  $('.h_para').click(function (){
    $(".h_para,.content").css('color', 'black');
    $('.drop_down_bars').find('.nn ').css ('background-color','#fff');
    $('.arrow').css('transform', 'rotate(0deg)');
      $(this).find('.arrow').css('transform', 'rotate(180deg)');
      $('.content').slideUp();
      $(this).siblings('.content').slideDown();

  });
})
$(document).ready(function () {
            
  $('.counts').each(function () {
      var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
      $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
      },{
          duration: 2000,
          step: function (func) {
              $(this).text(parseFloat(func).toFixed(size));
          }
      });
  });
});

// $(document).ready(function () {
//   $('.counts').each(function () {
//       $(this).prop('Counter', 0).animate({
//           Counter: $(this).text()
//       }, {
//           duration: 1000,
//           easing: 'swing',
//           step: function (now) {
//               $(this).text(Math.ceil(now));
//           }
//       });
//   });
// })