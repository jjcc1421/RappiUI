var ArticlesCollector = (function () {
    var articles = new Map();
    /**
     * set article into articles collector
     * @param Article - article to save
     */
    var setArticle = function (article) {
        //Check if article is an Article to save
        if (article instanceof Article)
            articles = articles.set(article.id, article);
        else
            throw "article must be Article type";
    }
    /**
     * article by id
     * @return Article|null - return article
     */
    var getArticle = function (id) {
        return articles.get(id, null);
    }

    var renderArticles = function (container) {
        articles.forEach(function (article, key) {
            $(container).append(article.shortHTML());
        })
    }

    return {
        setArticle: setArticle,
        getArticle: getArticle,
        renderArticles: renderArticles
    };
})();