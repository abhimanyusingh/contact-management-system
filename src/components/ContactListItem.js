import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import '../styles/components/ContactListItem.scss';
import {connect} from 'react-redux';
import avtarImage from '../images/avtar.jpg'
import {startRemoveContact} from '../actions/contacts';
import editImage from '../images/edit.png';
import deleteImage from '../images/delete.png';

const ContactListItem = (
    {
        dispatch,
        id,
        name,
        jobTitle,
        address,
        phone,
        email,
        company,
        jobDescription
    }) => (
        <div className="contact-card">
            <img className="circle" src={avtarImage} />
            <div className="contact-short-summary">
                <h5>{name}</h5>
                
                <small className="jobTitle">{jobTitle}</small>
                <small>{email}</small>
                <small>{company}</small>
            </div>
            <div className="contact-card-action">
                <Link to={`/edit/${id}`} title="Edit Contact">
                    <img className="icon" src={editImage} />
                </Link>

                <img className="icon" title="Delete Contact" src={deleteImage} onClick={() => {
                    dispatch(startRemoveContact({id}));
                    window.location.href='/';
                    //props.history.push('/');
                }}/>

            </div>

            

        </div>
);


export default connect()(ContactListItem); ;