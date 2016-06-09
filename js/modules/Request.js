var Request = (function () {
    var call = function () {
        before();
        $.ajax({
            url: "/requests/news_mock.json",
            cache: false
        })
            .always(always)
            .done(done)
            .fail(fail);
    };

    var before = function () {
    };

    var done = function (data, textStatus, jqXHR) {
        array.forEach(function (article) {

        }, this);
    };

    var fail = function (jqXHR, textStatus, errorThrown) {
    };

    var always = function () {
    };

    return {
        call: call
    };

})();