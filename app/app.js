var app;
(function (app) {
    var main = (function () {
        function main() {
            this.app = "test";
        }
        return main;
    }());
    app.main = main;
})(app || (app = {}));
