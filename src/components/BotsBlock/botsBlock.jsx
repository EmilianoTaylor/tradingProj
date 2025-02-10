import './botsBlock.scss'
import botAttackOne from '../extra/src/layers/Bots/fullBots/botOrange.png'
import placeBot from '../extra/src/layers/Bots/fullBots/botNone.png'
import botBalance from '../extra/src/layers/Bots/fullBots/botBlue.png'
import botDefence from '../extra/src/layers/Bots/fullBots/botGreen.png'
import megabot from '../extra/src/layers/Bots/fullBots/botYellow.png'
import botAttackTwo from '../extra/src/layers/Bots/fullBots/botRed.png'
import arrow from '../extra/src/layers/Bots/arrows/arrow.png'
import arrows from '../extra/arrows.png'
import data from '../../data/data.min.json'


const BotsBlock = ({ selectedInterval }) => {

	const bots = [
		{ name: "ATTACK", icon: botAttackOne, serverName: "orange_bot" },
    { name: "PLACE BOT HERE", icon: placeBot },
    { name: "BALANCE", icon: botBalance, serverName: "blue_bot" },
    { name: "DEFENCE", icon: botDefence, serverName: "green_bot" },
    { name: "MEGABOT", icon: megabot, serverName: "yellow_bot" },
    { name: "ATTACK", icon: botAttackTwo, serverName: "red_bot" }
	];

	return (
	<div className="botsBlock">
		{bots.map((bot, index) => {
			const botData = data.bots.find(b => b.name === bot.serverName);
			const change = botData ? botData[selectedInterval] : null;
			const changeColor = change ? (change > 0 ? "green" : "red") : "gray";

			return (
				<div key={index} className="bot-card">
					<img src={bot.icon} className="bot-icon" />
					<p className="bot-name">{bot.name}</p>
					{change !== null && <p className="bot-change" style={{ color: changeColor }}>{change}%</p>}
				</div>
			);
		})}
		<img src={arrow} className="arrow arrow-1"/>
		<img src={arrow} className="arrow arrow-2"/>
		<img src={arrow} className="arrow arrow-3"/>
		<img src={arrow} className="arrow arrow-4"/>
		{/* <img src={arrows} className="arrowsBlock" /> */}
	</div>
	)
}

export default BotsBlock;