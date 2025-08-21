class Car{
    make:string;
    constructor(make:string){
        this.make = make
    }
    drive(){
        console.log(`Driving a ${this.make}`)
    }
}

class ElectricCar extends Car{
    batteryLife: number ;
    constructor(make:string, batteryLife:number){
      super(make)
      this.batteryLife = batteryLife
    }
    charge(){
        console.log(`El coche esta cargando ${this.batteryLife}`)
    }
}
let car = new Car("Ferrari")
car.drive()