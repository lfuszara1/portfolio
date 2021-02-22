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
        height: "40vh",
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

class Comments extends React.Component {
    render () {
        const { classes } = this.props;

        const xss = require("xss");

        return (
            <React.Fragment>
                <div ref={this.props.commentsRef} id="section-comments" className={classes.mainMargin}>
                    <Box minHeight='calc(105vh + 32px)' height='110%'>
                        <Grid container spacing={2} justify="center">
                            <Typography variant="h4" className={classes.hFourMargin}>Komentarze</Typography>
                            <Divider/>
                            <Grid container justify="center">
                                {this.props.comments.map((element, i) => {
                                        return <Paper key={i} className={classes.paperContainer}>
                                            <div className={classes.aboutContent}>
                                                <img className={classes.aboutImage} src={element.avatar} width="100px"
                                                     height="100%"/>
                                                <div className={classes.aboutText}>
                                                    <h6 className={classes.hSixMargin}>{element.name}</h6>
                                                    <p className={classes.pMargin}
                                                       dangerouslySetInnerHTML={{__html: xss(element.description)}}></p>
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

Comments.propTypes = {
    comments: PropTypes.array
};
export default withStyles(styles)(Comments);