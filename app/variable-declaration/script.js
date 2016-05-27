var main;
(function (main) {
    var variableDeclarations = (function () {
        function variableDeclarations() {
        }
        variableDeclarations.prototype.a1 = function () {
            function f() {
                var a = 10;
                return function g() {
                    var b = a + 1;
                    return b;
                };
            }
            var g = f();
            document.getElementById("a1")
                .addEventListener("click", function () {
                this.innerText = g().toString();
            });
        };
        variableDeclarations.prototype.a2 = function () {
            function f() {
                var a = 1;
                a = 2;
                var b = g();
                a = 3;
                return b;
                function g() {
                    return a;
                }
            }
            document.getElementById("a2")
                .addEventListener("click", function () {
                this.innerText = f().toString();
            });
        };
        variableDeclarations.prototype.a3 = function () {
            function f(shouldInitialize) {
                if (shouldInitialize) {
                    var x = 10;
                }
                return x;
            }
            document.getElementById("a3")
                .addEventListener("click", function () {
                this.innerText =
                    "f(true) = " + f(true) + "\n                        f(false); = " + f(false);
            });
        };
        variableDeclarations.prototype.a4 = function () {
            function sumMatrix(matrix) {
                var sum = 0;
                for (var i = 0; i < matrix.length; i++) {
                    var currentRow = matrix[i];
                    for (var i = 0; i < currentRow.length; i++) {
                        sum += currentRow[i];
                    }
                }
                return sum;
            }
            document.getElementById("a4")
                .addEventListener("click", function () {
                this.innerText = sumMatrix([[1, 2], [1, 2]]).toString();
            });
        };
        variableDeclarations.prototype.a5 = function () {
            function f() {
                for (var i = 0; i < 10; i++) {
                    setTimeout(function () {
                        var node = document.createElement("span");
                        node.innerText = i.toString();
                        document.getElementById("a5")
                            .appendChild(node);
                    }, 100 * i);
                }
            }
            document.getElementById("a5")
                .addEventListener("click", function () {
                this.innerText = "";
                f();
            });
        };
        variableDeclarations.prototype.a6 = function () {
            function f() {
                for (var i = 0; i < 10; i++) {
                    // capture the current state of 'i'
                    // by invoking a function with its current value
                    (function (i) {
                        setTimeout(function () {
                            var node = document.createElement("span");
                            node.innerText = i.toString();
                            document.getElementById("a6")
                                .appendChild(node);
                        }, 100 * i);
                    })(i);
                }
            }
            document.getElementById("a6")
                .addEventListener("click", function () {
                this.innerText = "";
                f();
            });
        };
        variableDeclarations.prototype.a7 = function () {
            function sumMatrix(matrix) {
                var sum = 0;
                for (var i = 0; i < matrix.length; i++) {
                    var currentRow = matrix[i];
                    for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
                        sum += currentRow[i_1];
                    }
                }
                return sum;
            }
            document.getElementById("a7")
                .addEventListener("click", function () {
                this.innerText = sumMatrix([[1, 2], [1, 2]]).toString();
            });
        };
        variableDeclarations.prototype.a8 = function () {
            function f() {
                var _loop_1 = function(i) {
                    setTimeout(function () {
                        var node = document.createElement("span");
                        node.innerText = i.toString();
                        document.getElementById("a8")
                            .appendChild(node);
                    }, 100 * i);
                };
                for (var i = 0; i < 10; i++) {
                    _loop_1(i);
                }
            }
            document.getElementById("a8")
                .addEventListener("click", function () {
                this.innerText = "";
                f();
            });
        };
        variableDeclarations.prototype.a9 = function () {
            function f() {
                var numLivesForCat = 9;
                var kitty = {
                    name: "Aurora",
                    numLives: numLivesForCat,
                };
                kitty = {
                    name: "Danielle",
                    numLives: numLivesForCat
                };
                kitty.name = "Rory";
                kitty.name = "Kitty";
                kitty.name = "Cat";
                kitty.numLives--;
            }
            document.getElementById("a9")
                .addEventListener("click", function () {
                this.innerHTML =
                    "<div>ERROR!</div> \n                        <div>kitty = {</div>\n                            <div class=\"tab\">name: \"Danielle\",</div>\n                            <div class=\"tab\">numLives: numLivesForCat</div>\n                        <div>};</div><br>\n                        <div>No ERROR!</div>\n                        <div>kitty.name = \"Rory\";</div>\n                        <div>kitty.name = \"Kitty\";</div>\n                        <div>kitty.name = \"Cat\";</div>\n                        <div>kitty.numLives--;</div>";
            });
        };
        variableDeclarations.prototype.start = function () {
            this.a1();
            this.a2();
            this.a3();
            this.a4();
            this.a5();
            this.a6();
            this.a7();
            this.a8();
            this.a9();
        };
        return variableDeclarations;
    }());
    main.variableDeclarations = variableDeclarations;
})(main || (main = {}));
/* program */
(new main.variableDeclarations()).start();
