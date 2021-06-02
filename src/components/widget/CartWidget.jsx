import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faOpencart} from '@fortawesome/free-brands-svg-icons';


const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faOpencart} className="fa-lg"/>
        </div>
    )
}

export default CartWidget
