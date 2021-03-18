import React from 'react'
import { Col, Row } from "react-bootstrap";
import Chart from "react-apexcharts";
import { Sidebar } from "."
function Charts() {
    const values = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["wk1", "wk2", "wk3", "wk4", "wk5", "wk6", "wk7", "wk8", "wk9"]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      };
    return (
        <div>
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col fluid className="justify-content-center" style={{textAlign: "center", alignContent: "center"}}>
                <div>
                    <Chart
                    options={values.options}
                    series={values.series}
                    type="bar"
                    width="500"
                    />
                </div>
                <div>
                    <Chart
                    options={values.options}
                    series={values.series}
                    type="line"
                    width="500"
                    />
                </div>
                </Col>
            </Row>
            
        </div>
    )
}

export default Charts
