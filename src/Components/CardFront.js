import React from 'react';
import picture from '/Users/Manuel/WebstormProjects/better_react_card/client/src/picture copy.jpg';

export  default class CardFront extends React.Component {
    render() {
        return(
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img width="358" height="458" src={picture} alt="picture"/>
                        </div>

                        <div className='col-xs-6 side-front-content'>
                            <h2>Durham, NC based</h2>

                            <h1>React Software Engineer</h1>

                            <p>Manuel Ramos Gonzalez</p>

                            <p>He is currently an intern for the non-profit Code the Dream.</p>

                            <p>Passion for building great apps!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}