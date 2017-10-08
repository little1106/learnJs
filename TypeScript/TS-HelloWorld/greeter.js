var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
// var user = {firstName:'penghui',lastName:'wu'};
// var user = [1,2];
var user = new Student('penghui', 'W', 'wu');
document.body.innerHTML = greeter(user);
console.log(user.middleInitial);
