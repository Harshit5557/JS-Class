class student{
    constructor(name){
        this.studentname=name;
    }
    static hello(){
        return "hello"; 
    }
    static welcome(x){
        return "Welcome" + x.studentname;
    }
    hi(){
        return "Hi" + this.studentname;
    }
}

myName = new student("Random");
console.log(student.hello());
console.log(myName.hi());
