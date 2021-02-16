/* Global Variables */
const geonamesID = process.env.GEONAMESID;
const pixabayKey = process.env.PIXABAYKEY;
const weatherbitKey = process.env.WEATHERBITKEY;

//to handle all APIs calls
export function handler() {

  calculateCountDownDate();

  const cityName = document.getElementById("city").value;

  getCityInfo(geonamesID, cityName).then(function (data) {
    const country = data.geonames[0].countryName;
    const lat = data.geonames[0].lat;
    const long = data.geonames[0].lng;

    getWeather(weatherbitKey, lat, long).then(function (data) {
      const temp = data.data[0].temp;
      const icon = data.data[0].weather.icon;
      
      getCityImg(pixabayKey, cityName).then(function (data) {
        const imageUrl = data.hits[0].webformatURL;
        getFlag (country).then(function(data){
          const flagUrl = data[0].flag;
          updateUI(imageUrl, cityName, country, flagUrl, temp, icon);
        });
        
      });
    });
  });
}

/*GET requests*/

//GET request to the geonames API
const getCityInfo = async (geonamesID, cityName) => {
  const res = await fetch(
    `http://api.geonames.org/searchJSON?q=${cityName}&username=${geonamesID}`
  );
  try {
    return await res.json();
  } catch (error) {
    console.log("error", error);
  }
};

const getCityImg = async (pixabayKey, cityName) => {
  const URL = `https://pixabay.com/api/?key=${pixabayKey}&q=${cityName}`;
  const res = await fetch(URL);
  try {
    return await res.json();
  } catch (error) {
    console.log("error", error);
  }
};

//GET request to weatherbit API
const getWeather = async (weatherbitKey, lat, long) => {
  const res = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${weatherbitKey}`
  );
  try {
    return await res.json();
  } catch (error) {
    console.log("error", error);
  }
};

//GET request to restCountries API
const getFlag = async (countryName) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${countryName}`
  );
  try {
    return await res.json();
  } catch (error) {
    console.log("error", error);
  }
};

/*Update UI*/
function updateUI(imageUrl, cityName, country, flagUrl, temp, icon) {
  document.getElementById("cityImg").innerHTML = `<img src="${imageUrl}" alt="weather photo" >`;
  document.getElementById(
    "tripText"
  ).innerHTML = `My trip to:${cityName}, ${country}`;
  document.getElementById("weather").innerHTML = `The weather is: ${temp}°`;
  document.getElementById("weatherImg").innerHTML = `<img style='height: 40px; width: 40px;' src="https://www.weatherbit.io/static/img/icons/${icon}.png" alt="weather photo" >`;
  document.getElementById("flagImg").innerHTML = `<img class='inline-block' style='height: 30px; width: 30px;' src="${flagUrl}" alt="weather photo" >`;
}

/*Count Down Departing Date*/
function calculateCountDownDate() {
  // Get Departing date
  const leavingDate = document.getElementById("date").value;
  const countDownDate = new Date(leavingDate);
  // Get today's date
  const now = new Date();
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // Output the result in an element with id="countDown"
  document.getElementById("countDown").innerHTML = `This is ${days} days away `;
  // If the count down is over, write some text
  if (distance < 0) {
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}
