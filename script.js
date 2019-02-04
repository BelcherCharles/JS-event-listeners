// console.log(document.querySelector("#h1"));
// console.log(document.querySelector("#h2"));
// console.log(document.querySelector("#h3"));

// // console.log(getElementById("#h1"));
// // console.log(getElementById("#h2"));
// // console.log(getElementById("#h3"));


// // - Add a click event listener to each heading element you just created. 
// // - Inside the event listener's callback function, you should log a string about which element they clicked on to the console

// // document.querySelector("#h1").addEventListener("click", function(){
// //     console.log("Click on the H1");
// // })

// // document.querySelector("#h2").addEventListener("click", function(){
// //     console.log("Click on the H2");
// // })

// // document.querySelector("#h3").addEventListener("click", function(){
// //         console.log("Click on the H3");
// // })
// // console.log(document.querySelector("#h1"));

// // ## Lightning Exercise 3
// // - Create a CSS file and link it to your HTML file
// // - Inside the event listener for your h1 element, add a line of code that will change the text color of the h1 element to red when you click on it 

// document.querySelector("#h1").addEventListener("click", () => {
//     event.target.classList.add("red-text");
// })

// document.querySelector("#darkTheme").addEventListener("click", () => {
//     document.querySelector("body").classList.toggle("dark-background");
// })

// // ## Lightning Exercise 4
// // - Add a textarea element and a button with the text "Submit" to your HTML file
// // - Give the button an id
// // - Add a click event listener to the submit button
// // - When clicked, it should log the value of the textarea to the console

// document.querySelector("#textArea").addEventListener("keyup", () => {
//     let messageToPrint = document.querySelector("#textArea").value;
//     document.querySelector("#receiveText").innerText = messageToPrint
// })


// document.querySelector(".message").addEventListener("keyup", () => {
//     let messageToPrint = document.querySelector(".message").value;
//     document.querySelector("#art1").innerText = messageToPrint
//     document.querySelector("#art2").innerText = messageToPrint
// })


document.querySelector("#activate-flight").addEventListener("click", () => {
    document.querySelector("#flight").classList.replace("disabled", "enabled");
})

// Add the correct string as the first argument to addEventListener()

// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

// Have your developer tools open. When you click the button, the following element...

/* <section id="flight" class="power disabled"> */

/* Should then look like this. */

/* <section id="flight" class="power enabled"> */


/* Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements */

document.querySelector("#activate-mindreading").addEventListener("click", () => {
    document.querySelector("#mindreading").classList.replace("disabled", "enabled");
})

document.querySelector("#activate-xray").addEventListener("click", () => {
    document.querySelector("#xray").classList.replace("disabled", "enabled");
})

/* Once that is complete, add two more buttons

Enable All Powers
Disable All Powers


Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these. */

document.querySelector("#activate-all").addEventListener("click", () => {
    document.querySelector("#flight").classList.replace("disabled", "enabled");
    document.querySelector("#mindreading").classList.replace("disabled", "enabled");
    document.querySelector("#xray").classList.replace("disabled", "enabled");
})

document.querySelector("#deactivate-all").addEventListener("click", () => {
    document.querySelector("#flight").classList.replace("enabled", "disabled");
    document.querySelector("#mindreading").classList.replace("enabled", "disabled");
    document.querySelector("#xray").classList.replace("enabled", "disabled");
})

