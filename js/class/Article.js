function Article(id, tittle, content, image) {
    this.id = id;
    this.title = tittle;
    this.content = content;
    this.image = image;
}

Article.prototype.shortHTML = function () {
    var content = this.content;
    var article =
        '<article class="well">' +
        '<header>' +
        '<h2>' + this.title + '</h2>' +
        '</header>' +
        '<p>"' + content.substring(0, 20) + '..."</p>' +
        '</article>';
    return null;
};