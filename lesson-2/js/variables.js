    /* STEP 1: Declare variables
    Use a-z, 0-9, A-Z and underscores, avoiding reserved names
    All program variables are generally declared at the beginning */
    let myName;
    let myAge;
    const myH1 = document.querySelector('h1');

    /* STEP 2: Initialize variables
    Don't confuse a variable with no value with one that doesn't exist at all */
    myName = "Claudia";
    myAge = 24;

    /* STEP 3: Updating variables
    Once a variable has been declared, this can be done any time */
    myName = "Not Claudia";
    myAge = 25;

    // STEP 4: Variable types (use typeof in the console)
    // Numbers
    let numCars = 5;
    // Strings (use '' or "")
    let manufacturer = "Honda";
    // Booleans
    let isCarCool = true;
    // Arrays
    let myCarArray = ["Honda", "Toyota", "Ford"];
    let myMixedArray = ["Scott", false, 24];
    // Objects
    let myDog = {
    name: "Sabrina",
    age: 1,
    breed: "Dashund",
    size: "small",
    goodDog: true
    };
    // STEP 5: Typing (JavaScript is a loosely-typed language)
    // myCar.Array((element)=>  console.log(element));
    // Object.entries(myDog).forEach((element)=> console.log(element));
    for(const [key, value] of Object.entries(myDog)){
    console.log('${key}: ${value}');
    };