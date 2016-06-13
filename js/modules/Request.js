var Request = (function () {
    var call = function () {
        before();
        $.ajax({
            url: config.requestUrl,
            cache: false
        })
            .always(always)
            .done(done)
            .fail(fail);
    };

    var before = function () {
        $('#articles-contanier').html('<div class="loader-inner ball-pulse"></div>');
        $('.loader-inner').loaders();
    };

    var done = function (data, textStatus, jqXHR) {
        try {

            data.forEach(function (article) {
                myArticle = new Article(article);
                ArticlesCollector.setArticle(myArticle);
            }, this);
            ArticlesCollector.renderArticles('#articles-contanier');
            ArticlesUI.setShortClick();
        } catch (err) {
            console.error(err);
        }
    };

    var fail = function (jqXHR, textStatus, errorThrown) {
    };

    var always = function () {
        $('#articles-contanier').html("");
    };

    return {
        before: before,
        call: call
    };

})();