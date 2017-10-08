class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName+' '+middleInitial+' '+lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, "+ person.firstName+' '+ person.lastName;
}

// var user = {firstName:'penghui',lastName:'wu'};
// var user = [1,2];
var user = new Student('penghui','W','wu');

document.body.innerHTML = greeter(user);
