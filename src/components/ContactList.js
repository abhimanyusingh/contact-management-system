import React from 'react';
import {connect} from 'react-redux';
import ContactListItem from './ContactListItem';
import selectContacts  from '../selectors/contacts';
import '../styles/components/ContactList.scss';

const ContactList = (props) => (
    <div className="contacts-box">
        {
            ( props.contacts.length > 0 ? props.contacts.map((contact) =>{
                return <ContactListItem key= {contact.id} {...contact} />
            })
            :  <h3>No Contact Found</h3> )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        contacts: selectContacts(state.contacts, state.filters)
    }
}

export default connect(mapStateToProps)(ContactList);

