import React from 'react';
import { Col, Button, ToogleButton, ButtonGroup } from 'react-bootstrap'; 
import { Link } from "react-router-dom";
function Categories() {
    const cats = [
        {
            url: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Welding",
            width: "290px",
            height: "270px",
            id: 0
        },
        {
            url: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Painting",
            width: "410px",
            height: "270px",
            id: 1
        },
        {
            url: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FibGVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Electrician",
            width: "420px",
            height: "270px",
            id: 2
        },
        {
            url: "https://images.unsplash.com/photo-1583335554751-fa66e066691a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvcmtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Gardening",
            width: "430px",
            height: "270px",
            id: 3
        },
        {
            url: "https://images.unsplash.com/photo-1513467655676-561b7d489a88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80",
            title: "Wood work",
            width: "450px",
            height: "270px",
            id: 4
        },
        {
            url: "https://images.unsplash.com/photo-1586280268958-9483002d016a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVuaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Landscaping",
            width: "240px",
            height: "270px",
            id: 5
        },
        {
            url: "https://images.unsplash.com/photo-1504222490345-c075b6008014?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Mechanic",
            width: "330px",
            height: "270px",
            id: 6
        },
        {
            url: "https://images.unsplash.com/photo-1521775092319-d0b8d118ce81?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpcGVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Plumbing",
            width: "440px",
            height: "270px",
            id: 7
        },
        {
            url: "https://images.unsplash.com/flagged/photo-1574426969834-f2f59e3f84f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE1fHxlbGVjdHJvbmljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Computer repairs",
            width: "350px",
            height: "270px",
            id: 8
        },
    ];
    
    return (
        <Col fluid className="justify-content-center" style={{padding: "40px", color: "#000000"}}>
            {cats.map((cat) => (
                <Button toggle variant="light" style={{padding: "auto",  backgroundImage: `url(${cat.url})`, backgroundSize: 'cover', height: cat.height, width: cat.width, backgroundRepeat: "no-repeat", margin: "0px", fontFamily: "Oswald, sans-serif"}}>
                   <Link to={`/home/${cat.title}`}>
                        <Button variant="outline-warning"><b>{cat.title}</b>
                        </Button>
                    </Link>
                </Button>
            ))}
        </Col>
            
    )
}

export default Categories
