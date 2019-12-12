import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Appcontent from './Header';

function App() {

  const [apiReq, setApiReq] = useState([]);
  const dayRandom = Math.round(Math.random()*28);
  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
  const yearRandom = years[Math.floor(Math.random()* years.length)];
  const monthRandom = Math.round(Math.random()*12);
  useEffect(() =>{
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=EO0h1b6xsNy1K10ItVFw6jS5f2XY8SDfPyXaWKoD&${yearRandom}-${monthRandom}-11`
      )
      .then(response =>{
        console.log(response.data);
        setApiReq(response.data);
      })
      .catch(error =>{
        console.log("the data was not read", error);
      });
  }, []);
  return (
    <div className="App">
      <Appcontent
        title={apiReq.title}
        explanation={apiReq.explanation}
        image={apiReq.url}
        date={apiReq.date}
      />
    </div>
  );
}

export default App;
