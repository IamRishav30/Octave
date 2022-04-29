var title = ["title 1", "title 2", "title 3", "title 4", "title 5", "title 6", "title 7"];
	var artist = ["artist 1", "artist 2", "artist 3", "artist 4", "artist 5", "artist 6","artist 7"];
	//var movie = ["movie 1", "movie 2","movie 3", "movie 4", "movie 5", "movie 6", "movie 7"];
	//for playlist
	var dynamic = document.querySelector('.content');
	for(var i=0;i<artist.length;i++){
		var fetch = document.querySelector('.content').innerHTML;
		dynamic.innerHTML = fetch + `<div id="carts${i}" class="rounds">
		<div class="artist-name">
					<a href="index.html"><p>${artist[i]}</p></a>
					</div>
				</div>`;
		var bgmg = document.getElementById(`carts${i}`);
		bgmg.style.backgroundImage = `url('img/${title[i]}.jpg')`;
	}