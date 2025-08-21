class Car{
    make:string = "Ferrari"
    drive(){
        console.log(`Driving a ${this.make}`)
    }
}
let car = new Car()
car.drive()