$(function(){
    /**
     * 卡片切换
     */
    $('.selector').click(function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
        var id = "#" + $(this).attr('id') + "-message";
        $('.panel').not(id).hide(200);
        $('.panel').filter(id).show(500);
    });

    /**
     * 删除消息
     */
    $('*').on("click",".fa-times-circle",function(){
        var card = $(this).parent().parent();
        var id = "#"+$(card).attr('id');
        $(id).remove();
    })
})