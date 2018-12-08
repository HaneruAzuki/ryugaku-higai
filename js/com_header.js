$(function(){
    var header_title = $('#header-title');
    var dist = 40;
    
    header_title.show();
    
    $(window).scroll(function(){
        if($(this).scrollTop() > dist){
            header_title.hide();
        }else{
            header_title.show();
        }
    });
});