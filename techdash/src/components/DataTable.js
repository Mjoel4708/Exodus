import React from 'react'
import Chart from "react-apexcharts";
import moment from "moment";
import { Table } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import PrintIcon from '@material-ui/icons/Print';

function DataTable({requests, service}) {
    var i;
    const dates = [];
    for(i in requests){
        dates.push(requests[i].createdAt);
    }
    
    const groups = dates.reduce((acc, date) => {

        // create a composed key: 'year-week' 
        const yearWeek = `${moment(date).year()}-${moment(date).week()}`;
        
        // add this key as a property to the result object
        if (!acc[yearWeek]) {
          acc[yearWeek] = [];
        }
        
        // push the current date that belongs to the year-week calculated befor
        acc[yearWeek].push(date);
      
        return acc;
      
    }, {});
    var x;
    var y;
    var z;
    var count = 0;
    var countarr = [];
    for(x in requests){
        for(y in Object.keys(groups)){
            countarr[y] = Object.values(groups)[y].length
        }
    }
    console.log(countarr)
    
    const values = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: Object.keys(groups)
          }
        },
        series: [
          {
            name: "series-1",
            data: countarr
          }
        ]
    };
    function printData()
        {
            var divToPrint=document.getElementById("printTable");
            const newWin= window.open("");
            newWin.document.write(divToPrint.outerHTML);
            newWin.print();
            newWin.close();
        }
    
    return (
        <div>
            
            <div>
                <Chart
                    options={values.options}
                    series={values.series}
                    type="bar"
                    width="500"
                />
            </div>
            <div>
                <IconButton>
                    <PrintIcon onClick={printData} style={{float: "right"}}/>
                </IconButton>
                
                <Table striped bordered hover size="sm" id="printTable">
                    <thead>
                        <tr>
                        
                        <th>ID</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>createdAt</th>

                        </tr>
                    </thead>
                    <tbody>
                       {requests.map((request) => (
                            <tr key={request.id}>
                            
                            <td>{request.id}</td>
                            <td>{request.description}</td>
                            <td>{request.status}</td>
                            <td>{moment(request.createdAt).format('LL')}</td>
                            </tr>
                       ))}
                        
                    </tbody>
                </Table>
            </div>
               
            
        </div>
    )
}

export default DataTable
