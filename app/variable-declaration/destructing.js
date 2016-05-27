var main;
(function (main) {
    var destructing = (function () {
        function destructing() {
        }
        destructing.prototype.a1 = function () {
            function f() {
                var input = [1, 2];
                var first = input[0], second = input[1];
                document.getElementById("a1")
                    .innerText =
                    "first = " + first + "\n                        second = " + second;
            }
            document.getElementById("a1")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a2 = function () {
            function f() {
                var input = [1, 2];
                var first = input[0], second = input[1];
                _a = [second, first], first = _a[0], second = _a[1];
                document.getElementById("a2")
                    .innerText =
                    "first = " + first + "\n                        second = " + second;
                var _a;
            }
            document.getElementById("a2")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a3 = function () {
            function f() {
                var input = [1, 2];
                function f(_a) {
                    var first = _a[0], second = _a[1];
                    document.getElementById("a3")
                        .innerText =
                        "first = " + first + "\n                            second = " + second;
                }
                f(input);
            }
            document.getElementById("a3")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a4 = function () {
            function f() {
                var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
                document.getElementById("a4")
                    .innerText =
                    "first = " + first + "\n                            rest = " + rest;
            }
            document.getElementById("a4")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a5 = function () {
            function f() {
                var first = [1, 2, 3, 4][0];
                var _a = [1, 2, 3, 4], second = _a[1], fourth = _a[3];
                document.getElementById("a5")
                    .innerText =
                    "first = " + first + "\n                            second = " + second + "\n                            fourth = " + fourth;
            }
            document.getElementById("a5")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a6 = function () {
            function f() {
                var o = {
                    a: "foo",
                    b: 12,
                    c: "bar"
                };
                var a = o.a, b = o.b;
                document.getElementById("a6")
                    .innerText =
                    "a = " + a + "\n                            b = " + b;
            }
            document.getElementById("a6")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a7 = function () {
            function f() {
                var _a = { a: "baz", b: 101 }, a = _a.a, b = _a.b;
                document.getElementById("a7")
                    .innerText =
                    "a = " + a + "\n                            b = " + b;
            }
            document.getElementById("a7")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a8 = function () {
            function f() {
                var o = {
                    a: "foo",
                    b: 12,
                    c: "bar"
                };
                var newName1 = o.a, newName2 = o.b;
                document.getElementById("a8")
                    .innerText =
                    "a = *compile error\n                            newName1 = " + newName1 + "\n                            newName2 = " + newName2;
            }
            document.getElementById("a8")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a9 = function () {
            function f() {
                var o = {
                    a: "foo",
                    b: 12,
                    c: "bar"
                };
                var newName1 = o.a, newName2 = o.b;
                document.getElementById("a9")
                    .innerText =
                    "newName1 = " + newName1 + "\n                            newName2 = " + newName2;
            }
            document.getElementById("a9")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a10 = function () {
            function f(obj) {
                var a = obj.a, _a = obj.b, b = _a === void 0 ? 1001 : _a;
                document.getElementById("a10")
                    .innerText =
                    "a = " + a + "\n                        b = " + b;
            }
            document.getElementById("a10")
                .addEventListener("click", function () {
                f({ a: 'abc' });
            });
            return this;
        };
        destructing.prototype.a11 = function () {
            function f(_a) {
                var a = _a.a, b = _a.b;
                document.getElementById("a11")
                    .innerText =
                    "a = " + a + "\n                            b = " + b;
            }
            document.getElementById("a11")
                .addEventListener("click", function () {
                f({ a: 'abc' });
            });
            return this;
        };
        destructing.prototype.a12 = function () {
            function f(_a) {
                var _b = _a === void 0 ? { a: "z", b: 99 } : _a, a = _b.a, b = _b.b;
                document.getElementById("a12")
                    .innerText =
                    "a = " + a + "\n                            b = " + b;
            }
            document.getElementById("a12")
                .addEventListener("click", function () {
                f();
            });
            return this;
        };
        destructing.prototype.a13 = function () {
            function f(_a) {
                var _b = _a === void 0 ? { a: "z" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 88 : _c;
                document.getElementById("a13")
                    .innerHTML +=
                    "a = " + a + "<br/>\n                            b = " + b + "<br/>";
            }
            document.getElementById("a13")
                .addEventListener("click", function () {
                document.getElementById("a13")
                    .innerHTML = 'f({a:"yes"})<br/>';
                f({ a: "yes" });
                document.getElementById("a13")
                    .innerHTML += 'f()<br/>';
                f();
                document.getElementById("a13")
                    .innerHTML += 'f({}) *compile error';
            });
            return this;
        };
        destructing.prototype.start = function () {
            this.a1().a2().a3().a4().a5()
                .a6().a7().a8().a9().a10()
                .a11().a12().a13();
        };
        return destructing;
    }());
    main.destructing = destructing;
})(main || (main = {}));
/* program */
(new main.destructing()).start();
