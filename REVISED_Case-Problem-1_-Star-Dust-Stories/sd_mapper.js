/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Tyler Sather 
   Date:   11/1/21

*/

/*Variable Decloration for time */
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;

/* Sky map variable */
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (((2 * thisMonth) + thisHour) % 24);

/* Sky map HTML string */
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
var d1 = document.getElementById("planisphere");
d1.insertAdjacentHTML('afterBegin', imgStr);
