import React from 'react'
import WeatherBackground from './components/WeatherBackground'

const App = () => {

  const getWeatherCondition = () => weather && ({
  return (
    <div className='min-h-screen'>
      <WeatherBackground condition={getWeatherCondition()} />
    </div>
  )
}

export default App