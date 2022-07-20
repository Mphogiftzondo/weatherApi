import React,{useState} from 'react';
import './App.css';
function App() {
  const apikey ="dddab4732591562f5bbcc6e98e62af9e";
   
  
  const [weatherData,setWeatherData] = useState([{}])
  const [city,setCity]=useState("")
  const getWeather =(event)=>{
    if (event.key==="Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`).then(
        response => response.json()
      ).then(
        data =>{
          setWeatherData(data)
          setCity("")
        }
        
      )
    }
  }
 
  const dateBuilder =(d)=>{
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      let day=days[d.getDay()];
      let date=d.getDate();
      let month=months[d.getMonth()];
      let year=d.getFullYear();
      return `${day} ${date} ${month} ${year}`
  }
  
  return (
    <div className="App">
    <main>
      <div className="find-location">
        <input type="text" className="search-bar" placeholder="search..." onChange={e => setCity(e.target.value)} onKeyPress={getWeather} />
        <input type="submit" value="Find" onClick={getWeather}/>
      </div>
      {typeof weatherData.main ==="undefined" ? (
        <h1>welcome to weather app! Enter in a city to get the weather of.</h1>
      ):(	
              <div class="widget">
              <div class="weatherIcon">{weatherData.sys.country} </div>
         <div class="weatherInfo">
          <div class="temperature"><span>{Math.round(weatherData.main.temp)}&deg;C</span></div>
           <div class="description">    
               <div class="weatherCondition">{weatherData.weather[0].main}</div>    
                  <div class="place">{weatherData.name}</div>
                </div>
               </div>
               <div class="date">{dateBuilder(new Date())}</div>
            </div>
						
      )}
     


				
    </main>
    </div>
  );
}

export default App;
