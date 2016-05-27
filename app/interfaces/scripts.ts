module main {
    export class interfaces {
        constructor() {

        }

        a1() {
            interface SquareConfig {
                color: string;
                width?: number;
            }

            function createSquare(config: SquareConfig): { color: string; area: number } {
                let newSquare = { color: "white", area: 100 };
                if (config.color) {
                    newSquare.color = config.color;
                }
                if (config.width) {
                    newSquare.area = config.width * config.width;
                }
                return newSquare;
            }

            let mySquare = createSquare({ color: "black" });

            document.getElementById("a1")
                .addEventListener("click", function () {
                    (this as HTMLElement).innerText = 
                        `mySquare.color ${mySquare.color}
                        mySquare.area ${mySquare.area}`;
                });
            return this;
        }
        
        a2() {
            
            return this;
        }
        
        start() {
            this.a1().a2();
        }
    }

}

/* program */
(new main.interfaces()).start();