import React from "react"
import PropTypes from "prop-types"

import Box from '@material-ui/core/Box';

class Technologies extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div ref={this.props.technologiesRef} id="section-technologies">
                    <Box height='105vh'>
                        Technologies: {this.props.technologies}
                    </Box>
                </div>
            </React.Fragment>
        );
    }
}

Technologies.propTypes = {
    technologies: PropTypes.array
};
export default Technologies
