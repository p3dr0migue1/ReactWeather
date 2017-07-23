var names = ["Andrew", "Julie", "Jen"];

// Normal function
// names.forEach(function(name) {
//     console.log("forEach", name);
// });

// Arrow function example
// names.forEach((name) => {
//     console.log("arrowFunc", name);
// });

// Arrow function simplified
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe("Pedro"));

// var person = {
//     name: "Pedro",
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + " says hi to " + name);
//         });
//     }
// };

// person.greet()

// function add (a, b) {
//     return a + b;
// }

var add1 = (a, b) => {
    return a + b;
}

var add2 = (a, b) =>  a + b;

console.log(add1(3, 2));
console.log(add1(9, 0));
