import { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import Navi from "./Navigation";

function Chart() {

    const [valu, getvalu] = useState([]);
    const [OperationName, getopt] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/count.json')
            .then((res) => res.json())
            .then((data) => {
                var aa = data.map((bb, i) =>

                    bb.count_


                )

                getvalu(aa)
                var OperationName = data.map((bb, i) =>

                    bb.OperationName


                )
                getopt(OperationName)
                console.log(data)
            })
    }, [])
    console.log(valu);
    return (
        
        <div className="App">
            <Navi></Navi>
            <ReactApexChart
                type="bar"
                width={1000}
                height={500}
                series={[
                    {
                        name: "Count",
                        data: valu
                    }
                ]}



                options={{
                    xaxis: {
                        tickPlacement: 'on',
                        categories: OperationName,
                        title: {
                            text: 'Operation Name',
                            style: {
                                colors: ['#ff0'], fontSize: ['25px'], fontFamily:['Timesnewroman']
                            }

                        }
                    },
                    yaxis: {
                        tickPlacement: 'on',
                        categories: valu,
                        title: {
                            text: 'Count',
                            style: {
                                colors: ['#ff0'], fontSize: ['25px'], fontFamily:['Timesnewroman']
                            }

                        }
                    }
                }}
            />
        </div>
    );
}
export default Chart;