import React from "react"
import PropTypes from "prop-types"

import { withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const styles = {
    paperContainer: {
        color: "#333333",
        width: "35vw",
        height: "20vh",
        padding: "25px 50px 50px 50px",
    },
    hFourMargin: {
        marginBottom: '20px',
    },
    aboutContent: {
        display: "flex",
        flexDirection: "row"
    },
    aboutImage: {
        borderRadius: "50px",
    },
    aboutText: {
        display: "flex",
        flexDirection: "column",
    },
    hSixMargin: {
        margin: "5px 5px"
    },
    pMargin: {
        margin: "0 10px"
    }
}

class About extends React.Component {
    render () {
        const { classes } = this.props;

        const xss = require("xss");
        const description = xss(this.props.about.description);

        return (
            <React.Fragment>
                <div ref={this.props.aboutRef} id="section-about">
                    <Box height='calc(105vh + 32px)'>
                        <Grid container spacing={2} justify="center">
                            <Typography variant="h4" className={classes.hFourMargin}>O mnie</Typography>
                            <Divider/>
                            <Grid container justify="center">
                                <Paper className={classes.paperContainer}>
                                    <div className={classes.aboutContent}>
                                        <img className={classes.aboutImage} src={this.props.about.avatar} width="100px" height="100px"/>
                                        <div className={classes.aboutText}>
                                            <h6 className={classes.hSixMargin}>{this.props.about.name}</h6>
                                            <p className={classes.pMargin} dangerouslySetInnerHTML={{ __html: description }}></p>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </React.Fragment>
        );
    }
}

About.propTypes = {
    about: PropTypes.object
};
export default withStyles(styles)(About);
