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
