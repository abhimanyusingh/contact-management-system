import React from 'react';
import {connect} from 'react-redux';
import ContactForm from './ContactForm';
import {startEditContact} from '../actions/contacts';

const EditContactPage = (props) => {

    return (
        <div>
            <h1>Edit Contact</h1>
            
            <ContactForm
                contact={props.contact}
                onSubmit= {(contact) =>{
                    props.dispatch(startEditContact(props.contact.id, contact));
                    props.history.push('/');
                }}
            />
            
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find((contact) => contact.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditContactPage);