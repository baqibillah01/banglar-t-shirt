import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>aunty</h2>
            <section className='flex'>
                <Cusin>Afwan</Cusin>
                <Cusin hasFriend={true} ring={ring}>Safwan</Cusin>
            </section>
        </div>
    );
};

export default Aunty;