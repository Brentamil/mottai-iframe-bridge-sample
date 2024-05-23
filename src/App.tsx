import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {xApiAttributeName}  from 'mottai-iframe-bridge'

function App() {
  // const [count, setCount] = useState(0)
  const [ticker, setTicker] = useState('BHP')
  const [exchange, setExchange] = useState('ASX')

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
      {/* <h1>Vite + React</h1> */}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <div className="row"><span>Symbol:</span><input value={ticker} onChange={(e) => setTicker(e.target.value)} /></div>
        <div className="row"><span>Exch:</span><input value={exchange} onChange={(e) => setExchange(e.target.value)} /></div>
        <button onClick={() => {
          const fit = window[xApiAttributeName];
          if (fit) {
            fit.sendCommand({ type: 'popup_neworder', params: { side: 'buy', instrument: { symbol: ticker, exchange }, quantity: 1000, price: 100.00}})
          }
        }}>BUY</button>
        <button onClick={() => {
          const fit = window[xApiAttributeName];
          if (fit) {
            fit.sendCommand({ type: 'popup_profile', params: { instrument: { symbol: ticker, exchange }}})
          }
        }}>Profile</button>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
