import React from 'react';
import Tour from './Tour';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { u } from 'react-bootstrap'
function tours({tours, removeTour}) {
    return ( 
        <section>
            <h1>Our Tours</h1>
            <div className='Tour'>
            {tours.map( ( tour ) =>
            {
                return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
            })}
            </div>
        </section>
     );
}

export default tours;