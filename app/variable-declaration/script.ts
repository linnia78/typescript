module main {
    export class variableDeclarations {
        constructor() {

        }

        a1() {
            function f() {
                var a = 10;
                return function g() {
                    var b = a + 1;
                    return b;
                }
            }

            var g = f();
            document.getElementById("a1")
                .addEventListener("click", function () {
                    (this as HTMLElement).innerText = g().toString();
                });
        }

        a2() {
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
                    (this as HTMLElement).innerText = f().toString();
                });
        }

        a3() {
            function f(shouldInitialize: boolean) {
                if (shouldInitialize) {
                    var x = 10;
                }

                return x;
            }

            document.getElementById("a3")
                .addEventListener("click", function () {
                    (this as HTMLElement).innerText =
                        `f(true) = ${f(true)}
                        f(false); = ${f(false)}`;
                });
        }

        a4() {
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
                    (this as HTMLElement).innerText = sumMatrix([[1, 2], [1, 2]]).toString();
                });
        }

        a5() {
            function f() {
                for (var i = 0; i < 10; i++) {
                    setTimeout(function () {
                        var node = document.createElement("span");
                        node.innerText = i.toString()
                        document.getElementById("a5")
                            .appendChild(node);
                    }, 100 * i);
                }
            }
            document.getElementById("a5")
                .addEventListener("click", function () {
                    (this as HTMLElement).innerText = "";
                    f();
                });
        }

        a6() {
            function f() {
                for (var i = 0; i < 10; i++) {
                    // capture the current state of 'i'
                    // by invoking a function with its current value
                    (function (i) {
                        setTimeout(function () {
                            var node = document.createElement("span");
                            node.innerText = i.toString()
                            document.getElementById("a6")
                                .appendChild(node);
                        }, 100 * i);
                    })(i);
                }
            }
            document.getElementById("a6")
                .addEventListener("click", function () {
                    (this as HTMLElement).innerText = "";
                    f();
                });
        }

        a7() {
            function sumMatrix(matrix: number[][]) {
                let sum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    var currentRow = matrix[i];
                    for (let i = 0; i < currentRow.length; i++) {
                        sum += currentRow[i];
                    }
                }

                return sum;
            }
            document.getElementById("a7")
                .addEventListener("click", function () {
                    (this as HTMLElement).innerText = sumMatrix([[1, 2], [1, 2]]).toString();
                });
        }

        a8() {
            function f() {
                for (let i = 0; i < 10; i++) {
                    setTimeout(function () {
                        var node = document.createElement("span");
                        node.innerText = i.toString()
                        document.getElementById("a8")
                            .appendChild(node);
                    }, 100 * i);
                }
            }
            document.getElementById("a8")
                .addEventListener("click", function () {
                    (this as HTMLElement).innerText = "";
                    f();
                });
        }

        a9() {
            function f() {
                const numLivesForCat = 9;
                const kitty = {
                    name: "Aurora",
                    numLives: numLivesForCat,
                }

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
                    (this as HTMLElement).innerHTML = 
                        `<div>ERROR!</div> 
                        <div>kitty = {</div>
                            <div class="tab">name: "Danielle",</div>
                            <div class="tab">numLives: numLivesForCat</div>
                        <div>};</div><br>
                        <div>No ERROR!</div>
                        <div>kitty.name = "Rory";</div>
                        <div>kitty.name = "Kitty";</div>
                        <div>kitty.name = "Cat";</div>
                        <div>kitty.numLives--;</div>`;
                });
        }

        start() {
            this.a1();
            this.a2();
            this.a3();
            this.a4();
            this.a5();
            this.a6();
            this.a7();
            this.a8();
            this.a9();
        }
    }

}

/* program */
(new main.variableDeclarations()).start();