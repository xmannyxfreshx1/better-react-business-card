import React from 'react';

export default class CardProfileLinks extends React.Component {
    render(){

        return(
            <div className='card-social-links'>
                <ul className='social-links'>
                    <li><a href='https://twitter.com/xMANNYxFR3SHx1?lang=en'><i className={'fab fa-twitter'}></i></a></li>
                    <li><a href='https://www.linkedin.com/in/manuel-ramos-gonzalez-60244010a/'><i className={'fab fa-linkedin'}></i></a></li>
                    <li><a href='https://github.com/xmannyxfreshx1'><i className={'fab fa-github'}></i></a></li>
                    <li><a href='https://www.facebook.com/profile.php?id=100000307123534'><i className={'fab fa-facebook'}></i></a></li>
                </ul>
            </div>
        )
    }
}