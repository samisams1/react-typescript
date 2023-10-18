import React from 'react';
import { useQuery } from '@apollo/client';
import Spinner from '../../Spinner';
import { DAY_REPORT_QUERY } from '../../../graphql/Report';
import Chart from "react-apexcharts";

const YearReportChart = () => {
  const {loading,error,data} = useQuery(DAY_REPORT_QUERY);
  if(loading) return <Spinner/>
  if (error) return <p>{error.message}</p>
  const saleData = data.dailyReport.map((row:any)=>(
              [row.id,row.grossAmount
              ]
          ));
  const series = [ //data on the y-axis
    {
      name: "Daily Report",
      data: saleData
    }
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart'},
    xaxis: {
      categories: saleData
    }
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
      />
    </div>
  )
}

export default YearReportChart;