import Header from './Header'
import Calender from './Calender'
import './App.css'

function App() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()+1 //月は０始まりのため+1
  




  return (
    <div className="App">
      
      <div id="header">
        <Header year={year} month={month} />
      </div>

      <div id="month-select-button">
        <button id="back">◀</button>
        <button id="next">▶</button>
      </div>

      <div id="calender">
        <Calender year={year} month={month} />
      </div>

    </div>
  )
}

export default App
