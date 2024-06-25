// task 1
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}


let myCar = new Car('Toyota', 'Camry');
console.log(myCar);  

// task 2


class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting the ${this.make} ${this.model}`);
    }
}


let myCar1 = new Car('Toyota', 'Camry');
myCar.start();  

// task 3


class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

let myCar2 = new Car('Honda', 'Accord');
console.log(myCar);  

// task 4


class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting the ${this.make} ${this.model}`);
    }
}


class ElectricCar extends Car {
    constructor(make, model) {
        super(make, model);  
    }
}

let myElectricCar = new ElectricCar('Tesla', 'Model S');
console.log(myElectricCar);  

myElectricCar.start();  


