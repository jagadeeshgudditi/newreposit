class Square{
    constructor(length){
        this.length=length;
    }
    getArea(){
        return 4*this.length;
    }

    //Here add another functionality without modification existing code
    getShape(){
        console.log("All sides are Equal");
    }

}
let S=new Square(8);
console.log("Square area is:"+S.getArea());
S.getShape();