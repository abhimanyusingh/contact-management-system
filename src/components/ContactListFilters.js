import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';


const ContactListFilters = (props) => (
    <div className="contact-search">
        <input 
            type="text" 
            placeholder="Search Contact..."
            value={props.filters.text} 
            onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}/>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    } 
}

export default connect(mapStateToProps)(ContactListFilters);