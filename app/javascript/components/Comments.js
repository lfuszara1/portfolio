import React from "react"
import PropTypes from "prop-types"

import Box from '@material-ui/core/Box';

class Comments extends React.Component {
    render () {

        return (
            <React.Fragment>
                <div ref={this.props.commentsRef} id="section-comments">
                    <Box height='105vh'>
                        Comments: {this.props.comments}
                    </Box>
                </div>
            </React.Fragment>
        );
    }
}

Comments.propTypes = {
    comments: PropTypes.array
};
export default Comments
