//Class
class Person{
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

//Import from new.js
//// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './new.js'

//// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo,multiply,subtract } from './new.js';

import * as everything from './new.js' //// to import everything remaining
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
console.log(multiply(1,2));
console.log(10,20);
