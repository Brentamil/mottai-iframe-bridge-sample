import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mottaiLogo from './assets/maintoolbarlogolight.png'
import './App.css'
import {iframe, xApiAttributeName}  from 'mottai-iframe-bridge'
import { XCommand } from 'mottai-iframe-bridge/dist/XCommand/XCommand'

function App() {
  // const [count, setCount] = useState(0)
  const [ticker, setTicker] = useState('BHP')
  const [exchange, setExchange] = useState('ASX')

  return (
    <>
      <div>
        <a href="https://dev.mottai.cloud/" target="_blank">
          <img src={mottaiLogo} className="logo" alt="Mottai logo" />
        </a>
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
        <div className="row"><span>Exchange:</span><input value={exchange} onChange={(e) => setExchange(e.target.value)} /></div>
        <button onClick={() => {
          const fit = window[xApiAttributeName] as iframe<XCommand>;
          if (fit) {
            fit.sendCommand({ type: 'popup_neworder', params: { side: 'buy', instrument: { symbol: ticker, exchange }, quantity: 1000, price: 100.00}} as XCommand)
          }
        }}>BUY</button>
        <button onClick={() => {
          const fit = window[xApiAttributeName];
          if (fit) {
            fit.sendCommand({ type: 'popup_profile', params: { instrument: { symbol: ticker, exchange }}} as XCommand)
          }
        }}>Profile</button>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
        <p>You can access this sample code at</p><a target="_blank" href="https://github.com/Brentamil/mottai-iframe-bridge-sample">github.com</a>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
