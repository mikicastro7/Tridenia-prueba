$(window).scroll(function () {
    let height = $(window).scrollTop();
    if (height > 0) {
        $("nav").addClass("black-bg-nav");
    }
    if (height === 0) {
        $("nav").removeClass("black-bg-nav");
    }
});

$(".cart a").mouseenter(() => {
    $("div.navbar-icons .cart-content").show();
});

$(".cart a").mouseleave(() => {
    $("div.navbar-icons .cart-content").mouseenter(() => {
        $("div.navbar-icons .cart-content").show();
    })
    $("div.navbar-icons .cart-content").mouseleave(() => {
        $("div.navbar-icons .cart-content").hide();
    })
    $("div.navbar-icons .cart-content").hide();
})

$(".bars-button").click(() => {
    $(".movile-menu").show();
})

$(".close-button").click(() => {
    $(".movile-menu").addClass("animate__fadeOutLeft");
    setTimeout(() => {
        $(".movile-menu").removeClass("animate__fadeOutLeft");
        $(".movile-menu").hide();
    }, 400)
})

$(".active").click((e) => {
    if (!$(".movile-dropdown").is(":visible")) {
        e.preventDefault();
        $(".movile-dropdown").show();
    }
})

let getModernDesignData = (async () => {
    const response = await fetch("https://www.tridenia.com/maquetacio/list.php");
    const data = await response.json();
    data.items.forEach((item, i) => {
        const listElement = $(".list-modern-design").children()[i];
        $(listElement).find(".target-content span").html(item.title);
        $(listElement).find(".target-content p").html(item.text);
    });
})();