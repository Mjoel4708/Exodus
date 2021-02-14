import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaTachometerAlt, FaComments, FaList, FaCalendarAlt, FaRegLaughWink, FaHeart, FaPowerOff } from 'react-icons/fa'
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
                    as={Link} to="/"
                    icon={<FaTachometerAlt />}
                    suffix={<Badge variant="alert">{"New"}</Badge>}
                >
                    {"Dashbord"}
                </MenuItem>
                <MenuItem icon={<FaComments />}> {"Chats"}<Link to="/messages" /></MenuItem>
                <MenuItem as={Link} to="/events" icon={<FaCalendarAlt />}> {"Calendar"}<Link to="/events" /></MenuItem>
                </Menu>
                <Menu iconShape="circle">
                <SubMenu
                    
                    title={"With suffix"}
                    icon={<FaRegLaughWink />}
                >
                    <MenuItem>{"Submenu"} 1</MenuItem>
                    <MenuItem>{"Submenu"} 2</MenuItem>
                    <MenuItem>{"Submenu"} 3</MenuItem>
                </SubMenu>
                <SubMenu
                    
                    title={"with prefix"}
                    icon={<FaHeart />}
                >
                    <MenuItem>{"Submenu"} 1</MenuItem>
                    <MenuItem>{"Submenu"} 2</MenuItem>
                    <MenuItem>{"Submenu"} 3</MenuItem>
                </SubMenu>
                <SubMenu title={"Submenu title"} icon={<FaList />}>
                    <MenuItem>{"Submenu"} 1 </MenuItem>
                    <MenuItem>{"Submenu"} 2 </MenuItem>
                    <SubMenu title={`${"Submenu"} 3`}>
                    <MenuItem>{"Submenu"} 3.1 </MenuItem>
                    <MenuItem>{"Submenu"} 3.2 </MenuItem>
                    <SubMenu title={`${"Submenu"} 3.3`}>
                        <MenuItem>{"Submenu"} 3.3.1 </MenuItem>
                        <MenuItem>{"Submenu"} 3.3.2 </MenuItem>
                        <MenuItem>{"Submenu"} 3.3.3 </MenuItem>
                    </SubMenu>
                    </SubMenu>
                </SubMenu>
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
