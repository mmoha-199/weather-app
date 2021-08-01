# weather-app
*this 's a weather application project for udacity*
this project contain:
## project structure: 
*node modules folder
* website-folder
    * js-file (app)
    * html-file (index)
    * css-file (style)
* json-file (package-lock)
* json-file (package)
* readme-file
* js-file (server)

## Node:
*In this project I used new skills to getting  data from a weather API map and user then send it back to the UI with the help of *Async* function 
* 1  :
    * create a personal API Key for OpenWeatherMap API and :
       ```javascript
       let apiKey = '&appid=5825686540fc9030090ec177f22c9e72';
 
* 2:
    * create an event listener to add function to existing HTML DOM element:
       ```javascript
       seachBTN.addEventListener('click', async(e) =>{
  e.preventDefault();
    
    await getWeathData();
    getCityData();

});
* 3 :
    * create a function to GET Webmap API Data and add the date :
       ```javascript
       const getWeathData = async () =>{ 
         const url = `https://api.openweathermap.org/data/2.5/weather?zip=${newZip.value}&units=metric${apiKey}`;
         await fetch(url)
         .then(response => response.json())
         .catch(error => console.log(`Error: ${error}`));
        };
* 4:
    * Send the API data and the User data  to a new path:
       ```javascript 
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
       
* 5:
    *  Get the same data plus the new data object from the new path:
        ```javascript
        const getCityData = () => {
          fetch('/addCity')
          .then(response => response.json())
          .then(data => updateUI(data))
          .catch(error => console.log("error", error));
        };
* 6:
    *  update User Interface:
        ```javascript
        const updateUI =  (allData) => {
          const {country,name,temp,feel,newDate,feels_like,humidity,pressure} = allData;
          document.getElementById('currt-count').innerHTML = allData.sys.country;
          document.getElementById('country').innerHTML = allData.sys.country;
          document.getElementById('currt-cit').innerHTML = allData.name;
        };

## Sources:

* https://openweathermap.org/
* https://github.com/udacity/fend/tree/refresh-2019