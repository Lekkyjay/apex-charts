import React, { useState } from 'react'
import Chart from "react-apexcharts";

const PopChart = () => {
  const initialState_options = {
    chart: {
      height: 450,
      width: "100%",
      type: "bar",
      background: "#f4f4f4",
      foreColor: "#333"
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      categories: [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Philadelphia",
        "Phoenix",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose"
      ]
    },
    fill: {
      colors: ["#F44336"]
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Largest US Cities By Population",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px"
      }
    }
  }

  const initialState_series = [{
    name: "Population",
    data: [
      8550405,
      3971883,
      2720546,
      2296224,
      1567442,
      1563025,
      1469845,
      1394928,
      1300092,
      1026908
    ]
  }]

  const onClick = () => {
    setOptions({...options, plotOptions: {
      bar: {
        horizontal: !options.plotOptions.bar.horizontal
      }
    }})
  }
  
  const [options, setOptions] = useState(initialState_options)
  const [series, setSeries] = useState(initialState_series)

  return (
    <div class="container">
      <Chart 
        options = {options}
        series = {series}
        type = "bar"
        height = "450"
        width = "100%"
      />
      <button onClick={onClick}>Horizontal/Vertical</button>
    </div>
  )
}

export default PopChart
