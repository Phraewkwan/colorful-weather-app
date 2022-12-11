import './App.css';
import Air from './components/Air/Air';
import Daily from './components/DailyWeather/Daily';
import SmallWeatherCard from './components/SmallWeatherCard/SmallWeatherCard';
import SunriseAndSunset from './components/SunriseAndSunset/SunriseAndSunset';
import User from './components/Users/User';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="leftside">
          <Daily />
          <div className="left__wrapper">
            <div className="left">
              <Air />
            </div>
            <div className="right">
              <SunriseAndSunset />
            </div>
          </div>
        </div>
        <div className="rightside">
          <User />
          <WeatherCard />
          <SmallWeatherCard bgcolor='#fd504da7' />
          <SmallWeatherCard bgcolor='#d68f56' />
        </div>
      </div>
    </div>
  );
}

export default App;
