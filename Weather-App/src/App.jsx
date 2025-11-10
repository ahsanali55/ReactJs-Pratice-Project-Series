import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import WeatherStore from './store/WeatherStore'
import SearchBar from './components/SearchBar'
import WholeDetail from './components/weatherWholeDetail/WholeDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WeatherStore>
     <NavBar />
    </WeatherStore>
    <SearchBar />
    <WholeDetail />
    </>
  )
}

export default App
