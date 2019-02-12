//Beneath this comment: querySelect your button by grabbing the id of the button element from index.html and store it as a variable.

//Beneath this comment: querySelect your input by grabbing the id of the input element from index.html and store it as a variable.

//Beneath this comment: Code out a click event listener for your button that logs "Button pressed!" to the console when it is clicked 

//Now, inside your event listener create a new variable called searchInput and call the .value method on the input variable you created. 

//Now, below is a function called sendApiRequest(). Call that function in the above button click event with serachInput as it's argument

// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below where it says: YOUR_API_KEY_GOES_HERE.
function sendApiRequest() {
  
    fetch("https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY_GOES_HERE&q=spongebob&limit=25&offset=0&rating=G&lang=en")
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
      //Beneath this line: pass the JSON on to the next function. HINT: Call getImageURLfrom() and pass in json as your argument.

    });
};

// Get a specific image URL ending in .gif from your JSON search results. Pass it on to the next function.
function getImageURLfrom(myJSON) {
  //create  a const called imageURL and set it to equal myJSON.data[0].images.original.url 

  //console log your imageURL const
  
  //Now call your addImageToScreen function below and pass in your const as it's argument
  
  
};

  //querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {
  //Now create a variable called wrapper and querySelect the div with an id of wrapper
  
  //Next call the .innerHTML method on your wrapper varible and set it equal to the following string "<img src = ''>"
  //Where the single quotes are located concactenate your myURL parameter to the img tag element.
  
};

//Next steps:
// 1 -  Replace the 0 in your myJSON.data[0].images.original.url with the following random method found here: https://www.w3schools.com/js/js_random.asp
// Quick hint: Each Giphy API fetch will pull in 25 gifs

// 2 - As of right now, we are only searching for spongebob, just take a look at the fetch url above to confirm this, we want to make this search wayy more dynamic.
// Let's pass an x parameter inside our sendApiRequest(x) function
// Now here is the tricky part,
// 2a - Replacing spongebob with x parameter and concactenate your x parameter to your url. 

