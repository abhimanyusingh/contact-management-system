import uuid from 'uuid';
import database from '../firebase/firebase';


//ADD_CONTACT
export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    contact
});

export const startAdContact = (contactData = {}) =>{
    return (dispatch) => {
        const {
            name = '', 
            jobTitle = '', 
            address = '', 
            phone = '',
            email = '',
            company,
            jobDescription
        } = contactData;

        const contact = {
            name,
            jobTitle,
            address,
            phone,
            email,
            company,
            jobDescription
        }

        database.ref('contact').push(contact).then((ref) => {
            dispatch(addContact({
                id: ref.key,
                ...contact
            }));
        });
    }
}

//EDIT_CONTACT
export const editContact = (id, updates) => ({
    type: 'EDIT_CONTACT',
    id,
    updates
});

export const startEditContact = (id, updates) => {
    return (dispatch) => {
        return database.ref(`contact/${id}`).update(updates).then(() => {
            dispatch(editContact(id, updates));
        });
    }
}

//REMOVE_CONTACT
export const removeContact = ({id} = {}) => ({
    type: 'REMOVE_CONTACT',
    id
});


export const startRemoveContact = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`contact/${id}`).remove().then(()  => {
            dispatch(removeContact(id));
        })
    };
};

export const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    contacts
});

export const startSetContacts = () => {
    return (dispatch) => {
        return database.ref('contact').once('value').then((snapshot) => {
            const contacts = [];
            snapshot.forEach((childSnapshot)  => {
                contacts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            console.log('contacts', contacts);
            dispatch(setContacts(contacts))
        })
    }
};

