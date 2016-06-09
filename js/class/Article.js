function Article(id, tittle, content, image) {
    this.id = id;
    this.title = tittle;
    this.content = content;
    this.image = image;
}

Article.prototype.shortHTML = function () {
    var content = this.content;
    var article =
        '<div class="col-md-12 animated bounceInLeft" data-rappi-article=' + this.id + '>' +
        '<article class="well">' +
        '<header>' +
        '<h2>' + this.title + '</h2>' +
        '</header>' +
        '<p>"' + content.substring(0, 20) + '..."</p>' +
        '</article>' +
        '</div>';
    return article;
};

Article.prototype.fullHTML = function () {
    var article =
        '<div class="well animated bounceInDown">' +
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