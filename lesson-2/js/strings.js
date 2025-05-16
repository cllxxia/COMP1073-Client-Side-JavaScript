const output = document.querySelector('p');
    
    /* STEP 1: Creating Strings */
    let step1 = "This is a string";
    output.textContent = step1;
    
    // Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

    /* STEP 2: Escaping Characters */
    let step2 = 'You\'re a mean one, Mr. Grinch';
    output.textContent = step2;

    /* STEP 3: Concatenation */
    let step3a = "JavaScript";
    let step3b = "Rocks";
    output.textContent = step3a + " " + step3b + "!";

    /* STEP 4: Numbers and Strings */
    let step4a = "Fahrenheit " + 451;
    output.textContent = step4a;
    // numbers can be converted to strings
    let step4b = 2025;
    let step4c = String(step4b);
    console.log(typeof(step4c));
    // strings can be converted to numbers, too
    let step4d = Number(step4c);
    // and back again, if we want
