window.addEventListener("resize", checkSize, false);
checkSize();

function checkSize(){
	if(window.innerWidth < 747){
		document.getElementById('mobile-header').style.display = "block";
		document.getElementById('desktop-header').style.display = "none";
		try{
			document.getElementById('bottom-parallax').style.display = "none";
		}
		catch(err){}
	}
	else{
		document.getElementById('mobile-header').style.display = "none";
		document.getElementById('desktop-header').style.display = "block";
		try{
			document.getElementById('bottom-parallax').style.display = "block";
		}
		catch(err){}
	}
}

function disableSocial(){
	var social = document.getElementById("socialBar");
	social.style.display="none";
}