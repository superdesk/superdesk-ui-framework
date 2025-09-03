import * as React from 'react';
import {ChartData, ChartOptions} from 'chart.js';
interface IProps {
    data: ChartData;
    options: ChartOptions;
    width: string;
    height: string;
}
export declare class DonutChart extends React.Component<IProps, {}> {
    render(): JSX.Element;
}
export {};
