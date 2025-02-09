import './toolPanel.scss'
import dashboard from '../extra/src/layers/Tool_bar/note/dashboard.png'
import botmarket from '../extra/src/layers/Tool_bar/note/botmarket.png'
import coinPrices from '../extra/src/layers/Tool_bar/note/coinPrices.png'
import megabot from '../extra/src/layers/Tool_bar/note/megabot.png'
import profileNote from '../extra/src/layers/Tool_bar/note/profile.png'

const ToolPanel = () => {
	const tools = [
    { tool: 'Dashboard', img: dashboard },
    { tool: 'Megabot', img: megabot },
    { tool: 'Bot market', img: botmarket },
    { tool: 'Coin prices', img: coinPrices },
    { tool: 'Profile', img: profileNote },
  ];
	return (
		<div className='toolPanel'>
			{tools.map((tool, index) => (
        <div className="toolItem" key={index}>
          <img className='toolIcon' src={tool.img}/>
          <span className='toolName'>{tool.tool}</span>
        </div>
      ))}
		</div>
	)
}

export default ToolPanel;