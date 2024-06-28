import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value,setValue]=useState(0)

  let increaseValue=()=>{
    if (value<=19) {
      value=value+1
    }
    // setValue(prevValue=>prevValue+1) 
    // setValue(prevValue=>prevValue+1) 
    // setValue(prevValue=>prevValue+1) 
    // setValue(prevValue=>prevValue+1)
    return  setValue(value) 
  }
  let decreaseValue=()=>{
    if (value>=1) {
   value=value-1
    }
    return setValue(value)
  }
  return (
    <> 
      <h1>Vite + React counter project</h1>
      <p>Counter value : {value}</p>
      <button onClick={increaseValue}>Increase value {value}</button>
      <button onClick={decreaseValue}>Decrease value {value}</button>
    </>
  )
}

export default App
