// For testing purposes
console.log("This thing actually works! Congrats.");

// ************************************************************
var clearComplete = document.getElementById("clearComplete");

//If we end up creating filtering system
var showAll = document.getElementById("showAll");
var showComplete = document.getElementById("showComplete");
var showInprogress = document.getElementById("showInprogress");
var showNotStarted = document.getElementById("showNotStarted");
var showState = "showAll";


function changeProgress() {
    // console.log("hello");
    var parentCard = this.parentElement;
    var status = parentCard.classList[1];
    parentCard.classList.remove(status);
    var statusElem = parentCard.children[2];


    //Filtering system
    //I don't like this actually lol, it could be way better, let's google that after
    if (status == "Not-started") {
      parentCard.classList.add("In-progress");
      statusElem.innerHTML = "In-progress";
      statusElem.classList.remove(statusElem.classList[1]);
      statusElem.classList.add("color-blue");
    } else if (status == "Completed") {
      parentCard.classList.add("In-progress");
      statusElem.innerHTML = "In-progress";
      statusElem.classList.remove(statusElem.classList[1]);
      statusElem.classList.add("color-blue");
    } else {
      parentCard.classList.add("Completed");
      statusElem.innerHTML = "Completed";
      statusElem.classList.remove(statusElem.classList[1]);
      statusElem.classList.add("color-green");
    }
    //What if I do the checklist from HTML and style it on CSS and make my life easier
    //meh
  }