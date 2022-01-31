import React from 'react';
import Tour from './Tour';

function tours({tours}) {
    return ( 
        <section>
            <div className='Tour'>
            {tours.map( ( tour ) =>
            {
                return <Tour key={tour.id} {...tour}></Tour>
            })}
            </div>
        </section>
     );
}

export default tours;