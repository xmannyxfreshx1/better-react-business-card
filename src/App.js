import React, { Component } from 'react';
import CardFront from './Components/CardFront';
import CardBack from './Components/CardBack';
import '/Users/Manuel/WebstormProjects/better_react_card/client/src/App.css'
import axios from 'axios';

import { connect } from 'react-redux';
import { userName} from "./Actions/userAction";
import { userLastName } from "./Actions/userActionLast";
import { userSubject } from "./Actions/subjectAction";
import { userEmail } from "./Actions/emailAction";
import { userMessage } from "./Actions/messageAction";

class App extends Component {
    constructor(props){
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
        this.onUpdateLastname = this.onUpdateLastname.bind(this);
        this.onUpdateEmail = this.onUpdateEmail.bind(this);
        this.onUpdateSubject = this.onUpdateSubject.bind(this);
        this.onUpdateMessage = this.onUpdateMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //this.onButtonSubmit = this.onButtonSubmit.bind(this);
    }

    onUpdateUser(event){
        event.preventDefault();
        this.props.onUpdateName(event.target.value);
        console.log(event.target.value);
    }

    onUpdateLastname(event){
        event.preventDefault();
        this.props.onUpdateLast(event.target.value);
        console.log(event.target.value);
    }

    onUpdateEmail(event){
        event.preventDefault();
        this.props.onUpdateEmail(event.target.value);
        console.log(event.target.value);

    }

    onUpdateSubject(event){
        event.preventDefault();
        this.props.onUpdateSubject(event.target.value);
        console.log(event.target.value);

    }

    onUpdateMessage(event){
        event.preventDefault();
        this.props.onUpdateMessage(event.target.value);
        console.log(event.target.value);
    }

    async handleSubmit(event){
        event.preventDefault();
        const name = this.props.firstName + ' ' + this.props.lastName;
        const email = this.props.email;
        const subject = this.props.subject;
        const message = this.props.message;

        const form = await axios.post('/api/form', {
            name,
            email,
            subject,
            message,

        });
    }



    render() {
        return (
            <div className='card-container'>
                <div className='card-body'>
                    <CardBack handleSubmit={this.handleSubmit}  onUpdateMessage={this.onUpdateMessage} onUpdateSubject={this.onUpdateSubject} onUpdateEmail={this.onUpdateEmail} onUpdateLastname={this.onUpdateLastname} onUpdateUser = {this.onUpdateUser} />

                    <CardFront />
                </div>


            </div>
        );
    }
}

const mapStateToProps = state =>({
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    subject: state.subject,
    message: state.message
});

const mapActionsToProps = {
    onUpdateName: userName,
    onUpdateLast: userLastName,
    onUpdateEmail: userEmail,
    onUpdateSubject: userSubject,
    onUpdateMessage: userMessage
};



export default connect(mapStateToProps, mapActionsToProps)(App);