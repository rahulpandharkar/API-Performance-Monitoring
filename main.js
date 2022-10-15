var myHeaders = new Headers();
myHeaders.append("Client-ID", "gu39drx62b3fzad89pbxbsehyf1b9q");
myHeaders.append("Authorization", "Bearer g8txwrdpzfxgdma0zmritf6xp1nzjm");
myHeaders.append("Content-Type", "application/javascript");
let html = ""; 
function movie_search()
{
var game_name = document.getElementById('game_name').value;
var raw = "search \""+game_name+"\"\;\r\nfields cover.url, name, url, screenshots.*; \r\n";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games", requestOptions)
  .then(response => response.json())
  .then(data => {
    data.forEach(gayme => {
        html += "<div class = 'gayme'>"
        let keys = Object.keys(gayme);
        keys.forEach((key) => {
           //html += "<strong>"
           //html += key
           //html += "</strong>"
           //html += " : "
           html += gayme[key]
           //html += "<br />"
        })
        html += "</div>"
        const game = `<ul><li><img src = "https:${gayme.cover.url}"><br><h4>Name:</h4><h3>${gayme.name}</h3><br><h2>URL:</h2><a href = "${gayme.url}">Click for Game Info</a><br><br></li></ul>`; 
        document.querySelector('.games').innerHTML += game; 
    
    })
  })
  .catch(error => console.log('error', error));
}
document.querySelector(".search").addEventListener("keyup",function(event){
  if(event.key == "Enter") {
      movie_search ();
  }
})

//cors-access: https://cors-anywhere.herokuapp.com/corsdemo
