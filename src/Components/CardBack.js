import React from 'react';
import CardProfileLinks from './CardProfileLinks';

export default class CardBack extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <h1>Let's get in touch!</h1>

                    <form formAction='' className='card-form'>
                        <div className='row'>
                            <div className='col-xs-6'>
                                <form onChange={this.props.onUpdateUser}>
                                    <input name="username" type='text' placeholder='Your first name...' required />
                                </form>

                            </div>

                            <div className='col-xs-6'>
                                <form onChange={this.props.onUpdateLastname}>
                                    <input name="last" type='text' placeholder='Your last name...' required />
                                </form>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-xs-6'>

                                <form onChange={this.props.onUpdateEmail}>
                                    <input name="email" type='email' placeholder='Your email...' required />
                                </form>

                            </div>

                            <div className='col-xs-6'>

                                <form onChange={this.props.onUpdateSubject}>
                                    <input name="subject" type='text' placeholder='Subject...' required />
                                </form>

                            </div>
                        </div>

                        <form onChange={this.props.onUpdateMessage}>
                            <textarea name="message" type='text' placeholder='Your message here...' required />
                        </form>


                        <button onClick={this.props.handleSubmit} className="btn btn-danger" type='submit'>Send message</button>

                    </form>

                    <CardProfileLinks />
                </div>
            </div>
        )
    }
}