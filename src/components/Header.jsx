import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from 'react-bootstrap/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Carousel } from "bootstrap";
import CarouselLeft from "./CarouselLeft";
import CarouselRight from "./CarouselRight";
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {

    const navigate = useNavigate();
    let date = new Date();
    let num = date.getDate();
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let id = date.getDay();
    let day = days[id];

    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
    let im = date.getMonth();
    let month = months[im];
    var ap, hours, mins;

    var t = new Date();
    if (t.getHours() > 12) {
        hours = t.getHours() - 12;
        ap = 'PM';
    }
    else {
        if (t.getHours() === 0) {
            hours = 12
        }
        else {
            hours = t.getHours();
        }
        ap = 'AM';

    }
    if (t.getMinutes() > 9) {
        mins = t.getMinutes();
    }
    else {
        mins = '0' + t.getMinutes();
    }
    var time = hours + "." + mins + ap;


    return (
        <div>
            <div className="first-nav" style={
                {
                    'textTransform': 'uppercase',
                    'display': 'flex',
                    'height': '45px',
                    'lineHeight': '30px',
                    'zIndex': '9',
                    'boxSizing': 'border-box',
                    // 'marginLeft': '5px',
                    'marginLeft': '50px',
                    'marginRight': '50px',
                    'borderBottom': '1px solid rgba(0, 0, 0, 0.05)'
                }
            }>
                <span className="edition" style={
                    {
                        'paddingTop': '7px',
                        'color': '#595959',
                        'marginLeft': '100px',
                        //'height': '45px',
                        'marginRight': '27px',
                        'display': 'inline-block',
                        'verticalAlign': 'top',
                        'position': 'relative',
                        'fontFamily': 'sans-serif',
                        // 'fontSize':'10px' 
                        'lineHeight': '30px',

                    }
                }>EDITION</span>
                <span className="country" style={
                    {
                        'paddingTop': '7px',
                        'color': '#595959',
                        'marginRight': '10px',
                        'display': 'inline-block',
                        'verticalAlign': 'top',
                        'position': 'relative',
                        'fontFamily': 'sans-serif',
                        'cursor': 'pointer',
                        'height': '30px',
                        'z-index': '9',
                        'width': '9',
                        'lineHeight': '30px',
                        'paddingRight': '36px',
                        'borderRight': '1px solid rgba(0, 0, 0, 0.05)'
                    }}>IN
                    <span style={{ 'marginTop': '1px' }}><KeyboardArrowDownIcon /></span>
                </span>

                <span class name='date-time' style={
                    {
                        'paddingTop': '7px',
                        'marginRight': '10px',
                        'paddingRight': '36px',
                        'display': 'inline-block',
                        'verticalAlign': 'top',
                        'position': 'relative',
                        'color': '#595959',
                        'fontFamily': 'sans-serif',
                        'borderRight': '1px solid rgba(0, 0, 0, 0.05)'
                    }
                }>
                    {`${day}, ${month} ${num}, 2023 | UPDATED ${time} IST`}
                </span>
                <span style={{ 'paddingTop': '4px' }}>
                    <LocationOnIcon />
                </span>
                <span style={
                    {
                        'color': '#595959',
                        'marginLeft': '8px',
                        // 'marginRight': '27px',
                        'display': 'inline-block',
                        'verticalAlign': 'top',
                        'position': 'relative',
                        'fontFamily': 'sans-serif',
                        // 'fontSize':'10px' 
                        'lineHeight': '30px',
                        'paddingTop': '5px'
                    }
                }>DELHI</span>
                <span>
                    <Button variant="danger"
                        style={
                            {
                                'background': 'rgb(227, 87, 67)',
                                'marginLeft': '13px',
                                'marginRight': '13px',
                                'fontFamily': 'sans-serif',
                                'padding': 'rgb(227, 87, 67)',
                                'margin': '2px 0 2px 13px',
                            }
                        }
                    >POLLUTION 352 AQI <KeyboardArrowRightIcon /></Button>{' '}
                </span>
                <span>
                    <Button variant="danger"
                        style={
                            {
                                'background': '#e21b22',
                                'marginLeft': '13px',
                                'fontFamily': 'sans-serif',
                                'padding': 'rgb(227, 87, 67)',
                                'margin': '2px 0 2px 220px',
                                'fontWeight': 'bold'
                            }
                        }
                    >SUBSCRIBE TO TOI+</Button>{' '}
                </span>
                <span style={
                    {
                        'color': '#595959',
                        'fontFamily': 'sans-serif',
                        'fontSize': '20px',
                        'marginLeft': '13px',
                        'letterSpacing': '-2px',
                        'paddingTop': '7px'
                    }
                }>SIGN IN</span>
                <span style={{ 'marginLeft': '20px', 'paddingTop': '7px', 'borderRadius': '100/10' }}><FacebookIcon /></span>
                <span style={{ 'marginLeft': '20px', 'paddingTop': '7px' }}><TwitterIcon /></span>
                <span style={{ 'marginLeft': '20px', 'paddingTop': '7px' }}><YouTubeIcon /></span>
            </div>
            <div className="second-nav">
                
                <img style={
                    {
                        'objectFit': 'cover',
                        'height': '86px',
                        'filter': 'inherit',
                        'cursor':'pointer'
                    }
                }
                  onClick={()=>{navigate("home"); console.log("Hi")}}
                    src="https://static.toiimg.com/photo/79638690.cms" alt="new" />
                    {/* <Link to='/'>Header</Link> */}
            </div>
            <div className="third-nav" style={
                {
                    'background': '#ececec',
                    'paddingTop': '9px',
                    'paddingBottom': '9px',
                    'fontSize': '26px',
                    'borderBottom': '2.6px solid rgba(0, 0, 0, 1)',
                    'borderTop': '1px solid rgba(0, 0, 0, 0.05)',
                    'marginLeft': '50px',
                    'cursor': 'pointer',
                    'marginRight': '50px'
                }
            }>
                <span className="toi-plus"
                    style={
                        {
                            'fontFamily': 'cursive',
                            'fontSize': '30px',
                            'fontWeight': 'bold',
                            //'marginLeft': '100px',
                            'background': '#ececec',
                            'paddingTop': '7px'
                        }
                    }
                >TOI</span>
                <span style={
                    {
                        'color': 'red',
                        'paddingTop': '10px',
                        'fontWeight': 'bolder',
                    }
                }>+</span>
                <span style={
                    {
                        'fontFamily': 'sans-serif',
                        'marginLeft': '13px',
                        'fontSize': '20px',
                        'marginTop': '10px',
                        //'paddingBottom':'5px'
                    }
                }>Explainers</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Videos</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>City</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '13px',
                    'fontSize': '20px'
                }}>India</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>World</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Bussiness</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Tech</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Cricket</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Sports</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Entertainment</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Auto</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>TV</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Web Series</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Life & Style</span>
                <span style={{
                    'fontFamily': 'sans-serif',
                    'marginLeft': '20px',
                    'fontSize': '20px'
                }}>Education</span>
                <span style={{
                    'marginLeft': '20px',

                }}><SearchIcon /></span>
                <span style={{
                    'marginLeft': '20px',

                }}><MenuIcon/> </span>
            </div>
            <div className="news"
                style={
                    {
                        'paddingTop': '8px',
                        'paddingBottom': '8px',
                        'marginLeft': '50px',
                        'cursor': 'pointer',
                        'marginRight': '50px',
                        'borderBottom': '1px solid rgba(0, 0, 0, 0.05)'
                    }
                }>
                <span style={
                    {
                        'color': '#e21b22',
                        'fontWeight': 'bold',
                        'fontFamily': 'sans-serif',
                        'marginLeft': '-94px',

                    }}
                >IN THE NEWS</span>
                <span style={
                    {
                        'fontFamily': 'sans-serif',
                        'marginLeft': '25px',
                        'fontSize': '18px',

                    }} >
                    CORONA VIRUS
                </span>
                <span style={
                    {
                        'fontFamily': 'sans-serif',
                        'marginLeft': '25px',
                        'fontSize': '18px'

                    }}>
                    DELHI MCD MAYOR ELECTION LIVE
                </span>
                <span style={
                    {
                        'fontFamily': 'sans-serif',
                        'marginLeft': '25px',
                        'fontSize': '18px'

                    }}>
                    CORONAVIRUS LIVE UPDATES
                </span>
                <span style={
                    {
                        'fontFamily': 'sans-serif',
                        'marginLeft': '25px',
                        'fontSize': '18px'

                    }}>
                    COVID CASES LIVE
                </span>
                <span style={
                    {
                        'fontFamily': 'sans-serif',
                        'marginLeft': '25px',
                        'fontSize': '18px'

                    }}>
                    BUDGET 2023
                </span>
                <span style={
                    {
                        'fontFamily': 'sans-serif',
                        'marginLeft': '25px',
                        'fontSize': '18px'

                    }}>
                    IND VS SL
                </span>
            </div>
            <div className="newsfeed">
                <Row className="landing">
                    <Col style={
                        {
                            'borderRight': '1px solid rgba(32, 32, 32, 0.32)',
                        }
                    }>
                        <CarouselLeft />
                    </Col>
                    <Col>
                        <CarouselRight />
                    </Col>
                </Row>
            </div>

        </div>
    )
}


export default Header;