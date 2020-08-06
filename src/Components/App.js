import React from "react";
import Masonry from "react-masonry-css";

import TopNavbar from "./Navbars/TopNavbar";
import BottomNavbar from "./Navbars/BottomNavbar";
import Card from "./Card/Card";
import Card2 from "./Card/Card2";

function App() {
    return (
        <div>
            <TopNavbar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <h1>Finpeg-Assignment</h1> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <Card2/>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <Card2/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <Card2/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <Card2/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <Card2/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <Card2/>
                    </div>
                </div>

            </div>
            <BottomNavbar/>
        </div>
    );
}

export default App;
