
//Facade Pattern
class A{

}
class B{    //Class A,B,C doesn't Worry upon Sample class

}
class C{

}
class Facade{
    constructor(){
    this.a=new A();
    this.b=new B(); 
    this.c=new C();
}
}
class Sample{
    constructor(){
        this.facade=new Facade();//Sample doesn't dependupon Class A,ClassB,class C
                                 //This dependupon Facade class   
    }
}