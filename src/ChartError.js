import ReactApexChart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import Navi from "./Navigation";


function ChartError() {
    const [count_, getvalu] = useState([]);
    const [StatusText, getopt] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/errors.json')
            .then((res) => res.json())
            .then((data) => {
                var aa = data.map((bb, i) =>

                    bb.count_


                )

                getvalu(aa)
                var StatusText = data.map((bb, i) =>

                    bb.StatusText


                )
                getopt(StatusText)
                console.log(data)
            })
    }, [])
    // console.log(valu);
    return (

        <div className="App">
            <Navi></Navi>
            <ReactApexChart
                type="bar"
                width={1000}
                height={500}
                series={[
                    {
                        name: "Error",
                        data: count_
                    }
                ]}



                options={{
                    xaxis: {
                        tickPlacement: 'on',
                        categories: StatusText,
                        title: {
                            text: 'Operation Name',
                            style: {
                                colors: ['#ff0'], fontSize: ['25px'], fontFamily: ['Timesnewroman']
                            }

                        }
                    },
                    yaxis: {
                        tickPlacement: 'on',
                        categories: count_,
                        title: {
                            text: 'Count of Errors',
                            style: {
                                colors: ['#ff0'], fontSize: ['25px'], fontFamily: ['Timesnewroman']
                            }

                        }
                    }
                }}
            />
        </div>
    );
}
export default ChartError