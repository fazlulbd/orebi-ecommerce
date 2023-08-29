import React from 'react'
import { productData } from '../fackData/productData'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addToCart } from '../store/cartSlice';
import { BiGitCompare, BiSolidLabel } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
const Offers = () => {
  const dispatch = useDispatch()
  return (
    <Container className='my-5'>
      <h2>Special Offers</h2>
      <Row className='mt-4'>
        {
          productData.map(item => (
            item.feature === "offer" &&
            <Col lg={3} key={item.id}>
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
          ))
        }
      </Row>
    </Container>
  )
}

export default Offers
