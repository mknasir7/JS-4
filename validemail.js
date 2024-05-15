Here is an example to help you understand regular expression better.
// Program to validate the email address
function validateEmail(email) {
    // Regex pattern for email
    const re = /\S+@\S+\.\S+/g;
    // Check if the email is valid
    let result = re.test(email);
    if (result) {
        console.log("The email is valid.");
    } else {
        console.log("The email is not valid.");
    }
}
// Input Email Id
let email = "abc@gmail.com"
validateEmail(email);
email = "abc#$#@45com"
validateEmail(email);
