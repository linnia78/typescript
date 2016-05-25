module main {
    export class app {
        public bool: boolean = false;
        public decimal: number = 6;
        public hex: number = 0xf00d;
        public binary: number = 0b1010;
        public octal: number = 0o744;
        public string: string = "blue";
        public sentence: string = `the color is ${this.string}`;
        
        constructor() {

        }
        
        display() {
            document.getElementById("boolean").innerText = `${this.bool}`;
            document.getElementById("decimal").innerText = `${this.decimal}`;
            document.getElementById("hex").innerText = `${this.hex}`;
            document.getElementById("binary").innerText = `${this.binary}`;
            document.getElementById("octal").innerText = `${this.octal}`;
            document.getElementById("string").innerText = `${this.string}`;
            document.getElementById("sentence").innerText = `${this.sentence}`;
        }
    }
}

/* program */
var program = new main.app();
program.display();