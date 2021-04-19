import React from 'react'

import gql from "graphql-tag";
import { Col, Row } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { Sidebar } from '.';
import DataTable from "./DataTable"

function Charts({userName}) {

  
  const { loading, error, data } = useQuery(FETCH_SERVICES_QUERY)
  if(loading){
    return(
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>
            <h3>Loading...</h3>
          </Col>
          <Col>

          </Col>
        </Row>
      )
    } 

    if(data){
      
      
      const services = data.getServices;
      

      
        return(
            services.map((service) => (
                <div key={service.id}>
                  <Row style={{display: "flex", height: "30px", backgroundColor: "#1d1d1d"}} />
                
                
                  
                    {
                        service.username === userName ? (
                          
                            
                            <Row className="justify-content-md-center">
                              <Col md={3}>
                                <Sidebar />
                              </Col>
                                
                                <Col>
                                   <DataTable requests={service.requests} service={service} />
                                </Col>
                                
                                
                            </Row>
                        ): ""
                    }
                  
                </div>
                
            ))
        )
      }
    
  }
const FETCH_SERVICES_QUERY = gql`
    {
        getServices{
            id name createdAt username title description rates requestCount starCount
            stars{
                id
                username
            }
            requestCount
            requests{
                id username createdAt description status
            }
        }
    }
`
export default Charts
