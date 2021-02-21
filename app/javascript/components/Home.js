import React from "react"
import PropTypes from "prop-types"

import { InView } from 'react-intersection-observer';

import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { withStyles } from '@material-ui/core/styles';

import Header from "./Header"
import Sidebar from "./Sidebar";

import Slider from "./Slider";
import About from "./About"
import Technologies from "./Technologies";
import Projects from "./Projects";
import Comments from "./Comments";
import Footer from "./Footer"

const styles = {
    contentWrapper: {
        marginLeft: '256px',
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionId: 0,
        }

        this.sliderRef = React.createRef()
        this.aboutRef = React.createRef()
        this.technologiesRef = React.createRef()
        this.projectsRef = React.createRef()
        this.commentsRef = React.createRef()
    }

    handleIntersection = (value) => {
        this.setState({
            ...this.state,
            sectionId: value
        })
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <InView as="div" onChange={(inView, entry) => inView ? this.handleIntersection(1) : null}>
                        <Header />
                    </InView>

                    <Sidebar sliderRef={this.sliderRef} aboutRef={this.aboutRef} technologiesRef={this.technologiesRef} projectsRef={this.projectsRef} commentsRef={this.commentsRef} sectionId={this.state.sectionId} />

                    <div className={classes.contentWrapper}>
                        <InView as="div" rootMargin="-68px" onChange={(inView, entry) => inView ? this.handleIntersection(1) : null}>
                            <Slider sliderRef={this.sliderRef}/>
                        </InView>
                        <InView as="div" rootMargin="-4px" onChange={(inView, entry) => inView ? this.handleIntersection(2) : null}>
                            <About aboutRef={this.aboutRef} about={this.props.about}/>
                        </InView>
                        <InView as="div" rootMargin="-4px" onChange={(inView, entry) => inView ? this.handleIntersection(3) : null}>
                            <Technologies technologiesRef={this.technologiesRef} technologies={this.props.technologies}/>
                        </InView>
                        <InView as="div" rootMargin="-4px" onChange={(inView, entry) => inView ? this.handleIntersection(4) : null}>
                            <Projects projectsRef={this.projectsRef} projects={this.props.projects}/>
                        </InView>
                        <InView as="div" rootMargin="-4px" onChange={(inView, entry) => inView ? this.handleIntersection(5) : null}>
                            <Comments commentsRef={this.commentsRef} comments={this.props.comments}/>
                        </InView>
                    </div>
                    <InView as="div" onChange={(inView, entry) => inView ? this.handleIntersection(6) : null}>
                        <Footer />
                    </InView>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

Home.propTypes = {
    about: PropTypes.object,
    technologies: PropTypes.array,
    projects: PropTypes.array,
    comments: PropTypes.array
};

export default withStyles(styles)(Home);
