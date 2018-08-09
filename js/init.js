(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


var teamNavBtn = document.getElementById('teamNavBtn');
var teamNav = document.getElementById('teamNav');
var subNavArray = document.getElementsByClassName("SubNavText");

function showSubNavText(obj){
  for(var i = 0; i < obj.length; i++){
		obj[i].style.display="block";
	}
}

function hideSubNavText(obj){
	for(var i = 0; i < obj.length; i++){
		obj[i].style.display="none";
	}
}

teamNav.addEventListener('mouseenter', function(){showSubNavText(subNavArray)}, true);
teamNav.addEventListener('mouseleave', function(){ console.log("lol"); hideSubNavText(subNavArray)}, true);
