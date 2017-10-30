import React from 'react';
import ContactList from './ContactList'
import ContactListFilters  from './ContactListFilters';
import '../styles/components/ContactDashboardPage.scss';

const ContactDashboardPage = () => (
    <div>
        <div className="contacts-list-header">
            <h1>Contacts List </h1>
            <ContactListFilters />
        </div>
        
        <ContactList />
    </div>
);

export default ContactDashboardPage;
