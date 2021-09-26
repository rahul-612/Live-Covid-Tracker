import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid=()=>{

    const [data,setData]=useState([]);


    const getCovidData=async ()=>{
        try{    {/*kuki fetch api promise return krta h aur promise mtlb ki in future wo chl bhi skta h aur reject bhi ho skta h to isliye humne await lga diya secure k liye*/}
            const res= await fetch('https://data.covid19india.org/data.json');

           const APIdata= await res.json()

           setData(APIdata.statewise[0]);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCovidData();
    },[]);


    return(
        <>
        <section>

            <h1>🔴 Live</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>

            <ul>
                <li className="card" id="card1">
                    <div className="card_main" >
                        <div className="card_inner">
                            <p className="card_name"><span>OUR </span>COUNTRY</p>
                            <p className="card_total card_small">INDIA</p>
                        </div>
                    </div>
                </li>

                <li className="card" id="card2">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL </span>RECOVERED</p>
                            <p className="card_total card_small">{data.recovered}</p>
                        </div>
                    </div>
                </li>

                <li className="card" id="card3">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL </span>CONFIRMED</p>
                            <p className="card_total card_small">{data.confirmed}</p>
                        </div>
                    </div>
                </li>

                <li className="card" id="card4">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL </span>DEATH</p>
                            <p className="card_total card_small">{data.deaths}</p>
                        </div>
                    </div>
                </li>

                <li className="card" id="card5">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL </span>ACTIVE</p>
                            <p className="card_total card_small">{data.active}</p>
                        </div>
                    </div>
                </li>

                <li className="card" id='card6'>
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>LAST </span>UPDATED</p>
                            <p className="card_total card_small">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>

                
            </ul>
        </section>
        </>
    );
};

export default Covid;