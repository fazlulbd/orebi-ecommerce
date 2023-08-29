import React from 'react'
import { productData } from '../fackData/productData';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
const SingleProduct = () => {
    const dispatch = useDispatch()
    const {id} = useParams();
    const item = productData.find(item=> item.id === parseInt(id))
    const {image, name, price, color1, brand} = item

  return (
    <Container className='py-5'>
      <Row className='singleproduct'>
        <Col lg={5}>
        <Image src={image} alt="" className='w-100 p-5' />
        </Col>
        <Col lg={7}>
          <div className="py-5 single_text">
            <h3>{name}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores exercitationem modi consequuntur tempora mollitia illo, sit facilis dicta placeat. Minus quidem veritatis in, aspernatur impedit error nisi officiis labore reprehenderit porro maiores exercitationem quae aperiam, repellendus similique, amet officia hic incidunt voluptatibus iure atque. Vel autem non architecto, esse, sit sapiente consectetur voluptas error odit nisi  </p>
            <p>Price: <strong>${price.toFixed(2)}</strong></p>
            <p>brand: <strong>{brand}</strong></p>
            <p>color: <strong>{color1}</strong></p>
            <Button className='button1' onClick={()=>dispatch(addToCart(item))}>Add to Cart</Button>
            <Button className='button3' variant="info"><Link to='/checkout' onClick={()=>dispatch(addToCart(item))}>Buy Now</Link></Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SingleProduct
