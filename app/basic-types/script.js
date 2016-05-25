var main;
(function (main) {
    var app = (function () {
        function app() {
            this.bool = false;
            this.decimal = 6;
            this.hex = 0xf00d;
            this.binary = 10;
            this.octal = 484;
            this.string = "blue";
            this.sentence = "the color is " + this.string;
        }
        app.prototype.display = function () {
            document.getElementById("boolean").innerText = "" + this.bool;
            document.getElementById("decimal").innerText = "" + this.decimal;
            document.getElementById("hex").innerText = "" + this.hex;
            document.getElementById("binary").innerText = "" + this.binary;
            document.getElementById("octal").innerText = "" + this.octal;
            document.getElementById("string").innerText = "" + this.string;
            document.getElementById("sentence").innerText = "" + this.sentence;
        };
        return app;
    }());
    main.app = app;
})(main || (main = {}));
/* program */
var program = new main.app();
program.display();
