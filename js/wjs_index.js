$(function () {
    // 响应式轮播图
    $(window).on('resize', function () {
        var screen = $(window).width();
        // pc端
        if (screen >= 768) {
            $('.wjs_banner .item').each(function (index) {
                var src = $(this).attr('pcImg-src');
                var info = '<a href="javascript:;" class="pcImg hidden-xs" style="background-image: url(' + src + ');"></a>';
                $(this).html(info);
            })
        } else { //移动端
            $('.wjs_banner .item').each(function (index) {
                var src = $(this).attr('mobileImg-src');
                var info = ' <a href="javascript:;" class="mobileImg hidden-md hidden-sm hidden-lg"><img src="' + src + '"></a>';
                $(this).html(info);
            })
        }
    }).trigger('resize');

    //移动端滑动
    var startX, endX;
    var carousel_inner = $('.carousel-inner')[0];
    var carousel = $('.carousel');
    carousel_inner.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].clientX;
    })
    carousel_inner.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;
        if (endX - startX > 0) {
            carousel.carousel('prev');
        } else {
            carousel.carousel('next');
        }
    })

    
    $('[data-toggle="tooltip"]').tooltip();

    var ulWidth = 0;
    $('.nav-tabs li').each(function (index, element) {
        ulWidth += $(this).innerWidth();
    });
    $('.nav-tabs').width(ulWidth);

    var myScroll = new IScroll('#wrapper', {
        scrollX: true
    });

    $('.wjs_news .nav-tabs').attr('style','');
})