import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { featuredData } from '../fackData/featuredData'
import { Link } from 'react-router-dom'
const Featured = () => {
    return (
        <>
            <Container className='mt-5 pt-5'>
                <Row>
                    <Col lg={6}>
                        {
                            featuredData.map(item => (
                                item.position === "left" &&
                                <div className="feature-item" key={item.id} style={{ background: `url(${item.image}) no-repeat center / cover ` }}>
                                    <div className="feature_left">
                                    <div className="feature-text">
                                        <h2>{item.heading}</h2>
                                        <p>Up to <span>30%</span> sale for all phones!</p>
                                        <Link className="dark_btn">{item.button}</Link>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Col>
                    <Col lg={6}>
                    {
                            featuredData.map(item => (
                                item.position === "right" &&
                                <div className="mb-4" key={item.id}>
                                    <div className="feature-item" style={{ background: `url(${item.image}) no-repeat center / cover ` }}>
                                    <div className="feature_right">
                                    <div className="feature-text">
                                        <h2>{item.heading}</h2>
                                        <p>Up to <span>50%</span> sale  for all furniture items!</p>
                                        <a href="#home" className="dark_btn">{item.button}</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Featured
