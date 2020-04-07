import axios from "axios";
import {useEffect} from 'react';

export const nasaCaller = (date) => {
        axios
          .get(
            `https://api.nasa.gov/planetary/apod?api_key=EO0h1b6xsNy1K10ItVFw6jS5f2XY8SDfPyXaWKoD&date=${date}`
          )
          .then(response =>{
            
            console.log(response.data)
            return response.data
          })
          
          .catch(error =>{
            console.log("the data was not read", error);
          });
}
