var ArticlesUI = (function () {

    var setShortClick = function () {
        $('.article-short').on('click', function () {
            if (!$(this).hasClass('article-opened')) {
                articleId = $(this).data('rappi-article');
                article = ArticlesCollector.getArticle(articleId);
                $('#quick-title').html("");
                $('#quick-title').append(article.quickTitle());
                $('#quick-title>*').addClass("animated fadeInRight");
                $(this).parent().append(article.fullHTML());
                $(this).parent().children('.article-full').addClass('animated zoomInDown');
                $(this).addClass('article-opened');
                $(this).removeClass('animated rubberBand');
                $(this).addClass('animated pulse');

            }
            else {
                $('#quick-title').html("");
                $(this).parent().children('.article-full').remove('animated zoomIn');
                $(this).parent().children('.article-full').addClass('animated bounceOutUp');
                $(this).parent().children('.article-full').remove();
                $(this).removeClass('article-opened');
                $(this).removeClass('animated pulse');
                $(this).addClass('animated rubberBand');

            }
        })
    }

    var setShowArticlesClick = function () {
        $('#articles-opener').on('click', function () {
            if (!$(this).hasClass('is-active')) {
                $(this).addClass('is-active');
                Request.call();
            }
            else {
                $('#quick-title').html("");
                $('#articles-contanier').html("");
                $(this).removeClass('is-active');
            }
        });
    }


    return {
        setShortClick: setShortClick,
        setShowArticlesClick: setShowArticlesClick
    };
})();