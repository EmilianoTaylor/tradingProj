import './balanceBlock.scss'
import coin from '../extra/src/layers/balance/Hicon.png'
import data from '../../data/data.min.json'

const BalanceBlock = () => {
	const { trading_capital, trading_capital_currency, balance, on_hold } = data

	return (
		<div className='balanceBlock'>
			<div className='capital'>
				<span className='capitalTitle'>TRADING CAPITAL</span>
				<span className='capitalCurrency'>{trading_capital} {trading_capital_currency}</span>
			</div>
			<ul className='balance'>
				<li className='balanceValue'>
					BALANCE: 
					<strong> {balance} </strong>
					<img src={coin}/>
				</li>
				<li className='onholdValue'>
					ON HOLD: 
					<strong> {on_hold} </strong>
					<img src={coin}/>
				</li>
			</ul>
		</div>
	)
}

export default BalanceBlock;