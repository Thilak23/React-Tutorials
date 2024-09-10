import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comp1 from './Components/props/Comp1'
import PropsDrilling from './Components/Propsdrilling/PropsDrilling'
import Usestatehook from './Components/Hookks/usestatehook'
import ToggleDarkMode from './Components/Hookks/ToggleDarkMode'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp1/>
    <PropsDrilling/>
    <Usestatehook/>
    <ToggleDarkMode/>
  </StrictMode>
)
