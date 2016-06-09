var ArticlesCollector = (function () {
    var articles = Map();
    var setData = function (article) {
        if (article instanceof Article) {
            articles = articles.set(article.id, article);
        }
    }
    var getArticle = function (id) {
        return articles.get(id, null);
    }
})();