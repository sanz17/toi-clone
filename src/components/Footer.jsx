import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div style={
            {
                'marginTop': '40px',
                'borderTop': '2.6px solid rgba(0, 0, 0, 1)',
                'fontFamily': 'sans-serif'

            }}>
            <Row className='landing'>
                <Col>
                    <span className='first-col'>
                        <img src="https://static.toiimg.com/photo/71215965.cms" />
                        <Row style={{ 'marginTop': '50px', 'cursor': 'pointer', 'fontSize': '18px', 'lineHeight': '40px', 'textAlign': 'left', }}>
                            <Col >
                                <ul>
                                    <ul>About us</ul>
                                    <ul>Create Your Own Ad</ul>
                                    <ul style={{ 'lineHeight': '20px' }}>Terms of Use and Grievance Redressal Policy</ul>
                                    <ul>Privacy policy</ul>
                                    <ul>Advertise with us</ul>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <ul>RSS</ul>
                                    <ul>Newsletter</ul>
                                    <ul>Feedback</ul>
                                    <ul>ePaper</ul>
                                    <ul>Sitemap</ul>
                                    <ul>Archives</ul>
                                </ul>
                            </Col>
                        </Row>

                        <p className='follow' style={
                            {
                                'fontWeight': 'bold',
                                'textAlign': 'left',
                                'fontSize': '20px',
                                //'letterSpacing': '20px',
                                'marginLeft': '60px'
                            }}>
                            FOLLOW US ON
                            <p><FacebookIcon /> <TwitterIcon /> <YouTubeIcon /></p>
                        </p>
                        <p >
                            <span
                                style={
                                    {
                                        'fontWeight': 'bold',
                                        'textAlign': 'left',
                                        'fontSize': '20px',
                                        //'letterSpacing': '20px',
                                        'marginLeft': '60px'
                                    }}
                            >OTHER TIMES GROUP NEWS SITES</span>
                            <Row style={{ 'marginTop': '50px', 'cursor': 'pointer', 'fontSize': '18px', 'lineHeight': '40px', 'textAlign': 'left' }}>
                                <Col >
                                    <ul>
                                        <ul>The Economic Times</ul>
                                        <ul>Hindi Economic Times</ul>
                                        <ul>Navbharat Times</ul>
                                        <ul>Maharashtra Times</ul>
                                        <ul>Vijaya Karnataka</ul>
                                        <ul>Telugu Samayam</ul>
                                        <ul>Tamil Samayam</ul>
                                        <ul>Malayalam Samayam</ul>
                                        <ul>Ei Samay</ul>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <ul>I am Gujarat</ul>
                                        <ul>TimesPoint</ul>
                                        <ul>Indiatimes</ul>
                                        <ul>Brand Capital</ul>
                                        <ul>Education Times</ul>
                                        <ul>Times Food</ul>
                                        <ul>Miss Kyra</ul><ul>I am Gujarat</ul>
                                        <ul>TimesPoint</ul>
                                        <ul>Indiatimes</ul>
                                        <ul>Brand Capital</ul>
                                        <ul>Education Times</ul>
                                        <ul>Times Food</ul>
                                        <ul>Miss Kyra</ul>
                                    </ul>
                                </Col>
                            </Row>
                        </p>
                    </span>
                </Col>
                <Col>
                    <span className='second-col'>
                        <p style={
                            {
                                'fontWeight': 'bold',
                                'textAlign': 'left',
                                'fontSize': '20px',
                                //'letterSpacing': '20px',
                                'marginLeft': '60px'
                            }}
                        >POPULAR CATEGORIES</p>
                        <p>
                            <Row style={{ 'marginTop': '50px', 'cursor': 'pointer', 'fontSize': '18px', 'lineHeight': '40px', 'textAlign': 'left' }}>
                                <Col >
                                    <ul>
                                        <ul>Headlines</ul>
                                        <ul>Sports News</ul>
                                        <ul>Business News</ul>
                                        <ul>India News</ul>
                                        <ul>World News</ul>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <ul>Bollywood News</ul>
                                        <ul>Health and Fitness Tips</ul>
                                        <ul>Indian TV Shows</ul>
                                        <ul>Celebrity Photos</ul>
                                    </ul>
                                </Col>
                            </Row>
                        </p>
                        <p style={
                            {
                                'fontWeight': 'bold',
                                'textAlign': 'left',
                                'fontSize': '20px',
                                //'letterSpacing': '20px',
                                'marginLeft': '60px'
                            }}>
                            TOP TRENDS
                        </p>
                        <p>
                            <Row style={{ 'marginTop': '50px', 'cursor': 'pointer', 'fontSize': '18px', 'lineHeight': '40px', 'textAlign': 'left' }}>
                                <Col >
                                    <ul>
                                        <ul>IND VS SL HIGHLIGHTS</ul>
                                        <ul>DELHI MCD MAYOR ELECTION Live</ul>
                                        <ul>Coronavirus Live updates</ul>
                                        <ul>Union Budget 2023</ul>
                                        <ul>Delhi Hit and Run Case</ul>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <ul>Power Grid Corporation</ul>
                                        <ul>US House Speaker</ul>
                                        <ul>China Covid Cases</ul>
                                        <ul>Russia Ukraine War News Live</ul>
                                        <ul>Cryptocurrency Price in India</ul>
                                        <ul>Hockey Mens World Cup</ul>
                                        <ul>Bengaluru Chennai Expressway</ul>
                                    </ul>
                                </Col>
                            </Row>
                        </p>
                        <p style={
                            {
                                'fontWeight': 'bold',
                                'textAlign': 'left',
                                'fontSize': '20px',
                                //'letterSpacing': '20px',
                                'marginLeft': '60px'
                            }}>
                            LIVING AND ENTERTAINMENT
                        </p>
                        <p>
                            <Row style={{ 'marginTop': '50px', 'cursor': 'pointer', 'fontSize': '18px', 'lineHeight': '40px', 'textAlign': 'left' }}>
                                <Col >
                                    <ul>
                                        <ul>iDiva</ul>
                                        <ul>MensXP.com</ul>
                                        <ul>Femina</ul>
                                        <ul>ETimes</ul>
                                        <ul>Grazia</ul>
                                        <ul>Zoom</ul>
                                        <ul>Travel Destinations</ul>
                                        <ul>Bombay Times</ul>
                                        <ul>Cricbuzz.com</ul>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <ul>Filmfare</ul>
                                        <ul>Online Songs</ul>
                                        <ul>TV</ul>
                                        <ul>Lifestyle</ul>
                                        <ul>Longwalks App</ul>
                                        <ul>Newspaper Subscription</ul>
                                        <ul>Food News</ul>
                                        <ul>Times Prime</ul>
                                        <ul>Whats Hot</ul>
                                    </ul>
                                </Col>
                            </Row>
                        </p>
                    </span>
                </Col>
                <Col>
                    <span className='third-col'>
                        <p style={
                            {
                                'fontWeight': 'bold',
                                'textAlign': 'left',
                                'fontSize': '20px',
                                //'letterSpacing': '20px',
                                'marginLeft': '60px'
                            }}
                        >HOT ON THE WEB</p>
                        <p>
                            <Row style={{ 'marginTop': '50px', 'cursor': 'pointer', 'fontSize': '18px', 'lineHeight': '40px', 'textAlign': 'left' }}>
                                <Col >
                                    <ul>
                                        <ul>Kajal Aggarwal</ul>
                                        <ul>Shark Tank 2</ul>
                                        <ul>Relationship Tips</ul>
                                        <ul>Somy Ali</ul>
                                        <ul>Deepika Padukone</ul>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <ul>Mrunal Thakur</ul>
                                        <ul>Tamannaah Saree Look</ul>
                                        <ul>Lionel Messi Family</ul>
                                        <ul>Healthy Food</ul>
                                        <ul>High Blood Pressure</ul>
                                    </ul>
                                </Col>
                            </Row>
                        </p>
                        <p style={
                            {
                                'fontWeight': 'bold',
                                'textAlign': 'left',
                                'fontSize': '20px',
                                //'letterSpacing': '20px',
                                'marginLeft': '60px'
                            }}>
                            TRENDING TOPICS
                        </p>
                        <p>
                            <Row style={{ 'marginTop': '50px', 'cursor': 'pointer', 'fontSize': '18px', 'lineHeight': '40px', 'textAlign': 'left' }}>
                                <Col >
                                    <ul>
                                        <ul>Deepika Padukone</ul>
                                        <ul>Malaika Arora</ul>
                                        <ul>Anushka Sharma And Virat Kohli</ul>
                                        <ul>Tribedi</ul>
                                        <ul>Priyanka Chopra</ul>
                                        <ul>Irrfan Khan</ul>
                                        <ul>Anushka Sharma Audition</ul>
                                        <ul>Regina Casandra</ul>
                                        <ul>Kareena Kapoor Khan</ul>
                                        <ul>Jacquiline Fernandez</ul>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <ul>Vicky Kaushal</ul>
                                        <ul>Divya Aggarwal</ul>
                                        <ul>Bhumi Pednekar</ul>
                                        <ul>Mobile Phones</ul>
                                        <ul>Compare Mobile</ul>
                                        <ul>Upcoming Mobile</ul>
                                        <ul>Laptops under 40000</ul>
                                        <ul>Wifi Routers</ul>
                                        <ul>Tablets under 15000</ul>
                                    </ul>
                                </Col>
                            </Row>
                        </p>
                        <p style={
                            {
                                'fontWeight': 'bold',
                                'textAlign': 'left',
                                'fontSize': '20px',
                                //'letterSpacing': '20px',
                                'marginLeft': '60px'
                            }}>
                            SERVICES
                        </p>
                        <p>
                            <Row style={{ 'marginTop': '50px', 'cursor': 'pointer', 'fontSize': '18px', 'lineHeight': '40px', 'textAlign': 'left' }}>
                                <Col >
                                    <ul>
                                        <ul>CouponDunia</ul>
                                        <ul>Magicbricks</ul>
                                        <ul>TechGig</ul>
                                        <ul>TimesJobs</ul>
                                        <ul>Bollywood News</ul>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <ul>Times Mobile</ul>
                                        <ul>Gadgets Now</ul>
                                        <ul>Careers</ul>
                                        <ul>Colombia</ul>
                                    </ul>
                                </Col>
                            </Row>
                        </p>
                    </span>
                </Col>
            </Row>
            <p style={{'color': '#595959',
                        'fontFamily': 'sans-serif',
                        'borderTop':'2px solid rgba(0, 0, 0, 0.05)'}}>
                Copyright &copy; {year} by {' '}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sanz17">
                    Sanz
                </a>
                . Made with {' '}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://reactjs.org">
                    ReactJS
                </a>
            </p>
        </div>


        //     <div className="footer" >

        //             <div className="footer__main">
        //                 <div className="footer_left">
        //                     <div className="footer__about">
        //                         <div className="footer__aboutImage">
        //                             <img src="https://static.toiimg.com/photo/71215965.cms" />
        //                         </div>
        //                         <div className="footer__leftSection">
        //                             <ul>
        //                                 <li>About us</li>
        //                                 <li>Create Your Own Ad</li>
        //                                 <li>Feedback</li>
        //                                 <li>Terms of Use and Grievance Redressal Policy</li>
        //                                 <li>ePaper</li>
        //                                 <li>Privacy policy</li>
        //                                 <li>Sitemap</li>
        //                                 <li>Advertise with us</li>
        //                                 <li>Archives</li>
        //                                 <li>RSS</li>
        //                             </ul>
        //                         </div>

        //                         <h2>FOLLOW US ON</h2>
        //                         <div className="footer__aboutSocial">
        //                             <TwitterIcon className="social" /> 
        //                             <FacebookIcon className="social" />  
        //                             <RssFeedIcon className="social" />
        //                             <YouTubeIcon className="social" />
        //                         </div>

        //                         <h2>OTHER TIMES GROUP NEWS SITES</h2>
        //                         <div className="footer__leftSection">
        //                             <ul>
        //                                 <li>The Economic Times</li>
        //                                 <li>Hindi Economic Times</li>
        //                                 <li>Navbharat Times</li>
        //                                 <li>Maharashtra Times</li>
        //                                 <li>Vijaya Karnataka</li>
        //                                 <li>Telugu Samayam</li>
        //                                 <li>Tamil Samayam</li>
        //                                 <li>Malayalam Samayam</li>
        //                                 <li>Ei Samay</li>
        //                                 <li>I am Gujarat</li>
        //                                 <li>TimesPoint</li>
        //                                 <li>Indiatimes</li>
        //                         
        //                                 <li>Brand Capital</li>
        //                                 <li>Education Times</li>
        //                                 <li>Times Food</li>
        //                                 <li>Miss Kyra</li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="footer__right">
        //                     <div className="footer__rightSection">
        //                         <h2>POPULAR CATEGORIES</h2>
        //                         <ul>
        //                             <li>Headlines</li>
        //                             <li>Sports News</li>
        //                             <li>Business News</li>
        //                             <li>India News</li>
        //                             <li>World News</li>
        //                             <li>Bollywood News</li>
        //                             <li>Health and Fitness Tips</li>
        //                             <li>Indian TV Shows</li>
        //                             <li>Celebrity Photos</li>
        //                         </ul> 
        //                     </div>
        //                     <div className="footer__rightSection">
        //                         <h2>HOT ON THE WEB</h2>
        //                         <ul>
        //                             <li>Janhvi Kapoor</li>
        //                             <li>Raai Laxmi</li>
        //                             <li>Kajal Aggarwal</li>
        //                             <li>Rakul Preet Singh</li>
        //                             <li>Covaxin Vs Covishield</li>
        //                             <li>Cornavirus Symptoms</li>
        //                             <li>Coronavirus Tests</li>
        //                             <li>KV Anand Death</li>
        //                             <li>Rishi Kapoor</li>
        //                             <li>Radhe</li>
        //                         </ul>
        //                     </div>
        //                     <div className="footer__rightSection">
        //                         <h2>TOP TRENDS</h2> 
        //                         <ul>
        //                             <li>Corona cases in India</li>
        //                             <li>Exit polls 2021</li>
        //                             <li>West Bengal Exit poll 2021</li>
        //                             <li>DC vs KKR</li>
        //                             <li>Tamil Nadu Exit Poll 2021</li>
        //                             <li>Coronavirus India update live</li>
        //                             <li>Maharashtra lockdown news</li>
        //                             <li>Delhi lockdown news</li>
        //                             <li>KV Anand</li>
        //                             <li>AP Inter Hall Ticket 2021</li>
        //                             <li>Kerala Exit Poll 2021</li>
        //                             <li>Puducherry Exit Poll</li>
        //                             <li>IPL 2021 Schedule</li>
        //                             <li>Bank Holidays in May 2021</li>
        //                             <li>Farmers protest in India</li>
        //                             <li>News</li>
        //                             <li>Horoscope today</li>
        //                             <li>Step by Step Pizza Recipe</li>
        //                         </ul>
        //                     </div>

        //                     <div className="footer__rightSection">
        //                         <h2>TRENDING TOPICS</h2>
        //                         <ul>
        //                             <li>Deepika Padukone</li>
        //                             <li>Malaika Arora</li>
        //                             <li>Anushka Sharma And Virat Kohli</li>
        //                             <li>Tribedi</li>
        //                             <li>Priyanka Chopra</li>
        //                             <li>Irrfan Khan</li>
        //                             <li>Anushka Sharma Audition</li>
        //                             <li>Regina Casandra</li>
        //                             <li>Kareena Kapoor Khan</li>
        //                             <li>Jacquiline Fernandez</li>
        //                             <li>Vicky Kaushal</li>
        //                             <li>Divya Aggarwal</li>
        //                             <li>Bhumi Pednekar</li>
        //                             <li>Mobile Phones</li>
        //                             <li>Compare Mobile</li>
        //                             <li>Upcoming Mobile</li>
        //                             <li>Laptops under 40000</li>
        //                             <li>Wifi Routers</li>
        //                             <li>Tablets under 15000</li>
        //                         </ul>
        //                     </div>
        //                     <div className="footer__rightSection">
        //                         <h2>LIVING AND ENTERTAINMENT</h2>

        //                         <ul>
        //                             <li>iDiva</li>
        //                             <li>MensXP.com</li>
        //                             <li>Femina</li>
        //                             <li>ETimes</li>
        //                             <li>Grazia</li>
        //                             <li>Zoom</li>
        //                             <li>Travel Destinations</li>
        //                             <li>Bombay Times</li>
        //                             <li>Cricbuzz.com</li>
        //                             <li>Filmfare</li>
        //                             <li>Online Songs</li>
        //                             <li>TV</li>
        //                             <li>Lifestyle</li>
        //                             <li>Longwalks App</li>
        //                             <li>Newspaper Subscription</li>
        //                             <li>Food News</li>
        //                             <li>Times Prime</li>
        //                             <li>Whats Hot</li>
        //                         </ul>
        //                     </div>
        //                     <div className="footer__rightSection">
        //                         <h2>SERVICES</h2>
        //                         <ul>
        //                             <li>CouponDunia</li>
        //                             <li>Magicbricks</li>
        //                             <li>TechGig</li>
        //                             <li>TimesJobs</li>
        //                             <li>Bollywood News</li>
        //                             <li>Times Mobile</li>
        //                             <li>Gadgets Now</li>
        //                             <li>Careers</li>
        //                             <li>Colombia</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>


        //     </div>
    );
}

export default Footer;