import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaTachometerAlt, FaComments, FaRegAddressCard, FaCalendarAlt, FaRegLaughWink, FaHeart, FaPowerOff, FaChartBar } from 'react-icons/fa'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Amplify, { Auth } from 'aws-amplify';
import 'react-pro-sidebar/dist/css/styles.css';
import {Badge, Button} from "react-bootstrap";

function signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
function Sidebar() {
    return (
        <ProSidebar>
            <SidebarHeader style={{height: "90px", textAlign: "Center"}}>
                <span >
                    <span style={{padding: "10px"}}>Tech Dash</span>
                    
                    
                </span>
            </SidebarHeader>
            <SidebarContent style={{height: "500px"}}>
                <Menu iconShape="circle">
                <MenuItem
                    
                    icon={<FaRegAddressCard />}
                    
                ><Link to="/"></Link>
                    {"Profile"}
                </MenuItem>
                <MenuItem icon={<FaComments />}> {"Requests"}<Link to="/messages" /></MenuItem>
                
                <MenuItem as={Link} to="/reports" icon={<FaChartBar />}> {"Reports"}<Link to="/reports" /></MenuItem>
                </Menu>
                <Menu iconShape="circle">
                
                
                
                </Menu>
            </SidebarContent>
            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                className="sidebar-btn-wrapper"
                style={{
                    padding: '20px 24px',
                    alignItems: "left",
                    textAlign: "left"
                }}
                >
                <Button
                    rounded
                    onClick={signOut}
                    variant="dark"
                >
                    
                    
                    <FaPowerOff />
                    
                </Button>
                </div>
            </SidebarFooter>
      </ProSidebar>
        
    )
}

export default Sidebar
