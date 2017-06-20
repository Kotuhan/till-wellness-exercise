import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import calculateTimeSeries from '../utils/calculateTimeSeries';

class Chart extends Component {  
  getData = () => {
    const { accountsSum, monthPayment } = this.props;

    return calculateTimeSeries(accountsSum, monthPayment);
  }

  render() {
    const data = this.getData();

    return (
      <div className="chart">
        <div className='line-chart-wrapper'>
          {data.length > 0 &&
            <LineChart
              width={400}
              height={400}
              data={data}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis dataKey="left" />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="left" stroke="#ff7300" yAxisId={0} />
            </LineChart>
          }
        </div>
      </div>
    );
  }
}

export default Chart;