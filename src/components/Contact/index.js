import React, {Component} from 'react';
import '../components.css';
import female from '../female.svg';
import male from '../male.svg';

class Contact extends Component{
    render(){

        return(
            <div>
                <div className='contacts'>
                    {
                    this.props.contactCards.map((contact, item) => (
                    <div className='card' key={item+contact.firstName}>
                    <h5>{contact.firstName + ' ' + contact.lastName}</h5>
                    <p>{contact.gender}</p>
                    { contact.gender=== 'male' && <img src={male} alt='male'/> }
                    { contact.gender=== 'female' && <img src={female} alt='female'/> }
                    <p>{contact.phone}</p>
                    </div>
                    ))
                    }
                </div>
            </div>
        );
    }
}

export default Contact;