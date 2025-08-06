//Waits until DOM content is loaded before running script
document.addEventListener("DOMContentLoaded", function() {
  //Gets the search button and adds a click event listener to it
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', searchImg);
});

//Async function to search NASA imgs based on the users input
async function searchImg() {
  //Gets value entered by user in search input field
  const query = document.getElementById('searchInput').value;
  //Gets the div where results will be displayed and clears previous results
  const resultsDiv = document.getElementById('resultsDiv');
  //Clears previous results
  resultsDiv.innerHTML = ''; 
  //Checks if the input field is empty and alerts the user if it is
  if (query.trim() === '') {
    alert("Please enter a search term.");
    return;
  }
  //Builds the API URL with the user's query
  const apiUrl = 'https://images-api.nasa.gov/search?q=' + encodeURIComponent(query) + '&media_type=image,video';

  try {
    //Fetches data from the NASA API, parse it as JSON, and extracts the items from the response
    const response = await fetch(apiUrl);
    const data = await response.json();
    const items = data.collection.items;
    //Lets user know if no results were found
    if (items.length === 0) {
      resultsDiv.innerHTML = '<p>No results found.</p>';
      return;
    }
    //Loops through each item in search results and create HTML elements to display them
    for (let i = 0; i < items.length; i++) {
      const title = items[i].data[0].title;
      const nasaId = items[i].data[0].nasa_id;
      const thumbnailUrl = items[i].links ? items[i].links[0].href : '';

      try {
        //Fetches asset info for the current item using nasa_id
        const assetResponse = await fetch(`https://images-api.nasa.gov/asset/${nasaId}`);
        const assetData = await assetResponse.json();
        const assetItems = assetData.collection.items;

        //Find the first full image URL (jpg or png) from asset items
        let fullImageUrl = '';
        for (let asset of assetItems) {
          if (asset.href.endsWith('.jpg') || asset.href.endsWith('.png')) {
            fullImageUrl = asset.href;
            break; 
          }
        }

        //Use full image URL if available; otherwise fallback to thumbnail URL
        const linkUrl = fullImageUrl || thumbnailUrl;

        //Creates a div for each item with an image and title
        const div = document.createElement('div');
        div.className = 'item';

        //Creates a link that opens the full image (or thumbnail) in a new tab
        const link = document.createElement('a');
        link.href = linkUrl;
        link.target = '_blank';

        //Creates an image element for the thumbnail
        const img = document.createElement('img');
        img.src = thumbnailUrl;
        img.alt = title;

        //Creates a caption div for the title
        const caption = document.createElement('div');
        caption.className = 'item-title';
        caption.textContent = title;

        //Appends the image and caption to the link, then appends the link to the item div
        link.appendChild(img);
        link.appendChild(caption);
        div.appendChild(link);
        resultsDiv.appendChild(div);
      } catch (assetError) {
        //If fetching assets fails, resort to showing just the thumbnail without link
        console.error('Error fetching asset info for nasa_id:', nasaId, assetError);
        //Creates a div for the item with just the thumbnail and title
        const div = document.createElement('div');
        //Sets the class for styling
        div.className = 'item';
        //Creates an image element for the thumbnail
        const img = document.createElement('img');
        img.src = thumbnailUrl;
        img.alt = title;
        //Creates a div to hold image title
        const caption = document.createElement('div');
        caption.className = 'item-title';
        caption.textContent = title;
        //Appends the image and caption to the div
        div.appendChild(img);
        div.appendChild(caption);
        resultsDiv.appendChild(div);
      }
    }
  } catch (error) {
    //Logs errors to the console and informs the user
    console.log('Error fetching NASA data:', error);
    resultsDiv.innerHTML = '<p>Error fetching data. Please try again later.</p>';
  }
}
