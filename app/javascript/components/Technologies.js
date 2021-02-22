import React from "react"
import PropTypes from "prop-types"

import { withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Star} from "@material-ui/icons";

const styles = {
    mainMargin: {
        marginTop: '8px',
        marginBottom: '8px',
    },
    paperContainer: {
        color: "#333333",
        width: "40vw",
        height: "300px",
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
    },
    stars: {
        color: '#30B077'
    }
}

class Technologies extends React.Component {
    render () {
        const { classes } = this.props;

        const xss = require("xss");

        return (
            <React.Fragment>
                <div ref={this.props.technologiesRef} id="section-technologies" className={classes.mainMargin}>
                    <Box minHeight='calc(105vh + 32px)' height='110%'>
                        <Grid container spacing={2} justify="center">
                            <Typography variant="h4" className={classes.hFourMargin}>Technologie</Typography>
                            <Divider/>
                            <Grid container justify="center">
                                {this.props.technologies.map((element, i) => {
                                        return <Paper key={i} className={classes.paperContainer}>
                                            <div className={classes.aboutContent}>
                                                <img className={classes.aboutImage} src={element.logo} width="100px"
                                                     height="100%"/>
                                                <div className={classes.aboutText}>
                                                    <h6 className={classes.hSixMargin}>{element.name}</h6>
                                                    <p className={classes.pMargin}
                                                       dangerouslySetInnerHTML={{__html: xss(element.description)}}></p>
                                                    <p className={classes.stars}>
                                                        {[...Array(element.level).keys()].map(() =>
                                                            <Star />
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </Paper>
                                    }
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </React.Fragment>
        );
    }
}

Technologies.propTypes = {
    technologies: PropTypes.array
};
export default withStyles(styles)(Technologies);
