import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import mylogo from '../img/mylogo.png';

class Landing extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                      <img src={mylogo} alt="avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Full Stack Web Developers</h1>
                            <hr />
                            <p>JAVA | Spring-boot | JavaScript | React | HTML/CSS | Linux | Mysql</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Githube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* T-story blog */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-rss-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;