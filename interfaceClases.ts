interface Shape{
    area():number
}
class Circle implements Shape{
    radio :number
    constructor(radio:number){
        this.radio = radio
    }
    area(){
        return Math.PI *(this.radio * this.radio)
    }
}
const circle = new Circle(2)
console.log(circle.area())
