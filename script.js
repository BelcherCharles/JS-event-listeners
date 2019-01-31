console.log(document.querySelector("#h1"));
console.log(document.querySelector("#h2"));
console.log(document.querySelector("#h3"));

// console.log(getElementById("#h1"));
// console.log(getElementById("#h2"));
// console.log(getElementById("#h3"));


// - Add a click event listener to each heading element you just created. 
// - Inside the event listener's callback function, you should log a string about which element they clicked on to the console

// document.querySelector("#h1").addEventListener("click", function(){
//     console.log("Click on the H1");
// })

// document.querySelector("#h2").addEventListener("click", function(){
//     console.log("Click on the H2");
// })

// document.querySelector("#h3").addEventListener("click", function(){
//         console.log("Click on the H3");
// })
// console.log(document.querySelector("#h1"));

// ## Lightning Exercise 3
// - Create a CSS file and link it to your HTML file
// - Inside the event listener for your h1 element, add a line of code that will change the text color of the h1 element to red when you click on it 

document.querySelector("#h1").addEventListener("click", () => {
    event.target.classList.add("red-text");
})

document.querySelector("#darkTheme").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark-background");
})

// ## Lightning Exercise 4
// - Add a textarea element and a button with the text "Submit" to your HTML file
// - Give the button an id
// - Add a click event listener to the submit button
// - When clicked, it should log the value of the textarea to the console

document.querySelector("#textArea").addEventListener("keyup", () => {
    let messageToPrint = document.querySelector("#textArea").value;
    document.querySelector("#receiveText").innerText = messageToPrint
})

