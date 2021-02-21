import React from "react"
import PropTypes from "prop-types"

import Box from '@material-ui/core/Box';

class About extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div ref={this.props.aboutRef} id="section-about">
                    <Box height='105vh'>
                        About: {this.props.about.name}
                    </Box>
                </div>
            </React.Fragment>
        );
    }
}

About.propTypes = {
    about: PropTypes.object
};
export default About
