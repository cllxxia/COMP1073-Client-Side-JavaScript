    /* STEP 2: Reference the HEADER and the SECTION elements with variables */
    const header = document.querySelector('header');
    const section = document.querySelector('section');

    // STEP 3a: Create the asynchronous function populate()
    async function populate() {
        // Introducing JavaScript Object Notation (JSON): https://json.org/
        // STEP 4a: Store the URL of a JSON file in a variable */
        // STEP 4b: Store the URL of a JSON file in a variable
        let url = 'https://cllxxia.github.io/COMP1073-Client-Side-JavaScript/lesson-10/js/i-scream.json'

        // STEP 5: Use the new URL to create a new request object
        let request = new Request(url);
        console.log(request);
        // STEP 6: Make a network request with the fetch() function, which returns a Response object
        let response = await fetch(request);
        console.log(response);
        // STEP 7: Capture the returned Response object and covert to a JSON object using json()
        let responseJson = await response.json();
        console.log(responseJson);
        // STEP 8: Output the iScream JSON object to the console 
        console.log(responseJson);
        // STEP 9a: Invoke the populateHeader function here, then build it below
        populateHeader(responseJson);
        // STEP 10a: Invoke the showTopFlavors function here, then build it below
        showTopFlavors(responseJson);
}

    
    
// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonBody) {
    // Create the H1 element
    // <h1></h1>
    let h1 = document.createElement('h1');
    console.log(h1);
    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = jsonBody.companyName;
    console.log(h1.textContent);
    // To do: Add a paragraph tag that says "head office: North Pole, est. 2001 - status: active"
    let p = document.createElement('p');
    p.textContent = `Head Office: ${jsonBody.headOffice}, est. ${jsonBody.established} - Status: ${jsonBody.active}`;
    console.log(p.textContent);
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
    header.appendChild(p);
};
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonBody) {
    // STEP 10c: Attache the JSON topFlavors object to a variable
    let topFlavors = jsonBody.topFlavors;
    
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i ++) {
        // STEP 10e: build HTML elements for the content
        let article = document.createElement('article'); // <article></article>
        let h2 = document.createElement('h2'); // <h2></h2>
        let p1 = document.createElement('p'); // <p></p>
        let p2 = document.createElement('p'); // <p></p>
        let image = document.createElement('img'); // <img>
        let list = document.createElement('ul'); // <ul></ul>
        console.log(article, h2, p1, p2, image, list);

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = topFlavors[i].name; // e.g. "Chocolate"
        p1.textContent = "Calories: " + topFlavors[i].calories;
        p2.textContent = "Type: " + topFlavors[i].type;
        image.setAttribute('src', topFlavors[i].image); 
        // STEP 10g: Build a loop for the ingredients array in the JSON
        // add the ingredient to the UL
        let ingredients = topFlavors[i].ingredients;
        for (let j = 0; j < topFlavors[i].ingredients.length; j++) {
            let listItem = document.createElement('li'); // <li></li>
            listItem.textContent = ingredients[j];// <li>ingredient</li>
            list.appendChild(listItem); // <ul><li>ingredient</li></ul>
        }

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(image);
        article.appendChild(list);
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    };
};
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
