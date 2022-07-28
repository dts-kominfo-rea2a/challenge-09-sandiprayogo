// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'

const Contact = ({data}) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={data.photo} alt='ganmbar' style={{width:'30%', borderRadius:'50%'}}/>
                <div className='card-content'>
                    <h3>{data.name}</h3>
                    <p>{data.phone}</p>
                    <p>{data.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;