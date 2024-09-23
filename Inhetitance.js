class bike {
    constructor(bikebrand) {
        this.brandname=bikebrand;
    }

    present(){
        return "I want't to have a bike of " + this.brandname;
    }
}
class model extends bike {
    constructor(bikebrand,bikemodel){
        super(bikebrand)
        this.model=bikemodel;
    }

    show(){
        return this.present() + " and the model I wan't to have is " + this.model;

    }
}

let myBike= new model("Suzuki" , "Hayabusa")
console.log(myBike.show())