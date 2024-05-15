// JS parseInt function
const num1 = parseInt("3.14");
console.log('Using parseInt("3.14") = ' + num1);

// JS parsefloat function
// It returns floating point Number until 
// it encounters Not a Number character
const num2 = parseFloat("2018.12@geeksforgeeks");
console.log('parseFloat("2018@geeksforgeeks") = ' + num2);

// JS isNAN function
console.log(isNaN(12));

// JS number() function
const num3 = Number(true);
console.log("Value of 'true': " + num3);

// JS eval() function
function evalfn() {
    const a = 4;
    const b = 4;
    const value = eval(new String(a * b));
    console.log(value);
}
evalfn();

// JS encode URI function
const url = "https://www.google.com/search?q=geeks for geeks";
const encodedURL = encodeURI(url);
console.log(encodedURL);
