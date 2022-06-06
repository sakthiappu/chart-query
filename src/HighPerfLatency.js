import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Charts from 'react-apexcharts'
import Navi from './Navigation'

const HighPerfLatency = () => {
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const operationName = []
    const timeDuration = []
    axios.get('https://prashanth-b-c.github.io/json/query_data_performace_high_latacy.json')
      .then(response => {
        console.log("response", response)
        response.data.map(item => {
          console.log("item", item)
          operationName.push(item.OperationName);
          timeDuration.push(item.DurationMs)
        })
        setCategory(operationName)
        setData(timeDuration)
        console.log("log", operationName, timeDuration)

      })
      .catch(err => {
        alert(err)
      })

  }, [])
  return (
    <div className='App'>
      <Navi></Navi>
      <Charts
        type="bar"
        width={1000}
        height={500}

        series={[{
          name: 'Time',
          data: data,
        }]}
        options={{
          noData: {
            text: "Empty Chart",
          },
          chart: {
            stacked: true,
          },
          tooltip: {
            followCursor: true
          },

          xaxis: {
            categories: category,
            title: {
              text: 'Operation Name',
              style: {
                colors: ['#ff0'], fontSize: ['25px'], fontFamily:['Timesnewroman']
            }
            },
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val}Ms`
              },

            },
            title: {
              text: 'DurationMS',
              style: {
                colors: ['#ff0'], fontSize: ['25px'], fontFamily:['Timesnewroman']
            }
            },
          },
        }}
      />

    </div>
  )

}
export default HighPerfLatency


