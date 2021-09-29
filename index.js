//document.addEventListener("DOMContentLoaded", function() {
  //  console.log("dom has load")
//});

// document.addEventListener("DOMContentLoaded",function(){
//     console.log("dom has loaded")
// });

// let changeText = document.getElementById('text')
// changeText.textContent = "This is really cool!"
// console.log(changeText.textContent);

document.addEventListener("DOMContentLoaded", function(){
    let newText = document.getElementById("text")
    newText.textContent = "This is really cool!"
    console.log("dom has loaded")
    console.log(newText.textContent)
})
