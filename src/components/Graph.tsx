import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  LegendComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  TitleComponent,
]);

const xAxisData = [
  { value: 'Jan' },
  { value: 'Feb' },
  { value: 'Mar' },
  { value: 'Apr' },
  { value: 'May' },
  { value: 'Jun' },
  { value: 'Jul' },
  { value: 'Aug' },
  { value: 'Sep' },
  { value: 'Oct' },
  { value: 'Nov' },
  { value: 'Dec' },
];

const incomeData = [
  2000, 3000, 5678, 5675, 3434, 8087, 3344, 4056, 5678, 9873, 5677, 7632, 6798,
];

const expenseData = [
  4534, 8087, 3344, 4056, 8087, 3344, 4056, 5678, 9873, 5677, 7632, 6798,
];

const itemStyle = {
  borderRadius: 20,
  borderColor: 'transparent',
  borderWidth: 10,
};

const option = {
  title: {
    text: 'Graph',
    textStyle: { color: '#fff', fontWeight: 800 },
  },
  legend: {
    data: ['Income', 'Expense'],
    right: '100',
    icon: 'circle',
    textStyle: {
      fontSize: 14,
      color: '#FFFFFF',
    },
  },
  textStyle: {
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    data: xAxisData,
    axisTick: { show: false },
    axisLine: {
      lineStyle: {
        color: '#222222',
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: (value: number, index: number) => {
        if (value < 1000) {
          return `${value}`;
        } else {
          return `${value / 1000}k`;
        }
      },
    },
    splitLine: {
      lineStyle: {
        color: '#222222',
      },
    },
  },
  series: [
    {
      name: 'Income',
      data: incomeData,
      type: 'bar',
      stack: 'one',
      itemStyle: { ...itemStyle, color: '#384DF8' },
      barWidth: 20,
    },
    {
      name: 'Expense',
      data: expenseData,
      type: 'bar',
      stack: 'one',
      itemStyle: { ...itemStyle, color: '#F9CF57' },
      barWidth: 20,
    },
  ],
};

const Graph = () => {
  return (
    <section className="bg-[#13213C] rounded-2xl p-6 pb-0 overflow-auto">
      <ReactEChartsCore
        echarts={echarts}
        option={option}
        className="min-w-[450px]"
      />
    </section>
  );
};

export default Graph;
