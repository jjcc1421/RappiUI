var ArticlesCollector = (function () {
    var articles = Map();
    /**
     * set data into articles collector
     * @param Article - article to save
     */
    var setData = function (article) {
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

    return {
        setData: setData,
        getData: getData
    };
})();