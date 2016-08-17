var main;
(function (main) {
    var classes = (function () {
        function classes() {
        }
        classes.prototype.a1 = function () {
            var Greeter = (function () {
                function Greeter(message) {
                    this.greeting = message;
                }
                Greeter.prototype.greet = function () {
                    return "Hello, " + this.greeting;
                };
                return Greeter;
            }());
            var greeter = new Greeter("world");
            document.getElementById("a1")
                .addEventListener("click", function () {
                this.innerText =
                    "" + greeter.greet();
            });
            return this;
        };
        classes.prototype.start = function () {
            this.a1();
        };
        return classes;
    }());
    main.classes = classes;
})(main || (main = {}));
/* program */
(new main.classes()).start();
