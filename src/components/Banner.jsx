import React from 'react'
import { bannerData } from '../fackData/bannerData'
import {Carousel, Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
const Banner = () => {
  return (
    <>
      <Carousel>
      {
          bannerData.map(item => (
            <Carousel.Item interval={3000} key={item.id}>
              <div className="bann-slider" style={{ background: `url(${item.image}) no-repeat center / cover ` }}>
               <Container>
               <div className="banner-text"> 
                  <h1>{item.heading}</h1>
                  <p >Up to <span>50%</span> sale for all furniture items!</p>
                  <Link className="dark_btn">{item.button}</Link>
                </div>
               </Container>
              </div>
            </Carousel.Item>
          ))
        }
       </Carousel>
       <div className="service">
       <Container>
        <Row>
            <Col lg={4}>
            <p>Two years warranty</p>
            </Col>
            <Col lg={4} className='text-center'>
            <p><FaShippingFast/> Free shipping</p>
            </Col>
            <Col lg={4} className='text-end'>
            <p><GiReturnArrow/> Return policy in 30 days</p>
            </Col>
        </Row>
       </Container>
       </div>

    </>
  )
}

export default Banner
