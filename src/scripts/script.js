<<<<<<< HEAD
wow = new WOW(
    {
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();
=======
var a = 0;
$(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.b-counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    },
                    complete: function () {
                        $this.text((this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }

                });
        });
        a = 1;
    }
})
>>>>>>> d967929fbc17429f9c2ecb5050ed1c37cd014e36

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

