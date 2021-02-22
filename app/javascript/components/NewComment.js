import React, {Component} from 'react';

import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";

import {withStyles} from "@material-ui/core/styles";

const styles = {
    paperContainer: {
        color: "#333333",
        width: "40vw",
        height: "40vh",
        padding: "50px",
    },
    formField: {
        minWidth: "100%",
    }
}

class NewComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reCaptchaVerified: false
        }

        this.form = React.createRef()

        this.handleVerifyNewComment = this.handleVerifyNewComment.bind(this)
    }

    handleVerifyNewComment = (event) => {
        if (event.length > 0) {
            this.setState({
                ...this.state,
                reCaptchaVerified: true,
            })
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const token = document.querySelector('[name=csrf-token]').content
        const url = "/comments"

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

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <GoogleReCaptcha onVerify={(event) => this.handleVerifyNewComment(event)} />
                <Button variant="outlined" onClick={() => this.props.handleModalOpen()}>
                    Dodaj komentarz
                </Button>
                <Dialog open={ this.props.modalState } onClose={() => this.props.handleModalClose()} className={classes.dialogContainer}>
                    <Paper className={classes.paperContainer}>
                        <form ref={this.form} onSubmit={(event) => this.handleSubmit(event)}>
                            <label htmlFor="name">Imię i nazwisko</label>
                            <input id="name" name='comment[name]' onChange={(event) => this.props.handleModalFormChange(event)} className={classes.formField} value={this.props.name}/>
                            <br/>
                            <label htmlFor="description">Opis</label>
                            <textarea id="description" name='comment[description]' onChange={(event) => this.props.handleModalFormChange(event)} className={classes.formField} value={this.props.description}/>
                            <br/>
                            <label htmlFor="stars">Ocena</label>
                            <input type="number" id="stars" name='comment[stars]' onChange={(event) => this.props.handleModalFormChange(event)} className={classes.formField} value={this.props.stars}/>
                            <br/>
                            <label htmlFor="avatar" className={classes.formField}>Awatar</label>
                            <input type="file" id="avatar" name='comment[avatar]' onChange={(event) => this.props.handleModalFormChange(event)} className={classes.formField} value={this.props.avatar}/>
                            <br/>
                            <Button type="submit">Zapisz</Button>
                        </form>
                    </Paper>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(NewComment);