
$(document).ready(function () {
    $('.b-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false

    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var opacity = 0;
        if (scroll < 100) {
            opacity = scroll / 100;
            $("#b-page-header").css('background-color', 'rgba(75, 193, 210, ' + opacity + ')');
        } else {
            opacity = 1;
            $("#b-page-header").css('background-color', 'rgba(75, 193, 210, ' + opacity + ')')
        }
    })
});

