module main {
    export class basicTypes {
        constructor() {

        }

        basicTypes() {
            let bool: boolean = false;
            let decimal: number = 6;
            let hex: number = 0xf00d;
            let binary: number = 0b1010;
            let octal: number = 0o744;
            let string: string = "blue";
            let sentence: string = `the color is ${string}`;
            let obj: { a: string, b: number, c: boolean } = {
                a: 'a',
                b: 2,
                c: true
            };
            document.getElementById("boolean").innerText = `${bool}`;
            document.getElementById("decimal").innerText = `${decimal}`;
            document.getElementById("hex").innerText = `${hex}`;
            document.getElementById("binary").innerText = `${binary}`;
            document.getElementById("octal").innerText = `${octal}`;
            document.getElementById("string").innerText = `${string}`;
            document.getElementById("sentence").innerText = `${sentence}`;
            document.getElementById("object").innerText = `${obj.a}${obj.b}${obj.c}`;
        }

        arrays() {
            let strArray: string[] = ["one", "two", "three"];
            let strArray2: Array<string> = ["three", "four", "five"];
            let numberArray: Array<number> = [1, 2, 3];
            document.getElementById("strArray").innerText = strArray.join(',');
            document.getElementById("strArray2").innerText = strArray.join(',');
            document.getElementById("numberArray").innerText = numberArray.join(',');
        }

        tuples() {
            let mixTuple: [string, number] = ['test', 10];
            mixTuple[7] = 'blah';
            document.getElementById("mixTuple1").innerText = mixTuple[0];
            document.getElementById("mixTuple2").innerText = mixTuple[1].toString();
            document.getElementById("mixTuple3").innerText = mixTuple[7].toString();
            document.getElementById("mixTuple4").innerText = mixTuple.length.toString();
        }

        enums() {
            let red = Color.Red;
            document.getElementById("enum1").innerText = red.toString();
            document.getElementById("enum2").innerText = Color[2];
            document.getElementById("enum3").innerText = Color[red];
        }

        any() {
            let any: any = {
                a: 'a',
                b: 2,
                c: true
            };
            let anyArr: { a: string, b: number, c: boolean }[] = [
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
            document.getElementById("any").innerText = `${any.a}${any.b}${any.c}`;
            document.getElementById("anyArr").innerText = anyArr.map((o) => {
                return `${any.a}${any.b}${any.c}`;
            }).join('c');
        }

        voidFn() {
            let obj: void;
            document.getElementById("void").innerText = `${obj}`;
            obj = null;
            document.getElementById("void2").innerText = `${obj}`;
        }

        typeAssertion() {
            let value: any = "Hello World";
            let iknow = (<string>value).length;
            document.getElementById("typeAssertion").innerText = `${iknow}`;
            let iknow2 = (value as string).length;
            document.getElementById("typeAssertion2").innerText = `${iknow2}`;
        }
        start() {
            this.basicTypes();
            this.arrays();
            this.tuples();
            this.enums();
            this.any();
            this.voidFn();
            this.typeAssertion();
        }
    }

    //Default numbering starts at 0
    enum Color { Red = 1, Green = 2, Blue = 3 };
}

/* program */
(new main.basicTypes()).start();