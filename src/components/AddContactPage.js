import React from 'react';
import ContactForm from './ContactForm';
import {connect} from 'react-redux'
import {startAdContact} from '../actions/contacts'

const AddContactPage = (props) => (
    <div>
        <h1>Add Contact</h1>
        <ContactForm 
            onSubmit={(contact) =>{
                props.dispatch(startAdContact(contact));
                props.history.push('/');
            }}
        />
    </div>
);


export default connect()(AddContactPage);
