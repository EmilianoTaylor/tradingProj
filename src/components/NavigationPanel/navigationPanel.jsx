import './navigationPanel.scss'
import menuIcon from '../extra/src/layers/Title_bar/menu_icon.png'
import dashboard from '../extra/src/layers/Title_bar/dashboard.png'
import refreshIcon from '../extra/src/layers/Title_bar/refresh.png'

const NavigationPanel = () => {

	return (
		<div className='navigationBlock'>
			<img className='menuIcon' src={menuIcon}/>
			<img className='dashboard' src={dashboard}/>
			<img className='refreshIcon' src={refreshIcon}/>
		</div>
	)
}

export default NavigationPanel;