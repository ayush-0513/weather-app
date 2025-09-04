import React, { useState } from 'react'
import WeatherBackground from './components/WeatherBackground'

const App = () => {

  const [weather, setWeather] = React.useState(null);
  const [city, setCity] = React.useState('');
  const [suggestion, setSuggestion] = React.useState([]);
  const [unit, setUnit] = React.useState('C');

  const API_KEY= '40d72887c44b432ba63ba74e7e3b36db'

  

  const getWeatherCondition = () => weather && ({
    main: weather.weather[0].main,
    isDay: Date.now() / 1000 > weather.sys.sunrise && Date.now() / 1000 < weather.sys.sunset

  })
  return (
    <div className='min-h-screen'>
      <WeatherBackground condition={getWeatherCondition()} />
      <div className='flex items-center justify-center p-6 min-h-screen'>
        <div className='bg-transparent backdrop-filter backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-md text-white
        w-full border-white/30 relative z-10'>
          <h1 className='text-4xl font-extrabold text-center mb-6'>Weather App</h1>

          {weather ? (
            <form onSubmit={handleSearch} className='flex flex-col relative'>
              <input value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter city or Country (min 3 letters)' 
               className=' mb-4 p-3 rounded border border-white bg-transparent text-white placeholder-white focus:outline-0
               focus:border-blue-300 transition duration-300' />
               {suggestion.length > 0 && (
                <div className='absolute top-12 left-0 right-0 bg-transparent shadow-md rounded z-10'>
                {suggestion.map((s) => (
                  <button type='button' key={`${s.lat}-${s.lon}`}
                  onClick={() => fetchWeatherData(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${s.lat}&lon=${s.lon}&appid={API key}`
                    `${s.name}, ${s.country}${s.state ? `, ${s.state}` : ''}`

                  )} className='block hover:bg-blue-700 bg-transparent px-4 py-2 text-left w-full
                  transition-colors'>
                    {s.name}, {s.country}{s.state && `, ${s.state}`}


                  </button>
                ))}

                </div>
              )}
              <button type='submit' className='bg-purple-700 hover:bg-blue-700 text-white font-semibold py-2
              px-4 rounded transition-colors'>Get Weather</button>
      
            </form>
          ): (
            <div className='mt-6 text-center transition-opacity duration-500'>
              <button onClick={() => { setWeather(null); setCity('') }}
                className='bg-purple-900 hover:bg-blue-700 text-white font-semibold py-1 px-3
                rounded transition-colors '>
                  New Search

              </button>

              


              </div>
            
          )}
          





        </div>

      </div>
    </div>
  )
}

export default App