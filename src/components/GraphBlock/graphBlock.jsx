import "./graphBlock.scss"
import graph from '../extra/src/layers/Graph/graph/graph.png'

const GraphBlock = ({ selectedInterval }) => {
  const intervalStyles = {
    "all_time": { width: "120%", left: "-7%" },
    "30d": { width: "160%", left: "-25%" },
    "7d": { width: "200%", left: "-44%" },
    "24h": { width: "240%", left: "-62%" }
  };

	const graphStyle = intervalStyles[selectedInterval] || intervalStyles["all_time"];

	const dates = [
    { date: '22.04' },
    { date: '23.04' },
    { date: '24.04' },
    { date: '25.04' },
    { date: '26.04' },
  ];

	return (
		<div className="graphBlock">
			<img className="graph" src={graph} style={graphStyle}/>
			<div className="graphResult">
				+32.3%
			</div>
			<div className="dateStrip">
      {dates.map((date, index) => (
        <div key={index} className="singleDate">
          {date.date}
        </div>
				))}
			</div>
		</div>
	)
}

export default GraphBlock;