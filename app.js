var button = document.querySelector('.sub1');
var main = document.querySelector('.name');
var w1 = document.querySelector('.w1');
var w2 = document.querySelector('.w2');
var w3 = document.querySelector('.w3');
var input = document.querySelector('.inp1');
button.addEventListener('click', function (name) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+input.value+`&appid=4bb3a70010c8dd3fe82992e5b4f9dc23`)
        .then(response => response.json())
        .then((data) => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var windspeed = data['wind']['speed'];

            if((tempValue-273)>=30){
                document.getElementById("divim").style.backgroundImage = "url(sun.jpeg)";
                document.getElementById("divim").style.backgroundSize = "cover";
                document.getElementById("divim").style.color = "white";
            }
            else if((tempValue-273)<=5){
                document.getElementById("divim").style.backgroundImage = "url(cold.jpg)";
                document.getElementById("divim").style.color = "black";
            }
            else{
                document.getElementById("divim").style.backgroundImage = "url(shady.jpg)";
                document.getElementById("divim").style.color = "black";
            }

            main.innerHTML = nameValue;
            w2.innerHTML = "<b>Weather --></b> " + descValue;
            w1.innerHTML = "<b>Temperature --></b> " + (tempValue-273).toFixed(2) +" C";
            w3.innerHTML = "<b>Wind speed --></b> " + windspeed;
            input.value = "";


        })

        .catch(err => alert("Wrong city name!"));
})