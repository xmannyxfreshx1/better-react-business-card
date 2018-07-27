import React from 'react';

export default class CardProfileLinks extends React.Component {
    render(){

        return(
            <div className='card-social-links'>
                <ul className='social-links'>
                    <li><a href='https://www.linkedin.com/in/manuel-ramos-gonzalez-60244010a/'><i className={'fab fa-linkedin'}></i></a></li>
                    <li><a href='https://github.com/xmannyxfreshx1'><i className={'fab fa-github'}></i></a></li>
                    <li><a href='https://medium.com/@xmannyxfreshx1'><i className={'fab fa-medium'}></i></a></li>
                    <li><a href='https://dev.to/xmannyxfr3shx1'><i className={'fab fa-react fa-spin'}></i></a></li>
                </ul>
            </div>
        )
    }
}