// import { logDOM } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import Cosmetic from '../cosmetic/Cosmetic';
// import { add } from './utilities/Storage';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h3>Shop my cosmetics!</h3>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic} />)
            }
        </div>
    )
};

export default Cosmetics;