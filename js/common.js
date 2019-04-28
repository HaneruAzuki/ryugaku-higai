/* ヘッダーのマージン高さ設定 */
$(window).on('load resize scroll', function(){
  var margin_height=$('header').outerHeight(true);
  $('.header-margin').css('height', margin_height);
  $('.anchor').css({'padding-top': margin_height, 'margin-top': -margin_height});
});

var window_smp = 600;
var dist = 40;

$(function(){
    header_menu=$('[class$="header-menu"]');
    header_sub_title=$('#sub-title');

    $(window).scroll(function(){
        var windowWidth = $(window).width();
        if($(this).scrollTop() > dist){
            header_menu.addClass("menu-opaque");
            header_sub_title.hide();
        }else{
            header_menu.removeClass("menu-opaque");
            if(window_smp <= windowWidth){
                header_sub_title.show();
            }
        }
    });
});

//PageTopボタン
$(function(){
    var topBtn=$('#page-top-button');

    if($(this).scrollTop()>160){
        topBtn.show();
    }else{
        topBtn.hide();
    }

    $(window).scroll(function(){
        if($(this).scrollTop()>160){
            topBtn.fadeIn();
        }else{
            topBtn.fadeOut();
        }
    });

    // ◇ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
        $('body,html').animate({
            scrollTop: 0});
            return false;
    });
});

/* フッター読み込み */
$(function(){
    $('#com_footer').load('./contents/footer.html');
});
