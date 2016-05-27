var main;
(function (main) {
    var interfaces = (function () {
        function interfaces() {
        }
        interfaces.prototype.a1 = function () {
            function createSquare(config) {
                var newSquare = { color: "white", area: 100 };
                if (config.color) {
                    newSquare.color = config.color;
                }
                if (config.width) {
                    newSquare.area = config.width * config.width;
                }
                return newSquare;
            }
            var mySquare = createSquare({ color: "black" });
            document.getElementById("a1")
                .addEventListener("click", function () {
                this.innerText =
                    "mySquare.color " + mySquare.color + "\n                        mySquare.area " + mySquare.area;
            });
            return this;
        };
        interfaces.prototype.a2 = function () {
            return this;
        };
        interfaces.prototype.start = function () {
            this.a1().a2();
        };
        return interfaces;
    }());
    main.interfaces = interfaces;
})(main || (main = {}));
/* program */
(new main.interfaces()).start();
