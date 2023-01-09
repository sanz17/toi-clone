import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const CarouselRight = () => {
    //const ng=useNavigate()
    return (
        <Row>
            <Col style={{
                'marginRight': '134px',
                'borderRight': '1px solid rgba(32, 32, 32, 0.32)',
                'cursor': 'pointer',
                'paddingRight': '32px'
            }}>
                <p style={
                    {
                        // 'marginRight':'126px',
                        // 'borderRight': '1px solid rgba(32, 32, 32, 0.32)',
                        // 'cursor':'pointer',
                        // 'paddingRight':'32px'
                    }}>
                    <a href="https://timesofindia.indiatimes.com/videos/toi-original/on-cam-kanpur-cops-beat-bjp-worker-who-visited-police-station-to-lodge-complaint/videoshow/96819580.cms">
                        <img src='https://static.toiimg.com/photo/msid-96819580/96819580.jpg'
                            style={{ 'width': '100%', 'marginTop': '10px', 'borderRadius': '10%' }} /></a>
                </p>
                <p style={
                    {
                        // 'marginRight':'126px',
                        // 'borderRight': '1px solid rgba(32, 32, 32, 0.32)',
                        // 'cursor':'pointer',
                        // 'paddingRight':'32px'
                    }}>
                    <a href="https://timesofindia.indiatimes.com/videos/news/cctv-man-buying-medicines-at-a-medical-store-collapses-and-dies/videoshow/96820589.cms">
                        <img src='https://static.toiimg.com/photo/msid-96820589/96820589.jpg'
                            style={{ 'width': '100%', 'marginTop': '10px', 'borderRadius': '10%' }} /></a>
                </p>

            </Col>
            <Col style={
                {
                    'background': 'rgb(255 245 245)',
                    'marginTop': '20px',
                    'marginLeft': '-100px',
                    'paddingLeft': '20px',
                    'borderRadius': '10%'

                }}>
                <p>
                    <Row>
                        <Col style={
                            {
                                'marginTop': '10px',
                                'fontFamily': 'cursive',
                                'fontSize': '40px',
                                'textAlign': 'left',
                                //'marginLeft':'-119px',
                                'fontWeight': 'bolder',

                            }
                        }>
                            TOI
                            <span style={{ 'color': 'red', 'fontWeight': 'bolder', }}>+</span>
                        </Col>
                        <Col style={{ 'color': 'red', 'marginTop': '30px', 'fontFamily': 'sans-serif' }}>
                            READ MORE STORIES <ArrowForwardIosIcon/>
                        </Col>
                    </Row>
                </p>
                <p style={{ 'fontWeight': 'bolder', 'fontFamily': 'sans-serif', 'textAlign': 'left', 'fontSize': '18px', 'cursor': 'pointer', }}>Enjoy an ad-lite news reading experience</p>
                <p>
                    <Row href='https://timesofindia.indiatimes.com/india/how-to-spare-yourself-from-shoulder-pain/articleshow/96702849.cms'>
                        <Col style={
                            {
                                'fontFamily': 'sans-serif',
                                'fontSize': '19px',
                                'marginTop': '15px',
                                'cursor': 'pointer',
                                //'fontWeight':'bold',
                                //'textAlign':'left'
                            }}>
                            How to spare yourself from shoulder pain
                        </Col>
                        <Col>
                            <img style={{ 'cursor': 'pointer', 'boxSizing': '20px', 'width': '233px', 'borderRadius': '10%' }} src="https://static.toiimg.com/thumb/width-800,height-450,imgsize-28252,msid-96702964/96702964.jpg" />
                        </Col>
                    </Row>

                    <Row href='https://timesofindia.indiatimes.com/india/how-to-spare-yourself-from-shoulder-pain/articleshow/96702849.cms'>
                        <Col style={
                            {
                                'fontFamily': 'sans-serif',
                                'fontSize': '19px',
                                'marginTop': '15px',
                                'cursor': 'pointer',

                                //'fontWeight':'bold',
                                //'textAlign':'left'
                            }}>
                            Why blood art needed an official ban in Tamil Nadu
                        </Col>
                        <Col>
                            <img style={{ 'cursor': 'pointer', 'boxSizing': '20px', 'width': '233px', 'borderRadius': '10%', 'marginTop': '12px' }} src="https://static.toiimg.com/thumb/width-800,height-450,imgsize-149052,msid-96761340/96761340.jpg" />
                        </Col>
                    </Row>
                </p>
            </Col>
            <div
            style={
                {
                    'paddingLeft':'450px',
                    'fontSize':'20px',
                    'textAlign':'left',
                    'cursor':'pointer'
        }}
            >
                <li style={
                        {
                            'borderBottom': '1.5px solid rgba(0, 0, 0, 0.05)',
                            'paddingBottom':'10px'
                            }}>Foreign univs in India must employ...</li>
                <li style={
                        {
                            'borderBottom': '1.5px solid rgba(0, 0, 0, 0.05)',
                            'paddingBottom':'10px'
                            }}>Drone -mounted radars to check for tunnels...</li>
            </div>

        </Row>
    );
}

export default CarouselRight;