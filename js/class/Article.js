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
        '<div class="col-md-6 animated bounceInLeft artilce-short" data-rappi-article=' + this.id + '>' +
        '<article class="well">' +
        '<header>' +
        '<img src="http://lorempixel.com/300/300" class="img-circle" alt="Smiley face" width="50px" style="float:left"> ' +
        '<h3>' + this.title + '</h3>' +
        '</header>' +
        '</article>' +
        '</div>';
    return article;
};

/**
 * @Return string - Return full HTML view element of article
 */
Article.prototype.fullHTML = function () {
    var article =
        '<div class="well animated bounceInDown article article-full" data-rappi-article=' + this.id + '>' +
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
    return article;
};