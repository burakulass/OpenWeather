const url ="https://api.openweathermap.org/data/2.5/"
const key="d61f85b3e0580dd5cafff75f06a90590"

const setQuery = (e)=>{
  if(e.keyCode =="13")
      getResult(searchBar.value)
  
}
  const getResult =( cityName)=>{
      //console.log(cityName) kontrol için
      let query =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
      console.log(query)  // Api yi konsola yazdı
      fetch(query)
      .then(weather =>{
        return weather.json()
      })
      .then(displayResult)
    }

const displayResult = (result)=>{
  let city = document.querySelector(".city") // htmldeki city id mizi seçtik
  city.innerHTML =`${result.name}, ${result.sys.country}` // şehrin ismini ve ülkeyi Json dan aldı

  let temp =document.querySelector(".temp")
  temp.innerHTML = `${Math.round(result.main.temp)}°` // api deki main altından temp'i alıp sayfaya yazdı

 
  let desc =document.querySelector(".desc")
  desc.innerHTML= `${result.weather[0].description}` 
  //  api deki weather altından temp'i alıp sayfaya yazdı
 
  

  let minmax = document.querySelector(".minmax")
  minmax.innerHTML = `${Math.round(result.main.temp_min)}° / ${Math.round(result.main.temp_max)}°`

 

}





// to get the city the user typed
const searchBar = document.getElementById("searchBar")

// to check "written a city?"
searchBar.addEventListener('keypress', setQuery)



