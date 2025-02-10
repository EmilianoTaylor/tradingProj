import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background/backGround'
import NavigationPanel from './components/NavigationPanel/navigationPanel'
import BalanceBlock from './components/BalanceBlock/balanceBlock'
import GraphBlock from './components/GraphBlock/graphBlock'
import ToolPanel from './components/ToolPanel/ToolPanel'
import BotsBlock from './components/BotsBlock/botsBlock'
import TimeIntervalBlock from './components/TimeInteralBlock/timeIntervalBlock'

function App() {
	const [selectedInterval, setSelectedInterval] = useState(() => {
    return localStorage.getItem("selectedInterval") || "all_time";
  });

  useEffect(() => {
    localStorage.setItem("selectedInterval", selectedInterval);
  }, [selectedInterval]);

  return (
    <>
			<Background />
			<NavigationPanel />
			<BalanceBlock />
			<GraphBlock selectedInterval={selectedInterval} />
			<ToolPanel />
      <BotsBlock selectedInterval={selectedInterval} /> 
      <TimeIntervalBlock onIntervalChange={setSelectedInterval} />
    </>
  )
}

export default App
