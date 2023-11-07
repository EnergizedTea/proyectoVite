import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Personajes} from './components/personajes'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log('hola')
  }, [setCount])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Programando Ando</h2>
      <div className="card">
        <p>
          <h3>{count}</h3>
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          aumenta
        </button>
        <p>
        <button onClick={() => setCount((count) => count - 1)}>
          decrementa
        </button>
        </p>
      </div>
      <Personajes/>
    </>
  )
}

export default App
