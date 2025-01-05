import './App.css'
import { Tooltip } from './components'

function App() {

  return (
    <>
      <div className='App'>
        <button data-tooltip='tooltip - click'>click me</button>
        <Tooltip variant='black'/>
      </div>
    </>
  )
}

export default App
