import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function addValue() {
    setCount((prev) => prev + 1)
  }
  function removeValue() {
    setCount((prev) => prev - 1)
  }

  return (
    <div className="container">
      <h1 className="count">{count}</h1>

      <div className="btn-group">
        <button className="btn-1" onClick={addValue}>
          Increment
        </button>
        <button className="btn-1" onClick={removeValue}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
