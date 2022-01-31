import React, { useState, useEffect } from 'react';
import Tours from './Components/Tours'
import Loading from './Components/Loading'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
const url = 'https://course-api.com/react-tours-project';

function App ()
{
  const [ load, setLoad ] = useState( false );
  const [ tours, setTour ] = useState( [] );

  const fetchData = useEffect( () =>
  {
    axios.get( url )
      .then( res =>
      {
        setLoad( false );
        const tours = res.data;
        setTour( tours );
        console.log(tours);
      } )
      .catch( err =>
      {
        console.log( err );
        setLoad(false)
    })
  },[])
 
  if ( load )
  {
    return (
      <main className='container-fluid'>
        <Loading />
      </main>
      )  
  }
  return (
    <main className='container-fluid'>
      <Tours tours={ tours }/>
    </main>
  )
}

export default App;
