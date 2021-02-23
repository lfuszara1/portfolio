import React, {Component} from 'react';

import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";

import {withStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const styles = {
    paperContainer: {
        color: "#333333",
        width: "35vw",
        height: "45vh",
        padding: "50px",
    },
    formDiv: {
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
        maxWidth: "100%",
    },
    formField: {
        margin: "5px 0",
    },
    formInputText: {
        color: "#333333",
    }
}

class NewComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reCaptchaVerified: false
        }

        this.form = React.createRef()

        this.handleVerifyNewComment = this.handleVerifyNewComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleVerifyNewComment = (event) => {
        if (event.length > 0) {
            this.setState({
                ...this.state,
                reCaptchaVerified: true,
            })
        }
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
            () => this.props.handleModalClose())
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <GoogleReCaptcha onVerify={(event) => this.handleVerifyNewComment(event)} />
                {
                    this.state.reCaptchaVerified ?
                        <div className={classes.formDiv}>
                            <Button variant="outlined" color="secondary" onClick={() => this.props.handleModalOpen()}>
                                Dodaj komentarz
                            </Button>
                            <Dialog open={this.props.modalState} onClose={() => this.props.handleModalClose()}>
                                <Paper className={classes.paperContainer}>
                                    <form ref={this.form} className={classes.formDiv} onSubmit={(event) => this.handleSubmit(event)}>
                                        <TextField id="name" name='comment[name]' className={classes.formField}
                                                   inputProps={{className: classes.formInputText}} label="Imię i nazwisko"
                                                   required onChange={(event) => this.props.handleModalFormChange(event)}
                                                   value={this.props.name}/>
                                        <TextField id="description" name='comment[description]'
                                                   className={classes.formField}
                                                   inputProps={{className: classes.formInputText}} multiline rows={4} label="Opis, minimum 100 znaków" required
                                                   onChange={(event) => this.props.handleModalFormChange(event)}
                                                   value={this.props.description}/>
                                        <TextField type="number" id="stars" name='comment[stars]'
                                                   className={classes.formField}
                                                   inputProps={{className: classes.formInputText}} label="Ocena 1-6" required
                                                   onChange={(event) => this.props.handleModalFormChange(event)}
                                                   value={this.props.stars}/>
                                        <TextField type="file" id="avatar" name='comment[avatar]'
                                                   className={classes.formField}
                                                   inputProps={{className: classes.formInputText}} label="Awatar" required
                                                   onChange={(event) => this.props.handleModalFormChange(event)}
                                                   value={this.props.avatar}/>
                                        <Button variant="outlined" color="secondary" type="submit"
                                                className={classes.formField}>Zapisz</Button>
                                    </form>
                                </Paper>
                            </Dialog>
                        </div>
                        : <div>Brak weryfikacji reCaptcha</div>
                }
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(NewComment);