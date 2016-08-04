$(document).ready(function(){
    $('.dropdown-base').click(function() {
        if (!$(this).parent().hasClass('open')) {
            var dropdown_base_width = $(this).width();
            var max_li_width = 0;
            var li_array = $(this).next().find("li");
            $(this).next().find("li").each(function() {
                //var previousCss  = $(this).attr("style");
                //$(this)
                //    .css({
                //        position:   'absolute',
                //        visibility: 'hidden',
                //        display:    'block'
                //    });
                $(this).parent().parent().addClass('open');
                var li_width = $(this).width();
                $(this).parent().parent().removeClass('open');
                //$(this).attr("style", previousCss ? previousCss : "");

                console.log(li_width);
                if (li_width > max_li_width) {
                    max_li_width  = li_width;
                }
            });
            //for (var i = 0; i < li_array.length; i++) {
            //    console.log(li_array[i]);
            //    var li_width = $(li_array[i]).width();
            //    console.log(li_width);
            //    if (li_width > max_li_width) {
            //        max_li_width  = li_width;
            //    }
            //}
            console.log(max_li_width, dropdown_base_width);
            if (max_li_width > dropdown_base_width) {
                $('.dropdown-menu-selected').width(max_li_width);
            } else {
                $('.dropdown-menu-selected').width(dropdown_base_width);
            }
        }

    });
    //$( window ).resize(function() {
    //    $(".dropdown-base").each(function() {
    //        var dropdown_base_width = $(this).width();
    //        var max_li_width = 0;
    //        var li_array = $(this).next().find("li");
    //        $(this).next().find("li").each(function() {
    //            console.log($(this));
    //            var li_width = $(this).width();
    //            console.log(li_width);
    //            if (li_width > max_li_width) {
    //                max_li_width  = li_width;
    //            }
    //        });
    //        //for (var i = 0; i < li_array.length; i++) {
    //        //    console.log(li_array[i]);
    //        //    var li_width = $(li_array[i]).width();
    //        //    console.log(li_width);
    //        //    if (li_width > max_li_width) {
    //        //        max_li_width  = li_width;
    //        //    }
    //        //}
    //        console.log(max_li_width, dropdown_base_width);
    //        if (max_li_width > dropdown_base_width) {
    //            $('.dropdown-menu-selected').width(max_li_width);
    //        } else {
    //            $('.dropdown-menu-selected').width(dropdown_base_width);
    //        }
    //    });
    //});
});
