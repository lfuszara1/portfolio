import React from "react"
import PropTypes from "prop-types"

import { withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
    },
    hFourMargin: {
        marginBottom: '20px',
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
    },
    aboutContent: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    formDiv: {
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
        minWidth: "350px",
        maxWidth: "100%",
    },
    formField: {
        margin: "5px 0",
    },
    formInputText: {
        color: "#333333",
    }
}

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            content: "",
            email: "",
            reCaptchaVerified: false,
        }

        this.form = React.createRef()

        this.handleVerifyContact = this.handleVerifyContact.bind(this);
        this.handleModalFormChange = this.handleModalFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleModalFormChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const token = document.querySelector('[name=csrf-token]').content
        const url = "/contact_form"

        const data = new FormData(this.form.current)

        fetch(url, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': token
            },
            body: data
        }).then(response => response.json().then(
            d => console.log(d))
        );
    }

    handleVerifyContact = (event) => {
        if (event.length > 0) {
            this.setState({
                ...this.state,
                reCaptchaVerified: true,
            })
        }
    }

    render () {
        const { classes } = this.props;

        const xss = require("xss");

        return (
            <React.Fragment>
                <GoogleReCaptcha onVerify={(event) => this.handleVerifyContact(event)} />
                <div ref={this.props.contactRef} id="section-contact" className={classes.mainMargin}>
                    <Box minHeight='calc(105vh + 32px)' height='110%'>
                        {
                            this.state.reCaptchaVerified ? <Grid container spacing={2} justify="center">
                                <Typography variant="h4" className={classes.hFourMargin}>Kontakt</Typography>
                                <Divider/>
                                <Grid container justify="center">
                                    <Paper className={classes.paperContainer}>
                                        <div className={classes.aboutContent}>
                                            <form ref={this.form} onSubmit={(event) => this.handleSubmit(event)}>
                                                <div className={classes.formDiv}>
                                                    <TextField id="name" name='contact_form[name]' className={classes.formField} inputProps={{className: classes.formInputText}} label="Imię i nazwisko" required onChange={(event) => this.handleModalFormChange(event)} value={this.state.name}/>
                                                    <TextField id="content" name='contact_form[content]' className={classes.formField} inputProps={{className: classes.formInputText}} multiline rows={4} label="Treść wiadomości" required onChange={(event) => this.handleModalFormChange(event)} value={this.state.content}/>
                                                    <TextField id="email" name='contact_form[email]' className={classes.formField} inputProps={{className: classes.formInputText}} label="Email" required onChange={(event) => this.handleModalFormChange(event)} value={this.state.email}/>

                                                    <Button variant="outlined" color="secondary" type="submit" className={classes.formField}>Wyślij</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid> : <div>Brak weryfikacji reCaptcha</div>
                        }
                    </Box>
                </div>
            </React.Fragment>
        );
    }
}

Contact.propTypes = {
};
export default withStyles(styles)(Contact);