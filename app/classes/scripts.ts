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
        
        a2() {
            document.getElementById("a2")
                .addEventListener("click", function() {
                    (this as HTMLElement).innerText = 
                        `Error: 'name' is private`;
                });
            return this;
        }

        a3() {
            document.getElementById("a3")
                .addEventListener("click", function() {
                    (this as HTMLElement).innerText =
                        `yes`;
                });
            return this;
        }

        a4() {
            document.getElementById("a4")
                .addEventListener("click", function() {
                    (this as HTMLElement).innerText =
                        `no`;
                });
            return this;
        }

        a5() {
            class Person {
                protected name: string;
                constructor(name: string) { this.name = name; }
            }

            class Employee extends Person {
                private department: string;

                constructor(name: string, department: string) {
                    super(name);
                    this.department = department;
                }

                public getElevatorPitch() {
                    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
                }
            }

            document.getElementById("a5")
                .addEventListener("click", function() {
                    let howard = new Employee("Howard", "Sales");
                    (this as HTMLElement).innerText =
                        howard.getElevatorPitch();
                });
            return this;
        }

        a6() {
            document.getElementById("a6")
                .addEventListener("click", function() {
                    (this as HTMLElement).innerText =
                        `error`;
                });
            return this;
        }

        a7() {
            let passcode = "secret passcode";

            class Employee {
                private _fullName: string;

                get fullName(): string {
                    return this._fullName;
                }

                set fullName(newName: string) {
                    if (passcode && passcode == "secret passcode") {
                        this._fullName = newName;
                    }
                    else {
                        console.log("Error: Unauthorized update of employee!");
                    }
                }
            }

            
            document.getElementById("a7")
                .addEventListener("click", function() {
                    let employee = new Employee();
                    employee.fullName = "Bob Smith";
                    if (employee.fullName) {
                        console.log(employee.fullName);
                    }

                    (this as HTMLElement).innerText =
                        `${employee.fullName}`;
                });
            return this;
        }

        a89() {
            class Grid {
                static origin = {x: 0, y: 0};
                calculateDistanceFromOrigin(point: {x: number; y: number;}) {
                    let xDist = (point.x - Grid.origin.x);
                    let yDist = (point.y - Grid.origin.y);
                    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
                }
                constructor (public scale: number) { }
            }

            let grid1 = new Grid(1.0);  // 1x scale
            let grid2 = new Grid(5.0);  // 5x scale

            document.getElementById("a8")
                .addEventListener("click", function() {
                    (this as HTMLElement).innerText =
                        `${grid1.calculateDistanceFromOrigin({x: 10, y: 10})}`;
                });

            document.getElementById("a9")
                .addEventListener("click", function() {
                    (this as HTMLElement).innerText =
                        `${grid2.calculateDistanceFromOrigin({x: 10, y: 10})}`;
                });
            return this;
        }

        a10() {
            class Dog extends Animal {
                constructor() {
                    super("puppy");
                }

                talk() {
                    return `${this.name} is talking`;
                }
            }

            document.getElementById("a10")
                .addEventListener("click", function() {
                    let dog = new Dog();
                    (this as HTMLElement).innerText =
                        `${dog.talk()}`;
                });
            return this;
        }

        start() {
            this.a1().a2().a3()
                .a4().a5().a6()
                .a7().a89().a10();
        }
    }

    //a10
    abstract class Animal {
        constructor(public name: string){

        }
        protected abstract talk(): string;
    }
}

/* program */
(new main.classes()).start();