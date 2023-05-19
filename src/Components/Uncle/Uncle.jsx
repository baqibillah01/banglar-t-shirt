import React from 'react';
import Cusin from '../Cusin/Cusin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cusin>Rayhan</Cusin>
                <Cusin>Mamun</Cusin>
            </section>
        </div>
    );
};

export default Uncle;