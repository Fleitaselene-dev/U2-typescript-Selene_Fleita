interface Shape{
    area():number
}
class Circle implements Shape{
    radio :number
    constructor(radio:number){
        this.radio = radio
    }
    area(){
        return Math*PI *(this.radio * this.radio)
    }
}