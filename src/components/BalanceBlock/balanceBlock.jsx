import './balanceBlock.scss'
import coin from '../extra/src/layers/balance/Hicon.png'

const BalanceBlock = () => {


	return (
		<div className='balanceBlock'>
			<div className='capital'>
				<span className='capitalTitle'>TRADING CAPITAL</span>
				<span className='capitalCurrency'>1.00867 BTC</span>
			</div>
			<ul className='balance'>
				<li className='balanceValue'>
					BALANCE: 
					<strong> 10 850 </strong>
					<img src={coin}/>
				</li>
				<li className='onholdValue'>
					ON HOLD: 
					<strong> 24 000 </strong>
					<img src={coin}/>
				</li>
			</ul>
		</div>
	)
}

export default BalanceBlock;