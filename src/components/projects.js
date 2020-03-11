import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText} from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };

        this.toggleCategories = this.toggleCategories.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState.activeTab);
        console.log(this.state.activeTab)
    }

    toggleCategories() {
        switch (this.state.activeTab) {
            case 0:
                return (
                    <div className="projects-grid">
                        {/*react project1*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center / cover'
                            }}>
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Making portfolio site via ReactJs
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>

                        {/*react project2*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center / cover'
                            }}>
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Making portfolio site via ReactJs
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>

                        {/*react project3*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center / cover'
                            }}>
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Making portfolio site via ReactJs
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </div>
                );
            case 1:
                return (<div><h1>this is spring</h1></div>);
            case 2:
                return (<div><h1>this is Nodejs</h1></div>);
            case 3:
            default:
                return (<div><h1>this is Android</h1></div>);
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Spring</Tab>
                    <Tab>Nodejs</Tab>
                    <Tab>Android</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        );
    }
}

export default Projects;