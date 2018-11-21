$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    
    /* 个人主页导航切换 */
    $('[data-target="focus-on"]').click(function(){
        $("#my-sorts a").removeClass('active-custom');
        $('[data-target="focus-on"]').addClass("active-custom");
        $('.my-column').addClass('column-hiden');
        $('#focus-on-column').removeClass('column-hiden')
    })
    $('[data-target="3d"]').click(function(){
        $("#my-sorts a").removeClass('active-custom');
        $('[data-target="3d"]').addClass("active-custom");
        $('.my-column').addClass('column-hiden');
        $('#3d-column').removeClass('column-hiden')
    })
    $('[data-target="video"]').click(function(){
        $("#my-sorts a").removeClass('active-custom');
        $('[data-target="video"]').addClass("active-custom");
        $('.my-column').addClass('column-hiden');
        $('#video-column').removeClass('column-hiden')
    })
    $('[data-target="picture"]').click(function(){
        $("#my-sorts a").removeClass('active-custom');
        $('[data-target="picture"]').addClass("active-custom");
        $('.my-column').addClass('column-hiden');
        $('#picture-column').removeClass('column-hiden')
    })
    $('[data-target="caricature"]').click(function(){
        $("#my-sorts a").removeClass('active-custom');
        $('[data-target="caricature"]').addClass("active-custom");
        $('.my-column').addClass('column-hiden');
        $('#caricature-column').removeClass('column-hiden')
    })
    $('[data-target="music"]').click(function(){
        $("#my-sorts a").removeClass('active-custom');
        $('[data-target="music"]').addClass("active-custom");
        $('.my-column').addClass('column-hiden');
        $('#music-column').removeClass('column-hiden')
    })
    $('[data-target="fiction"]').click(function(){
        $("#my-sorts a").removeClass('active-custom');
        $('[data-target="fiction"]').addClass("active-custom");
        $('.my-column').addClass('column-hiden');
        $('#fiction-column').removeClass('column-hiden')
    })
    // $('[data-target="favorite"]').click(function(){
    //     $("#my-sorts a").removeClass('active-custom');
    //     $('[data-target="favorite"]').addClass("active-custom");
    //     $('.my-column').addClass('column-hiden');
    //     $('#favorite-column').removeClass('column-hiden')
    // })
    // $('[data-target="history"]').click(function(){
    //     $("#my-sorts a").removeClass('active-custom');
    //     $('[data-target="history"]').addClass("active-custom");
    //     $('.my-column').addClass('column-hiden');
    //     $('#history-column').removeClass('column-hiden')
    // })
});

