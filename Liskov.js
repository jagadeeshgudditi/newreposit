class Shape{
    getArea(){
    return 0;
    }
}

class Rectangle extends Shape{
    constructor(length,width){
        super();
        this.length=length;
        this.width=width;
    }
    getArea(){
        return this.length*this.width;
    }
}
class Square extends Shape{
   
    constructor(length){
        super();
        this.length=length;
        }
        getArea(){
            return 4*this.length;
        }
}
let R=new Rectangle(4,9);
console.log("Retangle Area is :"+R.getArea());
let S=new Square(6);
console.log("Square area is: "+S.getArea());
