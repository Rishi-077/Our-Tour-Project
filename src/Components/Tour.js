import React, {useState} from 'react';
// import Tours from './Tours'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import '../App.css'

function Tour ( { id, name, info, price, image,removeTour } )
{
    const [ readMore, setReadMore ] = useState( true );

    return (
        <section className='container'>
        <Card className='Card'>
            <img src={image} alt={name} />
            <footer>
                <div id='name-price'>
                    <h2>{name}</h2>
                    <h4 className='"badge rounded-pill text-dark"'>${price}</h4>
                </div>
                <div>
                        <p className='p'>{readMore ? info : `${ info.substring( 0, 200 )}...`}
                            <button onClick={() => setReadMore( !readMore )}>{readMore ? 'show less': 'read more'}
                            </button>
                        </p>
                    <Button className='button' onClick={() => removeTour(id)}>Not Interested</Button>
                </div>
            </footer>
        </Card>
        </section>    
    )
}

export default Tour;