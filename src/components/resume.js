import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl";
import mylogo from "../img/mylogo.png"
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={mylogo} alt="avatar" style={{height: '250px'}}/>
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Jamie Lee</h2>
                        <h4 style={{color: 'gray'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94024</p>
                        <h5>Phone</h5>
                        <p>(123)-456-7890</p>
                        <h5>Email</h5>
                        <p>someone@gamil.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2014}
                            endYear={2020}
                            schoolName="Konggi University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s"
                        />

                        <Education
                            startYear={2011}
                            endYear={2014}
                            schoolName="Bundang Chonang Highschool"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            endYear="on going"
                            jobName="DNX"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s"
                        />
                        <Experience
                            startYear={2017}
                            endYear={2017}
                            jobName="StarBucks Canada"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={60}
                        />
                        <Skills
                            skill="java"
                            progress={70}
                        />
                        <Skills
                            skill="spring-boot"
                            progress={90}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={40}
                        />
                        <Skills
                            skill="Linux"
                            progress={40}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;