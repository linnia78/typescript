var main;
(function (main) {
    var basicTypes = (function () {
        function basicTypes() {
        }
        basicTypes.prototype.basicTypes = function () {
            var bool = false;
            var decimal = 6;
            var hex = 0xf00d;
            var binary = 10;
            var octal = 484;
            var string = "blue";
            var sentence = "the color is " + string;
            var obj = {
                a: 'a',
                b: 2,
                c: true
            };
            document.getElementById("boolean").innerText = "" + bool;
            document.getElementById("decimal").innerText = "" + decimal;
            document.getElementById("hex").innerText = "" + hex;
            document.getElementById("binary").innerText = "" + binary;
            document.getElementById("octal").innerText = "" + octal;
            document.getElementById("string").innerText = "" + string;
            document.getElementById("sentence").innerText = "" + sentence;
            document.getElementById("object").innerText = "" + obj.a + obj.b + obj.c;
        };
        basicTypes.prototype.arrays = function () {
            var strArray = ["one", "two", "three"];
            var strArray2 = ["three", "four", "five"];
            var numberArray = [1, 2, 3];
            document.getElementById("strArray").innerText = strArray.join(',');
            document.getElementById("strArray2").innerText = strArray.join(',');
            document.getElementById("numberArray").innerText = numberArray.join(',');
        };
        basicTypes.prototype.tuples = function () {
            var mixTuple = ['test', 10];
            mixTuple[7] = 'blah';
            document.getElementById("mixTuple1").innerText = mixTuple[0];
            document.getElementById("mixTuple2").innerText = mixTuple[1].toString();
            document.getElementById("mixTuple3").innerText = mixTuple[7].toString();
            document.getElementById("mixTuple4").innerText = mixTuple.length.toString();
        };
        basicTypes.prototype.enums = function () {
            var red = Color.Red;
            document.getElementById("enum1").innerText = red.toString();
            document.getElementById("enum2").innerText = Color[2];
            document.getElementById("enum3").innerText = Color[red];
        };
        basicTypes.prototype.any = function () {
            var any = {
                a: 'a',
                b: 2,
                c: true
            };
            var anyArr = [
                {
                    a: 'a',
                    b: 2,
                    c: true
                },
                {
                    a: 'b',
                    b: 3,
                    c: false
                },
            ];
            document.getElementById("any").innerText = "" + any.a + any.b + any.c;
            document.getElementById("anyArr").innerText = anyArr.map(function (o) {
                return "" + any.a + any.b + any.c;
            }).join('c');
        };
        basicTypes.prototype.voidFn = function () {
            var obj;
            document.getElementById("void").innerText = "" + obj;
            obj = null;
            document.getElementById("void2").innerText = "" + obj;
        };
        basicTypes.prototype.typeAssertion = function () {
            var value = "Hello World";
            var iknow = value.length;
            document.getElementById("typeAssertion").innerText = "" + iknow;
            var iknow2 = value.length;
            document.getElementById("typeAssertion2").innerText = "" + iknow2;
        };
        basicTypes.prototype.start = function () {
            this.basicTypes();
            this.arrays();
            this.tuples();
            this.enums();
            this.any();
            this.voidFn();
            this.typeAssertion();
        };
        return basicTypes;
    }());
    main.basicTypes = basicTypes;
    //Default numbering starts at 0
    var Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    ;
})(main || (main = {}));
/* program */
(new main.basicTypes()).start();
