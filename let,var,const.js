// 1. var:
//  The var keyword has function scope or global scope. This means that if you declare a variable with var inside a function, it is accessible throughout the entire function, 
//   regardless of the block in which it was declared.

//   Re-declaration: You can re-declare a variable with var within the same scope without any errors.

const app1 = () => {
    if (true) {
        var a = 20;
    }
    a = 30;  
    console.log(a);  // Output: 30
}
app1();


// 2. let:
// Scope: The let keyword has block scope. This means that a variable declared with let is only accessible within the block {} in which it was declared.

// Re-declaration: You cannot re-declare a let variable within the same scope.
const app1 = () => {
    if (true) {
        let a = 20;
    }
    a = 30;  // This will throw a ReferenceError because `a` is block-scoped
    console.log(a);
}
app1();

// 3. const:
// Scope: Like let, const also has block scope.

//   Re-declaration and Re-assignment: You cannot re-declare or reassign a const variable. Once a const variable is assigned a value, it cannot be changed.
//   However, if the const variable holds an object, you can modify the properties of that object.

const app1 = () => {
    if (true) {
        const a = 20;
    }
    a = 30;  // This will throw an error because `a` is block-scoped and can't be reassigned
    console.log(a);
}
app1();
