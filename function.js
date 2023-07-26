//creating an object with a constructor function

function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
    this.getBirthYear= function(){
        return this.dob.getFullYear();
    }
    this.getFullName=function(){
        return  `${this.firstName} ${this.lastName}`
    }
}
Person.prototype.getFullName=function(){
    return  `${this.firstName} ${this.lastName}`
}
Person.prototype.getBirthYear= function(){
    return this.dob.getFullYear();
}

//Class
class Persons{
    constructor (firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
}
getBirthYear(){
    return this.dob.getFullYear();
}
getFullName(){
    return  `${this.firstName} ${this.lastName}`
}
}


//Instantiate an object
const person1=new Person('Bella','Kabonge','6-06-2002');
console.log(person1);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());