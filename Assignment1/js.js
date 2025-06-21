// Arrays that store the word options 
const nouns = ['Mom', 'Dad', 'The dog', 'The turtle', 'The rabbit'];
const verbs = ['ate', 'hugged', 'jumped on', 'smacked', 'played with'];
const adjectives = ['a happy', 'a strange', 'a funny', 'a scary', 'a sleepy'];
const nounTwo = ['cat', 'mouse', 'fish', 'bird', 'hamster'];
const locations = ['in Paris', 'on Mars', 'in the mall', 'on Venus', 'in Toronto'];
// References to html elements 
const nounDisplay = document.getElementById('noun-display');
const verbDisplay = document.getElementById('verb-display');
const adjectiveDisplay = document.getElementById('adjective-display');
const nounTwoDisplay = document.getElementById('nounTwo-display');
const locationDisplay = document.getElementById('location-display');
const storyOutput = document.getElementById('story-output');
// Returns a random word from the array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event listener buttons
// Noun event listener btn
document.getElementById('noun-btn').addEventListener('click', () => {
    nounDisplay.textContent = getRandomWord(nouns);
});
// Verb event listener btn
document.getElementById('verb-btn').addEventListener('click', () => {
    verbDisplay.textContent = getRandomWord(verbs);
});
// Adjective event listener btn
document.getElementById('adjective-btn').addEventListener('click', () => {
    adjectiveDisplay.textContent = getRandomWord(adjectives);
});
// NounTwo event listener btn
document.getElementById('nounTwo-btn').addEventListener('click', () => {
    nounTwoDisplay.textContent = getRandomWord(nounTwo);
});
// Location event listener btn
document.getElementById('location-btn').addEventListener('click', () => {
    locationDisplay.textContent = getRandomWord(locations);
});

// Autmatically generates a random story without user input
document.getElementById('auto-story-btn').addEventListener('click', ()=> {
    const noun  = getRandomWord(nouns);
    const verb = getRandomWord(verbs);
    const adjective = getRandomWord(adjectives);
    const secondNoun = getRandomWord(nounTwo);
    const location = getRandomWord(locations);

    nounDisplay.textContent = noun;
    verbDisplay.textContent = verb;
    adjectiveDisplay.textContent = adjective;
    nounTwoDisplay.textContent = secondNoun;
    locationDisplay.textContent = location;
    storyOutput.textContent = `${noun} ${verb} ${adjective} ${secondNoun} ${location}.`;
})

// Generate the story based on the users button inputs
document.getElementById('generate-story-btn').addEventListener('click', () => {
    const noun = nounDisplay.textContent;
    const verb = verbDisplay.textContent;
    const adjective = adjectiveDisplay.textContent;
    const nounTwo = nounTwoDisplay.textContent;
    const location = locationDisplay.textContent;
    if (noun && verb && adjective && nounTwo && location) {
        storyOutput.textContent = `${noun} ${verb} ${adjective} ${nounTwo} ${location}.`;
    } else {
        storyOutput.textContent = 'Please fill in all fields to generate a story.';
    }
});

// Resets the story
document.getElementById('reset-btn').addEventListener('click', () => {
    nounDisplay.textContent = '[noun]';
    verbDisplay.textContent = '[verb]';
    adjectiveDisplay.textContent = '[adjective]';
    nounTwoDisplay.textContent = '[nounTwo]';
    locationDisplay.textContent = '[location]';
    storyOutput.textContent = 'Your story: ';
});


