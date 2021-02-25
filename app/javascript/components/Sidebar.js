import React from "react"

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Hidden from "@material-ui/core/Hidden";

const styles = {
    drawerPaper: {
        marginTop: "64px",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
    },
    listWidth: {
        minWidth: "256px",
    },
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.executeScroll = this.executeScroll.bind(this)
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Hidden smDown>
                    <Drawer variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper }}>
                        <List className={classes.listWidth}>
                            <ListItem component={Link} onClick={() => {this.executeScroll(this.props.sliderRef)}} selected={this.props.sectionId === 1}>
                                <ListItemText primary="Home"/>
                            </ListItem>
                            <ListItem component={Link} onClick={() => {this.executeScroll(this.props.aboutRef)}} selected={this.props.sectionId === 2}>
                                <ListItemText primary="O mnie"/>
                            </ListItem>
                            <ListItem component={Link} onClick={() => {this.executeScroll(this.props.technologiesRef)}} selected={this.props.sectionId === 3}>
                                <ListItemText primary="Technologie"/>
                            </ListItem>
                            <ListItem component={Link} onClick={() => {this.executeScroll(this.props.projectsRef)}} selected={this.props.sectionId === 4}>
                                <ListItemText primary="Projekty"/>
                            </ListItem>
                            <ListItem component={Link} onClick={() => {this.executeScroll(this.props.commentsRef)}} selected={this.props.sectionId === 5}>
                                <ListItemText primary="Komentarze"/>
                            </ListItem>
                            <ListItem component={Link} onClick={() => {this.executeScroll(this.props.contactRef)}} selected={this.props.sectionId === 6}>
                                <ListItemText primary="Kontakt"/>
                            </ListItem>
                        </List>
                    </Drawer>
                </Hidden>
            </React.Fragment>
        );
    }

    executeScroll = (link) => link.current.scrollIntoView()
}

export default withStyles(styles)(Sidebar);
