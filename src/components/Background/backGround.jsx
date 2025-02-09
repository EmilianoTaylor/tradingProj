import './background.scss'
import backgroundGradient from "../extra/src/layers/bg/bg_2.png"

const Background = () => {


	return (
		<div className="backgroundDiv">
			<img className="backgroundGradient" src={backgroundGradient}/>
		</div>
	)
}

export default Background;