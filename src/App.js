import React, {useState, useEffect} from "react";
import "./App.css";
import {nasaCaller} from './components/nasaCaller';
import Appcontent from './components/Header';

function App() {

  const [apiReq, setApiReq] = useState({date: ''});
  // const dayRandom = Math.round(Math.random()*28);
  // const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
  // const yearRandom = years[Math.floor(Math.random()* years.length)];
  // const monthRandom = Math.round(Math.random()*12);

  // useEffect(() =>{
  //   axios
  //     .get(
  //       `https://api.nasa.gov/planetary/apod?api_key=EO0h1b6xsNy1K10ItVFw6jS5f2XY8SDfPyXaWKoD&date=${yearRandom}-0${monthRandom}-${dayRandom}`
  //     )
  //     .then(response =>{
  //       console.log(response.data);
  //       setApiReq(response.data);
  //     })
  //     .catch(error =>{
  //       console.log("the data was not read", error);
  //     });
  // }, []);

//   cosnt Caller = () =>{
//     useEffect(() =>{
//     nasaCaller(apiReq)
//       .then(res =>{
//         console.log(res);
//       })
//   },[])
// }

  const handleChange = e => {
    setApiReq({
      [e.target.name]:e.target.value
    })
    console.log(apiReq, '<--------');
  }

  const handleSubmit = e =>{
    e.preventDefault()
    nasaCaller(apiReq.data)
    console.log(apiReq, '<--------x')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='date' 
          id='picker'
          name = 'date'
          min='1970-01-01'
          onChange={handleChange}
        />
        <button type='submit'> Save</button>
      </form>
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
