import React from 'react';
import { Chart } from 'primereact/chart';
import { ChartData, ChartOptions } from 'chart.js';

interface IProps {
    data: ChartData; // For more information, please refer to chart.js documentationt
    options: ChartOptions; // For more information, please refer to chart.js documentationt
    width: string;
    height: string;
}

export class DonutChart extends React.Component<IProps, {}> {
    render() {
        return <Chart type="doughnut" width={this.props.width}
            height={this.props.height}
            data={this.props.data}
            options={this.props.options} />;
    }
}
