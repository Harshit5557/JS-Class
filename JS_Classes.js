class student{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    age() {
        let date=new Date()
        return date.getFullYear() - this.year;
    }
}

student1= new student("Harshit",2010);
console.log(student1.name)
console.log(student1.age())

student2= new student("Random",2019);
console.log(student2.name)
console.log(student2.age())