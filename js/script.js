$(document).ready(function(){

$('#menu').click(function() {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
});

$(window).on('scroll load',function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
    if ($(window).scrollTop() > 0) {
       $('.top').show();
    }else{ $('.top').hide();}
});


$('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
    );
});


$(document).ready(function() {
    var footer = $("#site-footer");

    $(window).on("scroll", function() {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        // Jarak dari puncak halaman hingga dasar halaman saat ini
        var scrollDistance = documentHeight - (scrollPos + windowHeight);

        // Menunjukkan atau menyembunyikan footer pada halaman terakhir
        if (scrollDistance < 10) {
            footer.show();
        } else {
            footer.hide();
        }
    });
});


});