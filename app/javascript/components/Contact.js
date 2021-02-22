import React from "react"
import PropTypes from "prop-types"

import { withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

const styles = {
    mainMargin: {
        marginTop: '8px',
        marginBottom: '8px',
    },
    paperContainer: {
        color: "#333333",
        width: "40vw",
        height: "60vh",
        padding: "25px 50px 50px 50px",
        margin: "12px 0",
    },
    hFourMargin: {
        marginBottom: '20px',
    },
    aboutContent: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    }
}

class Contact extends React.Component {
    render () {
        const { classes } = this.props;

        const xss = require("xss");

        return (
            <React.Fragment>
                <div ref={this.props.contactRef} id="section-contact" className={classes.mainMargin}>
                    <Box minHeight='calc(105vh + 32px)' height='110%'>
                        <Grid container spacing={2} justify="center">
                            <Typography variant="h4" className={classes.hFourMargin}>Kontakt</Typography>
                            <Divider/>
                            <Grid container justify="center">
                                <Paper className={classes.paperContainer}>
                                    <div className={classes.aboutContent}>

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

Contact.propTypes = {
};
export default withStyles(styles)(Contact);