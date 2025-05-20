'use client';
import CanvasJSReact from '@canvasjs/react-charts';
import React, { Component } from 'react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

type DataSeriesEvent = {
  dataSeries: {
    visible?: boolean;
  };
};

type ChartRef = {
  render: () => void;
};

class BarChart extends Component {
  chart: ChartRef | null = null;

  constructor(props: object) {
    super(props);
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }

  toggleDataSeries(e: DataSeriesEvent) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    if (this.chart) {
      this.chart.render();
    }
  }

  override render() {
    const options = {
      creditsSettings: {
        enabled: false,
      },
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: 'April',
        horizontalAlign: 'left',
        fontWeight: 'normal',
        fontSize: 24,
        fontFamily: 'arial',
      },
      axisX: {
        gridThickness: 0, // removes vertical grid lines
        lineThickness: 0, // removes horizontal axis line
        tickLength: 0,
      },
      axisY: {
        gridThickness: 0.2, // removes horizontal grid lines
        lineThickness: 0, // removes horizontal axis line
        color: 'rgba(238, 238, 238,0.6)',
        labelFontSize: 0,
        tickLength: 0,
      },
      toolTip: {
        fontColor: '#fff',
        cornerRadius: 8,
        shared: true,
        reversed: true,
        backgroundColor: 'rgb(24, 59, 78)',
        fontSize: 16,
      },
      height: 260,
      data: [
        {
          type: 'stackedColumn',
          cornerRadius: 5,
          name: 'done',
          showInLegend: false,
          yValueFormatString: '#,###',
          dataPoints: [
            { label: '29', y: 9, color: 'rgba(170, 170, 160, 0.7)' },
            { label: '30', y: 7, color: 'rgba(170, 170, 160, 0.7)' },
            { label: '01', y: 13, color: 'rgba(170, 170, 160, 0.7)' },
            { label: '02', y: 11, color: 'rgba(170, 170, 160, 0.7)' },
            { label: '03', y: 6, color: 'rgba(170, 170, 160, 0.7)' },
            { label: '04', y: 9, color: 'rgba(170, 170, 160, 0.7)' },
            { label: '05', y: 14, color: 'rgba(170, 170, 160, 0.7)' },
            { label: '06', y: 5, color: 'rgba(170, 170, 160, 0.7)' },
            { label: '07', y: 12, color: 'rgba(170, 170, 160, 0.7)' },
          ],
        },
        {
          type: 'stackedColumn',
          cornerRadius: 5,
          name: 'in proccess',
          showInLegend: false,
          yValueFormatString: '#,###',
          dataPoints: [
            { label: '29', y: 9, color: 'rgba(190, 190, 190, 0.7)' },
            { label: '30', y: 7, color: 'rgba(190, 190, 190, 0.7)' },
            { label: '01', y: 13, color: 'rgba(190, 190, 190, 0.7)' },
            { label: '02', y: 11, color: 'rgba(190, 190, 190, 0.7)' },
            { label: '03', y: 6, color: 'rgba(190, 190, 190, 0.7)' },
            { label: '04', y: 9, color: 'rgba(190, 190, 190, 0.7)' },
            { label: '05', y: 14, color: 'rgba(190, 190, 190, 0.7)' },
            { label: '06', y: 5, color: 'rgba(190, 190, 190, 0.7)' },
            { label: '07', y: 12, color: 'rgba(190, 190, 190, 0.7)' },
          ],
        },
        {
          type: 'stackedColumn',
          cornerRadius: 5,
          name: 'to do',
          showInLegend: false,
          yValueFormatString: '#,###',
          dataPoints: [
            { label: '29', y: 9, color: 'rgba(217, 215, 210, 0.8)' },
            { label: '30', y: 7, color: 'rgba(217, 215, 210, 0.8)' },
            { label: '01', y: 13, color: 'rgba(217, 215, 210, 0.8)' },
            { label: '02', y: 11, color: 'rgba(217, 215, 210, 0.8)' },
            { label: '03', y: 6, color: 'rgba(217, 215, 210, 0.8)' },
            { label: '04', y: 9, color: 'rgba(217, 215, 210, 0.8)' },
            { label: '05', y: 14, color: 'rgba(217, 215, 210, 0.8)' },
            { label: '06', y: 5, color: 'rgba(217, 215, 210, 0.8)' },
            { label: '07', y: 12, color: 'rgba(217, 215, 210, 0.8)' },
          ],
        },
      ],
    };
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full">
        <CanvasJSChart
          options={options}
          onRef={(ref: ChartRef | null) => {
            this.chart = ref;
          }}
        />
      </div>
    );
  }
}

export default BarChart;
