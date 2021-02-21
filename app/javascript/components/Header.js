import React from "react"

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
}


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" color="textPrimary">
                            Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Header);
