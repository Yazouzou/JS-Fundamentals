const arg = process.argv[2];

// Convert the argument to an integer
const num = parseInt(arg, 10);

// Check if conversion succeeded (NaN check)
if (!isNaN(num)) {
    console.log("My number: " + num);
} else {
    console.log("Not a number");
}
