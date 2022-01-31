import React, {useState} from 'react';
// import Tours from './Tours'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import '../App.css'

function Tour({id, name, info, price, image }) {
    return (
        <section className='container'>
        <h1>Our Tours</h1>
        <Card className='Card'>
            <img src={image} alt={name} />
            <footer>
                <div>
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                </div>
                <div>
                    <p className='p'>{info}</p>
                    <Button onclick={() => {}}>Not Interested</Button>
                </div>
            </footer>
        </Card>
        </section>    
    )
}

export default Tour;