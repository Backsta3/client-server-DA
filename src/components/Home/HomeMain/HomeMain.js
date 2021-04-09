import React from 'react';
import './HomeMain.css'
const HomeMain = () => {
    return (
        <div className="">
            <div className="row align-items-center" >
            <div className="col-md-7 " >
                <input id="doctorSearch" type="text" placeholder="search your doctor"/>
                <button id="searchBtn" >Search</button>
            </div>
            <div className=" col-md-5 card">
                <div className="card-body">
                    <br/>
                    <h2 className="card-title">Select Your Location </h2>
                   <br/> <br/><br/>
                   <button id="ctg">CHATTOGRAM</button>
                   <br/>
                   <br/>
                   <button id="dhk">DHAKA</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeMain;