import React, {Component} from 'react';

import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

class NewComment extends Component {
    constructor(props) {
        super(props);

        this.handleVerifyNewComment = this.handleVerifyNewComment.bind(this)
    }

    handleVerifyNewComment = (event) => {
        console.log(event)
    }

    render() {
        return (
            <React.Fragment>
                <GoogleReCaptcha onVerify={(event) => this.handleVerifyNewComment(event)}>

                </GoogleReCaptcha>
            </React.Fragment>
        );
    }
}

export default NewComment;