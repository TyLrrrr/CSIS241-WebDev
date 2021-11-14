"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Tyler Sather
   Date:   10/9/21

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
// runs our style selector when the website loads
window.addEventListener("load", setStyles);

function setStyles() {
  //0-4 for a random style that we will create below
  var styleNum = randInt(5);

  //creates our first node as a function, pick the element and all atributes here
  var pageStyle = document.createElement("link");
  pageStyle.setAttribute("rel", "stylesheet");   
  pageStyle.setAttribute('id', "fancySheet");   
  pageStyle.setAttribute("href",  "na_style_" + styleNum + ".css");
  
  // place the created node from above to the html sheet
  document.head.appendChild(pageStyle);

  //in an empty div creates an array of images we can use to selecet a new style
  var figBox = document.createElement("figure");
  figBox.setAttribute("id", "styleThumbs");
  document.getElementById("box").appendChild(figBox);

  //loops through to set up all the images in a row
  for (var i = 0; i <= 4; i++ ){
    var sheetImg = document.createElement("img");
    sheetImg.setAttribute("src", "na_small_"+i+".png");
    sheetImg.setAttribute("alt", "na_style_"+i+".css");

    // when img is clicked it will change the style sheet to the new href
    sheetImg.addEventListener("click", function(e){
      document.getElementById("fancySheet").href = e.target.alt;
    });

    //putting the images into the figure that is inside the div
    figBox.appendChild(sheetImg);
  }
  //creating some style rules that will be put on to the img in the figbox
  var thumbStyles = document.createElement("style");
  document.head.appendChild(thumbStyles); 

  //this rule selects the last style sheet in the header and adds a rule to it
  // you can change the length value to be able to select different style sheets
  // the number at the end is the order of the rules. 
  // the \ extends quotations to the next line.  
  document.styleSheets[document.styleSheets.length-1].insertRule(
    "figure#styleThumbs { \
        position: absolute; \
        left: 0px; \
        bottom: 0px; \
    }", 0);

  document.styleSheets[document.styleSheets.length-1].insertRule(
    "figure#styleThumbs img { \
        outline: 1px solid black; \
        cursor: pointer; \
        opacity: 0.75; \
    }", 1);

  document.styleSheets[document.styleSheets.length-1].insertRule(
    "figure#styleThumbs img:hover { \
        outline: 1px solid red; \
        opacity: 1.0; \
    }", 2);
}

//function for creating a random int from 0 to whatever the value entered -1.
function randInt(size) {
   return Math.floor(size*Math.random());
}

