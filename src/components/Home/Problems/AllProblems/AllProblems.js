import React from 'react';
import './AllProblems.css'
const AllProblems = () => {
    return (
        <div className="container">
            <div className="ph">
                <h1 > SELECT YOUR PROBLEM </h1>
                <h2 > আপনার সমস্যাটি নির্ধারণ করুন </h2>
            </div> 
            <div class="card-body card2">
                <input id="doctorSearch" type="text" placeholder="search your problem"/>
                <button id="searchBtn" >Search</button>
            </div> 
        </div>
    );
};

export default AllProblems;