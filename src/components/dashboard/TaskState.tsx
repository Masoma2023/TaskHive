'use client';
import CanvasJSReact from '@canvasjs/react-charts';
/* App.js */
import React, { Component } from 'react';
// var CanvasJSReact = require('@canvasjs/react-charts');

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class TaskState extends Component {
  override render() {
    const options = {
      exportEnabled: false,
      animationEnabled: true,
      title: {
        text: 'Task by status',
        horizontalAlign: 'left',
        fontWeight: 'normal',
        fontSize: 24,
        fontFamily: 'arial',
        padding: 8,
      },
      toolTip: {
        fontColor: '#fff',
        cornerRadius: 8,
        shared: true,
        reversed: true,
        backgroundColor: 'rgb(24, 59, 78)',
        fontSize: 16,
      },
      height: 280,
      data: [{
        type: 'pie',
        startAngle: 75,
        toolTipContent: '<b>{label}</b>: {y}%',
        showInLegend: 'true',
        legendText: '{label}',
        indexLabelFontSize: 16,
        indexLabel: '{label} - {y}%',
        dataPoints: [
          { y: 32, label: 'To do', color: 'rgb(250, 204, 21)' },
          { y: 15, label: 'Done', color: 'rgb(34, 197, 94)' },
          { y: 22, label: 'In progress', color: 'rgb(239, 68, 68)' },
        ],
      }],
    };
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full">
        <CanvasJSChart options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
      </div>
    );
  }
}
export default TaskState;
