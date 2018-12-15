var dist = 40;
$(function(){
    header_menu=$('.header-menu');
    header_sub_title=$('#sub-title');

    header_menu.removeClass("menu-opaque");
    header_sub_title.show();

    $(window).scroll(function(){
        if($(this).scrollTop() > dist){
            header_menu.addClass("menu-opaque");
            header_sub_title.hide();
        }else{
            header_menu.removeClass("menu-opaque");
            header_sub_title.show();
        }
    });
});
