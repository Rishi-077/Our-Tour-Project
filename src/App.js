import React, { useState, useEffect } from 'react';
import Tours from './Components/Tours'
import Loading from './Components/Loading'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
const url = 'https://course-api.com/react-tours-project';

function App ()
{
  const [ load, setLoad ] = useState( true );
  const [ tours, setTour ] = useState( [] );

  const removeTour = ( id ) =>
  {
    const newTour = tours.filter( ( tour ) => tour.id !== id );
    setTour( newTour );
  };

  const fetchData = () =>
  {
    axios.get( url )
      .then( res =>
      {
        setLoad( false );
        const tours = res.data;
        setTour( tours );
      } )
      .catch( err =>
      {
        console.log( err );
        setLoad( false );
      } );
  };

  useEffect( () =>
  {
    fetchData();
  },[])
 
  if ( load )
  {
    return (
      <main className='container-fluid'>
        <Loading />
      </main>
      )  
  }
  if ( tours.length === 0 )
  {
    return (
      <main>
        <div className='title'>No Tour Left</div>
        <Button id='title-button' onClick={fetchData
        }>Refresh</Button>
      </main>
    )
  }
  return (
    <main className='container-fluid'>
      <Tours tours={tours} removeTour={ removeTour }/>
    </main>
  )
}

export default App;
