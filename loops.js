// Illustration of for loop
let x;

// for loop begins when x=2
// and runs till x <=4
for (x = 2; x <= 4; x++) {
    console.log("Value of x:" + x);
}

// Illustration of for..in loop
// creating an Object
let languages = {
    first: "C",
    second: "Java",
    third: "Python",
    fourth: "PHP",
    fifth: "JavaScript",
};

// Iterate through every property of 
// the object languages and print all
// of them using for..in loops
for (itr in languages) {
    console.log(languages[itr]);
}

// Illustration of while loop
let y = 1;

// Exit when x becomes greater than 4
while (y <= 4) {
    console.log("Value of y:" + y);

    // Increment the value of y for
    // next iteration
    y++;
}

// Illustration of do-while loop
let z = 21;

do {

    // The line while be printer even if 
    // the condition is false
    console.log("Value of z:" + z);

    z++;
} while (z < 20);
