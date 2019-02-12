//1 - Paste your example.json code below and set it to a variable called information
//JSON is an object data format, which is like an associative array working in key:value syntax. 
// To get a the value of a key we use the following format variable.key
 

//console.log(information.id) // will print out 1

//2 - console.log each item in the space below.




//3 - Let's create two variables called button and wrapper and query select the wrapper and button from index.html



//4 - Use the .innerHTML method on the wrapper variable to generate the following sentence:
//Expected Output: "Hello"



//5 Next concactenate the above message to your first name by calling the object value on it.
//Expected Output: - Should read "Hello my name is Christopher"



//6 Next create a click event listener for your button and console.log a message to make sure it works

//7 Now inside your event listener add the above .innerHTML message so that it only happens when the "Click Me" button is clicked

//8 Now concactenate all the object values inside of your click even listener.
//Expected output: "Hello my name is Christopher Berrios, I am 29 years old and I am a high school teacher"


//Challenge Activities
//9 Create your a JSON object of yourself. 
//Must include your firstname, lastname, age, birthday, occupation

//10 Make it so that the click button outputs all of your information instead of mine. 


//11 Find an image of your spirit animal on Unsplash.com. Update your JSON object to include that image and have it appear when you click on your event listener. 

var img = {
 "img":"https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
}
console.log(img.img)

let wrapper = document.querySelector('#wrapper')
wrapper.innerHTML = '<img src = "' +img.img+'">'

