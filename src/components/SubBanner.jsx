import React from 'react'
import { subBanner } from '../fackData/subBanner'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const SubBanner = () => {
  return (
    <Container>
        <Row className='sub_banner'>
            <Col lg={5}>
                <img src={subBanner.image} alt="" className='w-100'/>
            </Col>
            <Col lg={7}>
                <div className="sub_banner_text">
                <h2>{subBanner.name}</h2>
                <p>{subBanner.descirption}</p>
                <Link className='dark_btn'>{subBanner.button}</Link>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default SubBanner
