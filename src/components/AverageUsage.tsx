import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { LegendComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([LegendComponent, GaugeChart, CanvasRenderer, TitleComponent]);

const option = {
  tooltip: {},
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1000,
      pointer: { show: false },
      progress: {
        show: true,
        overlap: true,
        roundCap: true,
        width: 20,
      },
      axisLine: {
        lineStyle: {
          width: 20,
        },
      },
      title: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      detail: { show: false },
      data: [
        { value: 440, name: 'Olshop' },
        { value: 640, name: 'Game Online' },
        { value: 880, name: 'Other' },
      ],
    },
  ],
};

const AverageUsage = () => {
  return (
    <div className="w-full relative">
      <h2>Average Usage</h2>
      <ReactEChartsCore
        echarts={echarts}
        option={option}
        style={{ height: '200px' }}
      />
      <div className="absolute top-[100px] left-[50%] -translate-x-[50%]  flex flex-col justify-center items-center">
        <p className="text-xs text-gray-300">Total expenses</p>
        <p className="text-2xl font-bold">$4565</p>
      </div>
    </div>
  );
};

export default AverageUsage;
