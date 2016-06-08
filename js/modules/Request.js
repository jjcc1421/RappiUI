var Request = (function () {
    var call = function () {
        $.ajax({
            url: "C:/PROYECTOS/otros/rappi/testUI/project/requests/news_mock.json",
            cache: false
        }).always(function () {

        }).done(function (data, textStatus, jqXHR) {

        }).fail(function (jqXHR, textStatus, errorThrown) {

        });
    };

    var before = function () {
    };

    var done = function (data, textStatus, jqXHR) {
    };

    var fail = function (jqXHR, textStatus, errorThrown) {
    };

    var always = function () {
    };

    return {
        call: call
    };

})();