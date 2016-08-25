var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var main;
(function (main) {
    var classes = (function () {
        function classes() {
        }
        classes.prototype.a1 = function () {
            var Greeter = (function () {
                function Greeter(message) {
                    this.greeting = message;
                }
                Greeter.prototype.greet = function () {
                    return "Hello, " + this.greeting;
                };
                return Greeter;
            }());
            var greeter = new Greeter("world");
            document.getElementById("a1")
                .addEventListener("click", function () {
                this.innerText =
                    "" + greeter.greet();
            });
            return this;
        };
        classes.prototype.a2 = function () {
            document.getElementById("a2")
                .addEventListener("click", function () {
                this.innerText =
                    "Error: 'name' is private";
            });
            return this;
        };
        classes.prototype.a3 = function () {
            document.getElementById("a3")
                .addEventListener("click", function () {
                this.innerText =
                    "yes";
            });
            return this;
        };
        classes.prototype.a4 = function () {
            document.getElementById("a4")
                .addEventListener("click", function () {
                this.innerText =
                    "no";
            });
            return this;
        };
        classes.prototype.a5 = function () {
            var Person = (function () {
                function Person(name) {
                    this.name = name;
                }
                return Person;
            }());
            var Employee = (function (_super) {
                __extends(Employee, _super);
                function Employee(name, department) {
                    _super.call(this, name);
                    this.department = department;
                }
                Employee.prototype.getElevatorPitch = function () {
                    return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
                };
                return Employee;
            }(Person));
            document.getElementById("a5")
                .addEventListener("click", function () {
                var howard = new Employee("Howard", "Sales");
                this.innerText =
                    howard.getElevatorPitch();
            });
            return this;
        };
        classes.prototype.a6 = function () {
            document.getElementById("a6")
                .addEventListener("click", function () {
                this.innerText =
                    "error";
            });
            return this;
        };
        classes.prototype.a7 = function () {
            var passcode = "secret passcode";
            var Employee = (function () {
                function Employee() {
                }
                Object.defineProperty(Employee.prototype, "fullName", {
                    get: function () {
                        return this._fullName;
                    },
                    set: function (newName) {
                        if (passcode && passcode == "secret passcode") {
                            this._fullName = newName;
                        }
                        else {
                            console.log("Error: Unauthorized update of employee!");
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return Employee;
            }());
            document.getElementById("a7")
                .addEventListener("click", function () {
                var employee = new Employee();
                employee.fullName = "Bob Smith";
                if (employee.fullName) {
                    console.log(employee.fullName);
                }
                this.innerText =
                    "" + employee.fullName;
            });
            return this;
        };
        classes.prototype.a89 = function () {
            var Grid = (function () {
                function Grid(scale) {
                    this.scale = scale;
                }
                Grid.prototype.calculateDistanceFromOrigin = function (point) {
                    var xDist = (point.x - Grid.origin.x);
                    var yDist = (point.y - Grid.origin.y);
                    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
                };
                Grid.origin = { x: 0, y: 0 };
                return Grid;
            }());
            var grid1 = new Grid(1.0); // 1x scale
            var grid2 = new Grid(5.0); // 5x scale
            document.getElementById("a8")
                .addEventListener("click", function () {
                this.innerText =
                    "" + grid1.calculateDistanceFromOrigin({ x: 10, y: 10 });
            });
            document.getElementById("a9")
                .addEventListener("click", function () {
                this.innerText =
                    "" + grid2.calculateDistanceFromOrigin({ x: 10, y: 10 });
            });
            return this;
        };
        classes.prototype.a10 = function () {
            var Dog = (function (_super) {
                __extends(Dog, _super);
                function Dog() {
                    _super.call(this, "puppy");
                }
                Dog.prototype.talk = function () {
                    return this.name + " is talking";
                };
                return Dog;
            }(Animal));
            document.getElementById("a10")
                .addEventListener("click", function () {
                var dog = new Dog();
                this.innerText =
                    "" + dog.talk();
            });
            return this;
        };
        classes.prototype.start = function () {
            this.a1().a2().a3()
                .a4().a5().a6()
                .a7().a89().a10();
        };
        return classes;
    }());
    main.classes = classes;
    //a10
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
})(main || (main = {}));
/* program */
(new main.classes()).start();
