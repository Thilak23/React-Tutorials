import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Comp1 from './Comp1'
import PropsDrilling from './Components/Propsdrilling/PropsDrilling'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Comp1/> */}
    <PropsDrilling/>
  </StrictMode>
)
