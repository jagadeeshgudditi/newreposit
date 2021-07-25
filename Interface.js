class Fish{

}
class Bird{

}
const flyer={
    fly(){
        console.log("Iam flying");
    },

};
Object.assign(Bird.prototype,flyer);
var bird=new Bird();
bird.fly();
var fish=new Fish();
fish.fly();//Error comes with fish cannot fly doesnot implement function for this.