class ClassTest{
    constructor(){}
    test(){
        
    }
}

class GG extends ClassTest{
    test(){
        console.log("test");
    }
    mm(){
        console.log('mm');
    }
}

let gg = new GG();
console.log(gg);