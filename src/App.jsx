import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Brands from './Components/Brands'
import Careers from './Components/Careers'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Brands/>
<Careers/> 
<Footer/>
    </>
  )
}

export default App
