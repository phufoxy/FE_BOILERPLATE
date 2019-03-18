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

$(document).ready(function () {
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

