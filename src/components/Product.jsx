import React from 'react'
import { Col, Image, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiGitCompare, BiSolidLabel } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
const Product = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <Col lg={4} className='mt-4'>
            <div className="arribal_wrapper">
                <Image src={item.image} className='w-100' />
                <div className="arribal_text">
                    <div className="arribal_inner">
                        <h4>{item.name}</h4>
                        <p>${(item.price).toFixed(2)}</p>
                    </div>
                    <p>{item.color1}</p>
                </div>
                <div className="arribal_overly">
                    <ul>
                        <li><Link>Compare <BiGitCompare /></Link></li>
                        <li onClick={()=>dispatch(addToCart(item))}><Link>add to cart <FaShoppingCart /></Link></li>
                        <li><Link to={`/product/${item.id}`}> View Details <BiSolidLabel /></Link></li>
                        <li><Link>Add to wish list <BsFillHeartFill /></Link></li>
                    </ul>
                </div>
            </div>
        </Col>
    )
}

export default Product
