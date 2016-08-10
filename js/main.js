$(document).ready(function(){
    $(".submenu-place, .menu-place").mouseenter(function(){
        $('.submenu-place').removeClass('hidden-submenu-place');
        $('.pointer-menu').removeClass('hidden-arrow');
        $('.menu-place a').addClass('blue-menu');
        $('.submenu').css("margin-top", "-17px");
        $('.menu-place a span').css("border-bottom", "1px solid #0085b2");
    });
    $(".submenu-place, .menu-place").mouseleave(function(){
        $('.submenu-place').addClass('hidden-submenu-place');
        $('.pointer-menu').addClass('hidden-arrow');
        $('.menu-place a').removeClass('blue-menu');
        $('.submenu').css("margin-top", "0px");
        $('.menu-place a span').css("border-bottom", "1px solid #999999");
    });


    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".accordion-toggle-collapsed").removeClass("accordion-toggle-collapsed").addClass("accordion-toggle-expanded");
        $(this).parent().find(".panel-heading").addClass("qweqweqweqweqweqwe");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".accordion-toggle-expanded").removeClass("accordion-toggle-expanded").addClass("accordion-toggle-collapsed");
        $(this).parent().find(".panel-heading").removeClass("qweqweqweqweqweqwe");
    });



    $(".burger-menu").click(function() {
        $(".menu").slideToggle("slow");
        //$(".burger_menu").hide();
        //$(".burger_menu_close").show();
    });
    //$(".burger_menu_close").click(function() {
    //    $(".nav_mobile").slideToggle("slow");
    //    $(".burger_menu").show();
    //    $(".burger_menu_close").hide();
    //});
});