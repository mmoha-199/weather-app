// Personal API Key for OpenWeatherMap API
let apiKey = '&appid=5825686540fc9030090ec177f22c9e72';
const newZip =  document.getElementById('zip');
const feEls = document.getElementById('feelings');
// Event listener to add function to existing HTML DOM element
const seachBTN = document.getElementById('generate');
seachBTN.addEventListener('click', async(e) =>{
  e.preventDefault();
    
    await getWeathData();
    getCityData();

});
seachBTN.addEventListener('enter', async(e) =>{
  e.preventDefault();
  await getWeathData();
  getCityData();

});

/* Function to GET Webmap API Data*/
const getWeathData = async () =>{ 
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${newZip.value}&units=metric${apiKey}`;
    const dt = new Date();
    let nEwDate = dt.getMonth() + 1 + ' / ' + dt.getDate() + ' / ' + dt.getFullYear();

    const uSerData = {
      newZip: newZip.value,
      feel: feEls.value,
      nEwDate
    }
    await fetch(url)
    .then(response => response.json())
    .then(data => addCityData({...data, ...uSerData}))
    .catch(error => console.log(`Error: ${error}`));
 
};

// Send the Project data to the addCity path
const addCityData = (data) => {
  const newData = data;
  fetch('/addCity', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
  }) 
  .then(response => response.json())
  .catch(error => console.log("error", error));
};
/*Function to GET Project Data from the addCity path */
const getCityData = () => {
  fetch('/addCity')
  .then(response => response.json())
  .then(data => updateUI(data))
  .catch(error => console.log("error", error));
};
/*Function to update User Interface*/
const updateUI =  (allData) => {
  const {country,name,temp,feel,newDate,feels_like,humidity,pressure} = allData;
  document.getElementById('currt-count').innerHTML = allData.sys.country;
  document.getElementById('country').innerHTML = allData.sys.country;
  document.getElementById('currt-cit').innerHTML = allData.name;
  document.getElementById('degree').innerHTML = allData.main.temp;
  document.getElementById('temp').innerHTML = allData.main.temp;
  document.getElementById('content').innerHTML = allData.feel;
  document.getElementById('date').innerHTML = allData.nEwDate;
  document.getElementById('fel-like').innerHTML = allData.main.feels_like;
  document.getElementById('humid').innerHTML = allData.main.humidity;
  document.getElementById('presr').innerHTML = allData.main.pressure;
}
 




  
 