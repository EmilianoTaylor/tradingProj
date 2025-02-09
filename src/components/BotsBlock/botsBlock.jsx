import './botsBlock.scss'
import botAttackOne from '../extra/src/layers/Bots/fullBots/botOrange.png'
import placeBot from '../extra/src/layers/Bots/fullBots/botNone.png'
import botBalance from '../extra/src/layers/Bots/fullBots/botBlue.png'
import botDefence from '../extra/src/layers/Bots/fullBots/botGreen.png'
import megabot from '../extra/src/layers/Bots/fullBots/botYellow.png'
import botAttackTwo from '../extra/src/layers/Bots/fullBots/botRed.png'

const BotsBlock = () => {
	const bots = [
		{ name: "ATTACK", icon: botAttackOne, change: "-8.2%", color: "red" },
		{ name: "PLACE BOT HERE", icon: placeBot, change: "", color: "gray" },
		{ name: "BALANCE", icon: botBalance, change: "-3.7%", color: "red" },
		{ name: "DEFENCE", icon: botDefence, change: "+2.5%", color: "green" },
		{ name: "MEGABOT", icon: megabot, change: "+3.6%", color: "green" },
		{ name: "ATTACK", icon: botAttackTwo, change: "+13.7%", color: "green" }
	];
	

	return (
		<div className="botsBlock">
      {bots.map((bot, index) => (
        <div key={index} className={`bot-card`}>
          <img src={bot.icon} alt={bot.name} className="bot-icon" />
          <p className="bot-name">{bot.name}</p>
          {bot.change && <p className="bot-change" style={{ color: bot.color }}>{bot.change}</p>}
        </div>
      ))}
    </div>
	)
}

export default BotsBlock;