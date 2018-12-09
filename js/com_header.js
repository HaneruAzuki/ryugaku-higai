var dist = 40;
$(function(){
    header_title=$('#header_title');
    header_menu=$("header");

    header_title.show();
    header_menu.removeClass("header-clapse");

    $(window).scroll(function(){
        if($(this).scrollTop() > dist){
            header_title.hide();
            header_menu.addClass("header-clapse");
        }else{
            header_title.show();
            header_menu.removeClass("header-clapse");
        }
    });
});
