let baseURL = 'api.openweathermap.org/data/2.5/weather?q='
let apiKey = '5825686540fc9030090ec177f22c9e72';
const searchBTN = document.getElementById('search-btn');

searchBTN.addEventListener('click', cityNfunc);
const cityNfunc = async (baseURL, city, key)=>{
 
    const res = await fetch(baseURL+city+key)
    try {

      const data = await res.json();
      console.log(data)
      // 1. We can do something with our returned data here-- like chain promises!

      // 2. 
      // postData('/addAnimal', data)
    }  catch(error) {
      // appropriately handle the error
      console.log("error", error);
    }
  }