class Car{
    private make:string;
    constructor(make:string){
        this.make = make
    }
    drive(){
        console.log(`Driving a ${this.make}`)
    }
    getMake(){
        return this.make
    }
}
let car = new Car("Ferrari")
car.drive()