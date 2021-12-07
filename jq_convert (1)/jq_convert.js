$(document).ready(function(){ 
    
    $("#flipGold").click(function(){
        $("#panelGold").slideToggle();
    });

    $("#flipSilver").click(function(){
        $("#panelSilver").slideToggle();
    });


  $("#goldButton").click(function(){ 
	$("#outSilver").empty(); 
	var x = $("#gold").val(); 
	x = x * 5;    
    alert("Silver: " + x); 
	$("#outSilver").append("Silver: " + x); 
  }); 


  $("#silverButton").click(function(){ 
	$("#outGold").empty(); 
	var x = $("#silver").val(); 
	x = x / 5; 
    alert("Gold: " + x); 
	$("#outGold").append("Gold: " + x); 
  }); 

  $("#dark").click(function(){
    $("link").attr("href", "jq_convert_dark.css")
  });

  $("#norm").click(function(){
    $("link").attr("href", "jq_convert.css")
  });

  $("#rainbow").click(function(){
    $("link").attr("href", "jq_convert_rainbow.css")
  });

  $("#fire").click(function(){
    $("link").attr("href", "jq_convert_fire.css")
  });
}); 


