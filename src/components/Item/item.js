import React from 'react'
import { Link } from 'react-router-dom'

const item = ({ data, addToCart }) => {

    const { id, title, image, price } = data
    
    return (
        <div className='card'>
            <div className='grid'>
                <div className='image'>
                    <img src={image} />
                </div>
                <div className='title'>
                    <Link to={`/product/${id}`} className="Link titleLink">
                        {title}
                    </Link>
                </div>
                <div className='flex' >
                    <span className='price' style={{ marginRight: 15 }}>
                        ${price}
                    </span>
                    <div className='cart' onClick={addToCart}>
                        <img className='cartImg' src="/cart.svg" alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default item