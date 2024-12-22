var myHeaders = new Headers();
myHeaders.append("Client-ID", "gu39drx62b3fzad89pbxbsehyf1b9q");
myHeaders.append("Authorization", "Bearer wvxep1worzzkifjnr88a85tn64u8nx");
myHeaders.append("Content-Type", "application/json");

let html = ""; 

function movie_search() {
    var game_name = document.getElementById('game_name').value;
    var raw = `search "${game_name}"; fields cover.url, name, url, screenshots.*;`;

    document.querySelector('.games').innerHTML = "";

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow'
    };

    fetch("https://api.igdb.com/v4/games", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(game => {
                const gameHTML = `
                    <ul>
                        <li>
                            <img src="https:${game.cover?.url || ''}" alt="${game.name} Cover"><br>
                            <h3>${game.name}</h3><br>
                            <a href="${game.url}" target="_blank">Click for Game Info</a><br><br>
                        </li>
                    </ul>`;
                document.querySelector('.games').innerHTML += gameHTML;
            });
        })
        .catch(error => console.log('Error:', error));
}

document.querySelector(".search").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        movie_search();
    }
});


  
//cors-access: https://cors-anywhere.herokuapp.com/corsdemo