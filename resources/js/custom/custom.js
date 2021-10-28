
// document.getElementsByClassName('checkup')[0].addEventListener('click', function(){
//     document.getElementsByClassName('hide')[0].style.display = 'none'
// });
// $('.checkup').on('click', function(){
//     $('.hide').hide();
// })

// Availability Modal

// Only works when certain input is being typed 
// $('.checkup').on('click', function(){
//     if ($('.search').val() == 'chair') {
//     $('.modal').fadeIn();
//     }
// });

$('.checkup').on('click', function () {
    $('.modal').fadeIn();
});

$('.back').on('click', function () {
    $('.modal').fadeOut();
});



// Nav slide
$('.nav-trigger').click(function () {
    $('.nav-slide').slideToggle();
});
