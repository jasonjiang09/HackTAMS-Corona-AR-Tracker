import React, { useState, useEffect } from "react";
import "./App.css";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Tracker1.css";
import Marker from './coronavirusMarkerParks.jpg';


function Tracker1() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [lastAccessedItems, setLastAccessed] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://console.echoar.xyz/get?key=<KEY>&entry=<ENTRY>&data=usageByDate");
    const lastAccessed = await fetch("https://console.echoar.xyz/get?key=<KEY>&entry=<ENTRY>&data=accessHistory");
    //Did not put down Key or Entry Github
    
    const items = await data.json();
    const lastAccessedItems = await lastAccessed.json();

    setItems(items);
    setLastAccessed(lastAccessedItems);
  };

  return (
    <div>
      <h2>Parks</h2>

      {items.map(item => (
        <h2>
          Date: {item.date}
          <br/>
          Number of Uses: {item.numUses}
        </h2>
      ))}

      {lastAccessedItems.map(item => (
        <h2>
          Last Accessed: {Date(item).toLocaleString()}
        </h2>
      ))}
      
      <h2>
        Marker Used:
      </h2>
      <img src={Marker} alt="Logo" />
    </div>
  );
}

export default Tracker1;
