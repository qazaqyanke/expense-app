import React from "react";
import Chartbar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value),
          totalMaximum = Math.max(...dataPointValues);
    
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => ( 
            <Chartbar 
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label} 
            key={dataPoint.label}
            />))}
        </div>
    )
}

export default Chart;  