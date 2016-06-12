var Request = (function () {
    var call = function () {
        before();
        $.ajax({
            url: "requests/news_mock.json",
            cache: false
        })
            .always(always)
            .done(done)
            .fail(fail);
    };

    var before = function () {
    };

    var done = function (data, textStatus, jqXHR) {
        try {
            data.forEach(function (article) {
                myArticle=new Article(article);
                ArticlesCollector.setArticle(myArticle);
            }, this);
            ArticlesCollector.renderArticles('#articles-contanier');
        } catch (err) {
            console.error(err);
        }
    };

    var fail = function (jqXHR, textStatus, errorThrown) {
    };

    var always = function () {
    };

    return {
        call: call
    };

})();