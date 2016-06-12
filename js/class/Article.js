function Article(article) {
    this.id = article.id;
    this.title = article.title;
    this.content = article.content;
    this.image = article.image;
}

/**
 * @Return string - Returns short html view element ArticleS 
 */
Article.prototype.shortHTML = function () {
    var content = this.content;
    var article =
        //'<div class="col-md-6 animated bounceInLeft" >' +
        '<div class="col-md-12 animated bounceInLeft" >' +
        '<div class="well article-short" data-rappi-article=' + this.id + '>' +
        '<header>' +
        '<img src="' + this.image + '" class="img-circle" alt="Smiley face" width="50px" style="float:left;"> ' +
        '<h3>' + this.title + '</h3>' +
        '</header>' +
        '</div>' +
        '</div>';
    return article;
};

/**
 * @Return string - Return full HTML view element of article
 */
Article.prototype.fullHTML = function () {
    var myArticle =
        '<div class="well article-full" data-rappi-article=' + this.id + '>' +
        '<div class="row">' +
        '<div class="col-xs-4">' +
        '<img src="' + this.image + '" alt="Smiley face" width="100%">' +
        '</div>' +
        '<div class="col-xs-8">' +
        '<h3>' + this.title + '</h3>' +
        '<p>' + this.content + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';
    return myArticle;
};