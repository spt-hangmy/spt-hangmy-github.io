jQuery(function ($) {
    // Handle function Tabs
    $(".tablinks").on("click", function () {
        $(".tablinks").removeClass("active");
        $(this).addClass("active");
        var dataTab = $(this).attr("data-tab");
        $(".tabcontent").removeClass("active");
        $("#" + dataTab).addClass("active");
        return false;
    });
    // Handle function Menu mobile
    $(".menu-control").on("click", function () {
        if ($(this).hasClass('active')) {
            $('.header-categories').slideUp();
            $('body').removeClass('open-menu');
        } else {
            $('.header-categories').slideDown();
            $('body').addClass('open-menu');
        }
        $(this).toggleClass('active');
    });
});
