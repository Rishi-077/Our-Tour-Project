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
                <div id='name-price'>
                    <h2>{name}</h2>
                    <h4 className='"badge rounded-pill bg-info text-dark"'>${price}</h4>
                </div>
                <div>
                    <p className='p'>{info}</p>
                    <Button className='button' onclick={() => {}}>Not Interested</Button>
                </div>
            </footer>
        </Card>
        </section>    
    )
}

export default Tour;