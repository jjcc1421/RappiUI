var ArticlesUI = (function () {

    var setShortClick = function () {
        $('.article-short').on('click', function () {
            if (!$(this).hasClass('article-opened')) {
                articleId = $(this).data('rappi-article');
                article = ArticlesCollector.getArticle(articleId);
                $(this).parent().append(article.fullHTML());
                $(this).parent().children('.article-full').addClass('animated zoomInDown');
                $(this).addClass('article-opened');
                //$(this).parent().removeClass('col-md-6');
                //$(this).parent().addClass('col-md-12');
                $(this).removeClass('animated rubberBand');
                $(this).addClass('animated pulse');

            }
            else {
                $(this).parent().children('.article-full').remove('animated zoomIn');
                $(this).parent().children('.article-full').addClass('animated bounceOutUp');
                $(this).parent().children('.article-full').remove();
                //$(this).parent().removeClass('col-md-12');
                //$(this).parent().addClass('col-md-6');
                $(this).removeClass('article-opened');
                $(this).removeClass('animated pulse');
                $(this).addClass('animated rubberBand');

            }
        })
    }
    
    var setShowClick = function(){
        $('#articles-contanier')
        //TODO load request
    }
    

    return {
        setShortClick: setShortClick
    };
})();