import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export const Rating = (props) => {

    const { DisplayData, selectRate } = props

    return (
        <div className='containers'>
              <i class="bi bi-star-fill  roundedcircle star"></i>
            <Row className='Ratings'>
          
                <Col>
                <h6 className='ratetxt' >Rating</h6>
                    <Row className='h-border'  onClick={()=>selectRate(1)}>
                        <Col  className='titles'>
                            <h6 >
                                {DisplayData.CodeRating.length}
                            </h6>
                        </Col>
                        <Col className='titlestext'>
                            <p>Say has ethical code of conduct and it is safe to do business with</p>
                        </Col>
                    </Row>

                    <Row  onClick={()=>selectRate(2)}>
                        <Col  className='titles'>
                            <h6>
                                {DisplayData.Meetrate.length}
                            </h6>
                        </Col>
                        <Col  className='titlestext'>
                            <p>
                                Have meet is real life video call
                            </p>        </Col>
                    </Row>
                </Col>
            </Row>




        </div>
    )
}
