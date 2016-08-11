jQuery(document).ready(function($){
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


    $('.collapse').on('show.bs.collapse', function(){
        $(this).parent().find(".accordion-toggle-collapsed").removeClass("accordion-toggle-collapsed").addClass("accordion-toggle-expanded");
        $(this).parent().find(".panel-heading").addClass("grey-color");
    }).on('hide.bs.collapse', function(){
        $(this).parent().find(".accordion-toggle-expanded").removeClass("accordion-toggle-expanded").addClass("accordion-toggle-collapsed");
        $(this).parent().find(".panel-heading").removeClass("grey-color");
    });

    $('.checkbox input').change(function() {
        showFindArrow(this);
    });

    function showFindArrow(elem) {
        $( ".find-arrow" ).remove();
        if ($('.checkbox input:checked').length) {
            $(elem).parent().after( '<div class="find-arrow">\
										<span class="quantity-found">Найдено: 295</span>\
										<span class="link-show-results">\
											<a>Показать</a>\
										</span>\
									</div>' );
        }

    }


    $(".burger-menu").click(function() {
        $(".menu").slideToggle("slow");
    });


    $("#filter_button").click(function() {
        $(".filter-box .panel-group").slideToggle("fast");
        $(".sorting-wrapper").hide();
    });

    $("#sorting_button").click(function() {
        $(".sorting-wrapper").slideToggle("fast");
        $(".filter-box .panel-group").hide();
    });

    $(".sticky").sticky({topSpacing:0});

    $(".thumb").click(function()
    {
        var image = $(this).find("img").data("image");
        $(".main-image").attr("src", image);
    });

});
