var button = document.getElementByClassName("btn1");
	var play = document.getElementByClassName("play");
	var audio = document.getElementByClassName("aud1");
	button.addEventListener('click', function(){
		if (audio.paused){
			audio.play();
			play.classList.replace("fa-play", "fa-pause");
		}
		else{
			audio.pause();
			play.classList.replace("fa-pause", "fa-play");
		}
	});