// トピックスコンテンツロード
$(function(){
    // ループで取得
    for(var i=1; i<30; i++){
        var topic_num = ('00' + i).slice(-2);
        $('#topic-' + topic_num).load('./contents/topics/topics_' + topic_num + '.html');
    }
})


//Page Topボタン

$(function(){
    var topBtn=$('#page-top-button');
    topBtn.hide();

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
            scrollTop: 0},500);
            return false;
    });
});