# PBL
A demo website created to monitor the performance of IGDB API using gRPC

This website uses the IGDB API made by twitch to gain the information about any video-game with its cover picture and a link for the info page.
It calls the API with the 'POST' method and takes information listed in the documentation. This information is "cover", "name", "url" and "screenshots" and is displayed on the website. 

It also uses the "cors-anywhere" on github. (https://github.com/Rob--W/cors-anywhere.git) to create proxy to make the API call as the API has cors enabled. 

The procedure to make the API call from the webpage is first visiting the website: https://cors-anywhere.herokuapp.com/corsdemo and clicking on "Request temporary access to the demo server" and once you get the response "You currently have access to the demo server", the API call will take place once the search for a video-game takes place with the help of the search bar given. 
