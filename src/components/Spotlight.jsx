import React from "react";
import { Row, Col } from "react-bootstrap";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Spotlight = () => {
    return (
        <div className="tech-auto-trend">
            <Row>
                <Col className="tech">
                    <span style={{ 'fontWeight': 'bolder', 'fontSize': '25px', 'textAlign': 'left', }}>TECH <ArrowForwardIosIcon /></span>
                    <Row style={{ 'borderBottom': '1px solid rgba(32, 32, 32, 0.32)', 'paddingBottom': '18px' }}>
                        <Col style={
                            {
                                'marginLeft': '75px'
                            }}>
                            <img style={{ 'cursor': 'pointer', 'boxSizing': '20px', 'width': '235px', 'borderRadius': '10%', 'marginTop': '12px' }} src="https://static.toiimg.com/thumb/resizemode-4,msid-96830012,imgsize-12345,width-720/96830012.jpg" />

                        </Col>
                        <Col style={
                            {
                                'fontSize': '20px',
                                'textAlign': 'left',
                                'marginTop': '50px',
                                'marginRight': '20px',
                                'borderRight': '1px solid rgba(32, 32, 32, 0.32)',
                            }}>
                            How ChatGPT maybe used by cybercriminals for hacking...
                        </Col>
                    </Row>
                </Col>
                <Col className="auto" style={
                    {
                        //'marginLeft':'10px'
                    }}>
                    <span style={{ 'fontWeight': 'bolder', 'fontSize': '25px', 'textAlign': 'left' }}>AUTO <ArrowForwardIosIcon /></span>
                    <Row style={{ 'borderBottom': '1px solid rgba(32, 32, 32, 0.32)', 'paddingBottom': '26px' }}>
                        <Col style={
                            {
                                'marginLeft': '-27px'
                            }}>
                            <img style={{ 'cursor': 'pointer', 'boxSizing': '20px', 'width': '296px', 'borderRadius': '10%', 'marginTop': '19px' }} src="https://static.toiimg.com/thumb/msid-96833257,imgsize-518071,width-400,resizemode-4/96833257.jpg" />

                        </Col>
                        <Col style={
                            {
                                'fontSize': '20px',
                                'textAlign': 'left',
                                'marginTop': '50px',
                                'marginRight': '20px',
                                'borderRight': '1px solid rgba(32, 32, 32, 0.32)',
                            }}>
                            More affordable Mahindra Thar 2WD India launch...
                        </Col>
                    </Row>
                </Col>
                <Col className="trend">
                    <span style={{ 'fontWeight': 'bolder', 'fontSize': '25px', 'textAlign': 'left' }}>TRENDING<ArrowForwardIosIcon /></span>
                    <Row style={{ 'borderBottom': '1px solid rgba(32, 32, 32, 0.32)', 'paddingBottom': '35px' }}>
                        <Col style={
                            {
                                'marginLeft': '-27px'
                            }}>
                            <img style={{ 'cursor': 'pointer', 'boxSizing': '20px', 'width': '224px', 'borderRadius': '10%', 'marginTop': '15px' }} src="https://static.toiimg.com/thumb/msid-96812115,imgsize-112100,width-400,resizemode-4/96812115.jpg" />

                        </Col>
                        <Col style={
                            {
                                'fontSize': '20px',
                                'textAlign': 'left',
                                'marginTop': '50px',
                                'marginRight': '20px',
                                'borderRight': '1px solid rgba(32, 32, 32, 0.32)',
                            }}>
                            Jharkhand Board Date Sheet 2023 released
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{'borderBottom':'1px solid rgba(32, 32, 32, 0.32)','paddingBottom':'30px'}}>
                <p style={{ 'fontWeight': 'bolder', 'fontSize': '30px', 'textAlign': 'left','marginLeft':'35PX','marginTop':'40PX' }}>SPOTLIGHT</p>
                <Col>
                    <a href="https://timesofindia.indiatimes.com/videos/news/catch-jonty-rhodes-talk-about-epilepsy-and-its-care/videoshow/95881273.cms">
                        <img src='https://timesofindia.indiatimes.com/photo/msid-95881273/95881273.jpg'
                            style={{ 'width': '80%', 'marginTop': '10px', 'borderRadius': '10%','height':'87%' }} /></a>
                </Col>
                <Col style={{'marginBottom':'-170px'}}>
                    <a href="https://timesofindia.indiatimes.com/podcasts/openforbusiness/open-for-business-episode-4-with-neelam-yadav/toipodcast/94553026.cms">
                        <img src='https://static.toiimg.com/thumb/imgsize-97352,msid-94553026,width-600,resizemode-4/94553026.jpg'
                            style={{ 'width': '80%', 'height':'60%','marginTop': '10px', 'borderRadius': '10%' }} /></a>
                </Col>
                <Col>
                    <a href="https://timesofindia.indiatimes.com/world/china/covid-xis-tied-down-we-arent/articleshow/96377301.cms?utm_source=TOI&utm_medium=Spotlight_Slug_02_Jan_2022&utm_campaign=TOI_Plus_Stories">
                        <img src='https://static.toiimg.com/thumb/width-800,height-450,imgsize-179070,msid-96377334/96377334.jpg'
                            style={{ 'width': '80%', 'marginTop': '10px', 'borderRadius': '10%','height':'87%' }} /></a>
                </Col>
            </Row>
        </div>
    );
}
export default Spotlight;