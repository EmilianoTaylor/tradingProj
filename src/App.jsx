import { useState } from 'react'
import './App.css'
import Background from './components/Background/backGround'
import NavigationPanel from './components/NavigationPanel/navigationPanel'
import BalanceBlock from './components/BalanceBlock/balanceBlock'
import GraphBlock from './components/GraphBlock/graphBlock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
			<Background />
			<NavigationPanel />
			<BalanceBlock />
			<GraphBlock />
    </>
  )
}

export default App
