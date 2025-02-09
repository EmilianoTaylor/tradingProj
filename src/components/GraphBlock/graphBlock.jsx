import "./graphBlock.scss"
import graph from '../extra/src/layers/Graph/graph/graph.png'

const GraphBlock = () => {
	const dates = [
    { date: '22.04' },
    { date: '23.04' },
    { date: '24.04' },
    { date: '25.04' },
    { date: '26.04' },
  ];

	return (
		<div className="graphBlock">
			<img className="graph" src={graph}/>
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