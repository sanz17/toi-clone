import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from "react-bootstrap";

function CarouselLeft() {
    return (
        <div>
            <div className="carousel-div">
                <Carousel style={
                    {
                        'cursor': 'pointer',
                        'paddingLeft': '10px',
                        'boxSizing': 'border-box'
                    }
                }>
                    <Carousel.Item style={
                        {
                            //'borderBlock':'10px',
                            'paddingLeft': '20px'
                        }
                    } interval={1000}>
                        <img
                            className="d-block w-100"
                            style={{ 'borderRadius': '4%' }}
                            onClick="window.location.href('https://timesofindia.indiatimes.com/india/air-india-urination-case-accused-shankar-mishra-arrested-from-bengaluru/articleshow/96807414.cms?from=mdr')"
                            src="https://images.hindustantimes.com/img/2023/01/05/1600x900/006fd0c4-700f-11ed-9470-6981fab06e1e_1672926040866_1672926040866_1672926057795_1672926057795.jpg"
                            alt="Air India urination case: Accused Shankar arrested from Bengaluru"
                        />
                        <Carousel.Caption>
                            <h3
                                style={
                                    {
                                        'fontFamily': 'sans-serif',
                                        'fontWeight': 'bold'
                                    }
                                }
                            >Air India urination case: Accused Shankar arrested from Bengaluru</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item
                        style={
                            {
                                //'borderBlock':'10px',
                                'paddingLeft': '20px'
                            }
                        }
                        interval={1000}>
                        <img
                            className="d-block w-100"
                            style={{ 'borderRadius': '4%' }}
                            src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-89544576/89544576.jpg"
                            alt="Air India urination case: Accused Shankar arrested from Bengaluru"
                        />
                        <Carousel.Caption>
                            <h3>Air India urination case: Accused Shankar arrested from Bengaluru</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="newsfeed">
                <Row>
                    <Col style={
                        {
                            'borderBottom': '1.5px solid rgba(0, 0, 0, 0.05)',
                            'paddingBottom':'10px'
                            }}>
                        <Row>
                            <Col style={
                            {
                                'fontFamily': 'sans-serif',
                                'fontSize': '18px',
                                'marginTop': '15px',
                                'cursor': 'pointer',
                                'marginLeft':'30px',
                                //'fontWeight':'bold',
                                'textAlign':'left'
                            }}>
                                10 cr people visit U'khand a year, how much can it...
                            </Col>
                            <Col>
                                <img style={{ 'cursor': 'pointer', 'boxSizing': '20px', 'width': '150px', 'borderRadius': '10%', 'marginTop': '12px' }} src="https://static.toiimg.com/thumb/msid-96823636,imgsize-1192555,width-400,resizemode-4/96823636.jpg" />
                            </Col>
                        </Row>
                    </Col>
                    <Col style={
                        {
                            'borderBottom': '1.5px solid rgba(0, 0, 0, 0.05)',
                            'paddingBottom':'10px'
                            }}>
                        <Row>
                            <Col style={
                            {
                                'fontFamily': 'sans-serif',
                                'fontSize': '18px',
                                'marginTop': '15px',
                                'cursor': 'pointer',
                                //'fontWeight':'bold',
                                'textAlign':'left'
                            }}>
                                How soon should people see each other after a...
                            </Col>
                            <Col>
                                <img style={{ 'cursor': 'pointer', 'boxSizing': '20px', 'width': '150px', 'borderRadius': '10%', 'marginTop': '12px' }} src="https://static.toiimg.com/thumb/width-800,height-450,imgsize-80076,msid-96799591/96799591.jpg" />

                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>



        </div>
    );
}

export default CarouselLeft;