$(document).ready(function(){
    $(".submenu-place, .menu-place").mouseenter(function(){
        $('.submenu-place').removeClass('hidden-submenu-place');
        $('.pointer-menu').removeClass('hidden-arrow');
        $('.menu-place a').addClass('blue-menu');
        $('.submenu').css("margin-top", "-17px");
    });
    $(".submenu-place, .menu-place").mouseleave(function(){
        $('.submenu-place').addClass('hidden-submenu-place');
        $('.pointer-menu').addClass('hidden-arrow');
        $('.menu-place a').removeClass('blue-menu');
        $('.submenu').css("margin-top", "0px");
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