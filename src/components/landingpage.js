import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends React.Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                    alt="avater"
                    className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full-Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB </p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Freecodecamp */}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>

                            {/* Youtube */}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>
                        </div>

                    </div>
                </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;
