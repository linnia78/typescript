module main {
    export class classes {
        constructor() {

        }

        a1() {
            class Greeter {
                greeting: string;
                constructor(message: string) {
                    this.greeting = message;
                }
                greet() {
                    return "Hello, " + this.greeting;
                }
            }

            let greeter = new Greeter("world");

            document.getElementById("a1")
                .addEventListener("click", function () {
                    (this as HTMLElement).innerText = 
                        `${greeter.greet()}`;
                });
            return this;
        }
        
        start() {
            this.a1();
        }
    }

}

/* program */
(new main.classes()).start();