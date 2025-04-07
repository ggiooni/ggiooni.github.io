if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", populateTableRows);
} else {
    // DOMContentLoaded has already fired
    populateTableRows();
}

async function populateTableRows() { 
    await fetch('https://api.openweathermap.org/data/2.5/weather?q=dublin,ie&units=metric&APPID=bc425ac2188d406c884f4fdd88b339f0')

      .then(response => {
        if (response.status !== 200) {
          console.log('Error Status Code: ' + response.status);
          return;
        }
        response.json().then((data) => {	
          // Test if data is being received
          console.log(data);
          let strTableRows = `
          <tr>
              <td><span>Summary</span></td>
              <td>${data["weather"][0]["description"].charAt(0).toUpperCase() + data["weather"][0]["description"].slice(1)}</td>
          </tr>
          <tr>
              <td><span>Temperature</span></td>
              <td>${data["main"]["temp"] + "°C"}</td>
          </tr>
          <tr>
              <td><span>Humidity</span></td>
              <td>${data["main"]["humidity"] + " %"}</td>
          </tr>
          <tr>
              <td><span>Pressure</span></td>
              <td>${data["main"]["pressure"] + " Pa"}</td>
          </tr>`;
          document.querySelector("#table-weather-dublin tbody").innerHTML = strTableRows;
        });
             
      })
      .catch(error => {
          // handle any error
          console.log('Fetch Error:', error);
      });
}

function change_background() {
    let d = new Date();
    let n = d.getHours();
    if (n > 23 || n <= 6) {
        document.querySelector(".theme-js").style.backgroundImage = "url('assets/img/dublin-night.jpg')";
    } else {
        document.querySelector(".theme-js").style.backgroundImage = "url('assets/img/dublin-day.jpg')";
    }
}

change_background();