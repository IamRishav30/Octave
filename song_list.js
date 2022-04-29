//song list
let All_song = [
    {
        name: "Naino Ne Baandhi - Gold",
        path: "music/1.mp3",
        img: "img/1.jpg",
        singer: "Arko"
      },
    {
      name: "Jab Tak - Ms Dhoni:- The Untold Story",
      path: "music/2.mp3",
      img: "img/2.jpg",
      singer: "Armaan Malik"
    },
    {
      name: "Rabba - Heropanti",
      path: "music/3.mp3",
      img: "img/3.jpg",
      singer: "Mohit Chauhan"
    },
    {
      name: "Makhna - Drive ",
      path: "music/4.mp3",
      img: "img/4.jpg",
      singer: "Tanishk Bagchi, Yasser Desai & Asees Kaur"
    },
    {
      name: "Baarish - Yaariyan",
      path: "music/5.mp3",
      img: "img/5.jpg",
      singer: "Mohammed Irfan"
    },
    {
     name: "Ik Vaari Aa - Raabta",
     path: "music/6.mp3",
     img: "img/6.jpg",
     singer: "Arijit Singh"
    }
    
  ];
  /*you can add more song & images from you computer*/
  
  
  /*tracks*/
  let tracks = document.querySelector('.tracks');
  
  //creating a list or generating Html
  for (let i = 0; i < All_song.length; i++) {
  
    let Html = ` <div class="song">
        <div class="img">
        <img src="${All_song[i].img}"/>
        </div>
        <div class="more">
        <audio src="${All_song[i].path}" id="music"></audio>
        <div class="song_info">
           <p id="title">${All_song[i].name}</p>
           <p>${All_song[i].singer}</p>
        </div>
        <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
        </div>
      </div>`;
  
    tracks.insertAdjacentHTML("beforeend", Html);
  };
  
  
  /*please follow all the rules so that you do not face any problem*/