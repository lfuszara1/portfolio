import React from "react"
import PropTypes from "prop-types"

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import img_slider_1 from 'images/slider1.jpg'

const styles = {
    slideOneContainer: {
        background: `url(${img_slider_1}) no-repeat`,
        backgroundSize: 'cover',
        filter: 'brightness(125%)',
        maxWidth: '95vw',
        minHeight: '100vh',
        height: 'auto',
        width: 'auto',
    }
}

class Slider extends React.Component {
    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div ref={this.props.sliderRef} id="section-slider">
                    <Box minHeight='calc(105vh + 32px)' height='110%'>
                        <Box className={classes.slideOneContainer}>

                        </Box>
                    </Box>
                </div>
            </React.Fragment>
        );
    }
}

Slider.propTypes = {
};
export default withStyles(styles)(Slider);
