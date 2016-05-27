module main {
    export class destructing {
        constructor() {

        }

        a1() {
            function f() {
                let input = [1, 2];
                let [first, second] = input;
                document.getElementById("a1")
                    .innerText =
                        `first = ${first}
                        second = ${second}`;
            }

            document.getElementById("a1")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }

        a2() {
            function f() {
                let input = [1, 2];
                let [first, second] = input;
                [first, second] = [second, first];
                document.getElementById("a2")
                    .innerText =
                        `first = ${first}
                        second = ${second}`;
            }

            document.getElementById("a2")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }

        a3() {
            function f() {
                let input: [number, number] = [1, 2];
                function f([first, second]: [number, number]) {
                    document.getElementById("a3")
                        .innerText =
                            `first = ${first}
                            second = ${second}`;
                }
                f(input);
            }

            document.getElementById("a3")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }
        
        a4() {
            function f() {
                let [first, ...rest] = [1,2,3,4];
                document.getElementById("a4")
                        .innerText =
                            `first = ${first}
                            rest = ${rest}`;
            }
            document.getElementById("a4")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }
        
        a5() {
            function f() {
                let [first] = [1, 2, 3, 4];
                let [, second, , fourth] = [1, 2, 3, 4];
                document.getElementById("a5")
                        .innerText =
                            `first = ${first}
                            second = ${second}
                            fourth = ${fourth}`;
            }
            document.getElementById("a5")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }
        
        a6() {
            function f() {
                let o = {
                    a: "foo",
                    b: 12,
                    c: "bar"
                }
                let {a, b} = o;
                document.getElementById("a6")
                        .innerText =
                            `a = ${a}
                            b = ${b}`;
            }
            document.getElementById("a6")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }
        
        a7() {
            function f() {
                let {a, b} = {a: "baz", b: 101};
                document.getElementById("a7")
                        .innerText =
                            `a = ${a}
                            b = ${b}`;
            }
            document.getElementById("a7")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }
        
        a8() {
            function f() {
                let o = {
                    a: "foo",
                    b: 12,
                    c: "bar"
                }
                let {a: newName1, b: newName2} = o;
                document.getElementById("a8")
                        .innerText =
                            `a = *compile error
                            newName1 = ${newName1}
                            newName2 = ${newName2}`;
            }
            document.getElementById("a8")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }

        a9() {
            function f() {
                let o = {
                    a: "foo",
                    b: 12,
                    c: "bar"
                }
                let {a: newName1, b: newName2}: { a: string, b: number } = o;
                document.getElementById("a9")
                        .innerText =
                            `newName1 = ${newName1}
                            newName2 = ${newName2}`;
            }
            document.getElementById("a9")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }
        
        a10() {
            function f(obj: { a: string, b?: number }) {
                let {a, b = 1001} = obj;
                document.getElementById("a10")
                    .innerText =
                        `a = ${a}
                        b = ${b}`;
            }
            document.getElementById("a10")
                .addEventListener("click", function () {
                    f({ a: 'abc' });
                });
            return this;
        }
        
        a11() {
            type C = { a: string, b?: number }
            function f({a, b}: C): void {
                document.getElementById("a11")
                        .innerText =
                            `a = ${a}
                            b = ${b}`;
            }
            document.getElementById("a11")
                .addEventListener("click", function () {
                    f({ a: 'abc' });
                });
            return this;
        }
        
        a12() {
            function f({a, b} = {a: "z", b: 99}): void {
                document.getElementById("a12")
                        .innerText =
                            `a = ${a}
                            b = ${b}`;
            }
            document.getElementById("a12")
                .addEventListener("click", function () {
                    f();
                });
            return this;
        }
        
        a13() {
            function f({a, b = 88} : {a:string, b?:number} = {a: "z"}): void {
                document.getElementById("a13")
                        .innerHTML +=
                            `a = ${a}<br/>
                            b = ${b}<br/>`;
            }
            document.getElementById("a13")
                .addEventListener("click", function () {
                    document.getElementById("a13")
                        .innerHTML = 'f({a:"yes"})<br/>';
                    f({a:"yes"});
                    document.getElementById("a13")
                        .innerHTML += 'f()<br/>';
                    f();
                    document.getElementById("a13")
                        .innerHTML += 'f({}) *compile error';
                });
            return this;
        }
        
        start() {
            this.a1().a2().a3().a4().a5()
                .a6().a7().a8().a9().a10()
                .a11().a12().a13();
        }
    }

}

/* program */
(new main.destructing()).start();