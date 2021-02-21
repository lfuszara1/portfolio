import React from "react"
import PropTypes from "prop-types"

import Box from '@material-ui/core/Box';

class Projects extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div ref={this.props.projectsRef} id="section-projects">
                    <Box height='105vh'>
                        Projects: {this.props.projects}
                    </Box>
                </div>
            </React.Fragment>
        );
    }
}

Projects.propTypes = {
    projects: PropTypes.array
};
export default Projects
