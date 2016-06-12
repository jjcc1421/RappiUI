function Article(id, tittle, content, image) {
    this.id = id;
    this.title = tittle;
    this.content = content;
    this.image = image;
}
/**
 * @Return string - Returns short html view element ArticleS 
 */
Article.prototype.shortHTML = function () {
    var content = this.content;
    var article =
        '<div class="col-md-12 animated bounceInLeft article artilce-short close" data-rappi-article=' + this.id + '>' +
        '<article class="well">' +
        '<header>' +
        '<h2>' + this.title + '</h2>' +
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