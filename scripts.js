$(window).scroll(function () {
    let height = $(window).scrollTop();
    if (height > 0) {
        $("nav").addClass("black-bg-nav")
    }
    if (height === 0) {
        $("nav").removeClass("black-bg-nav")
    }
});