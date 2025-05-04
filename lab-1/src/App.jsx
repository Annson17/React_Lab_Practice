import { useState } from 'react'
import './App.css'

function App() {
  const [text, settext] = useState('')

  return (
    <div className='App'>
    <input type="text" placeholder="Type something... " value={text} onChange={(e) => settext(e.target.value)} />
    <h1>{text}</h1>
    <h2>Characters Typed:{text.length}</h2>

    </div>

  )
}

export default App
