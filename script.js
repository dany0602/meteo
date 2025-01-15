let city = "paris"
const apikey = '5d454e551331b436878b024caaf4aa3a'
let url = `https://api.openweathermap.org/data/2.5/forecast?lang=fr&units=metric&q=${city}&appid=${apikey}`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.city.name)
        console.log()
        console.log()
        console.log(data.list[0].main.temp_max)
        console.log(data.list[0].main.temp_min)
        console.log()
        console.log()




        document.querySelector('#interface').innerHTML=`
            <div class="soleil">
            <p class="temperature">${data.list[0].main.temp}°c</p>
            <div class="date">
            <p class="city">${data.city.name}</p>
              <p>${moment(data.list[0].dt_txt).locale("fr").format('L')}</p>
              <p>min:${data.list[0].main.temp_min}°c / max:${data.list[0].main.temp_max}°c </p>
            </div>
          </div>

          <div class="pluie">
            <img class="satellite" src="./asset/th.jpg" alt="image satellite" />
            <h1>Température ressentie :${data.list[0].main.feels_like}° C</h1>
            <img class="iconMeteo" src="https://openweathermap.org/img/wn/10d@2x.png" alt="img">
            <p>${data.list[0].weather[0].description}</p>
          </div>
        `








    })




