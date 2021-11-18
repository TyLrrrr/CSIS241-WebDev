"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Tyler Sather 
   Date:   11/14/21
   
   Filename: mpl_links.js

*/

//loads the anonymous function when the website loads
window.addEventListener("load",function(e){
  //selects the dropdown menus and allows us to mess around with them
  var allSelect = document.querySelectorAll("form#govLinks select");
  //loops through all the options in the drop down menus
  for (var i = 0; i < allSelect.length; i++){
      //when the option is picked it will run the next function
      allSelect[i].onchange = function(e){
        //send us to the link that is selected in the form
        location.href = e.target.value; 
      }
  }
});

