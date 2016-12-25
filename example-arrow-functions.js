let names = ['Andrew', 'Julia', 'Jen'];

// names.forEach(function(name) {
//     console.log('forEach', name);
// });
//
// names.forEach(name => {
//     console.log('arrowFunc', name)
// });
//
// names.forEach(name => console.log(name));
//
// let returnMe = name => name + '!';
//
// console.log(returnMe('Idan'));

//
// let person = {
//     name: "Idan",
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         })
//     }
// };
//
// person.greet();

// Challenge Area
function add(a, b) {
    return a + b;
}

let addStatement = (a, b) => {
    return a + b;
};

let addExpression = (a, b) => a + b;

console.log(addExpression(1, 3));
console.log(addExpression(3, -2));