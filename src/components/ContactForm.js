import React from 'react';
import moment from 'moment';
import '../styles/components/contactForm.scss';

class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : props.contact ? props.contact.name : '',
            jobTitle: props.contact ? props.contact.jobTitle : '',
            address: props.contact ? props.contact.address : '',
            phone: props.contact ? props.contact.phone : '',
            email: props.contact ? props.contact.email : '',
            company: props.contact ? props.contact.company : '',
            jobDescription: props.contact ? props.contact.jobDescription : '',
            error: ''
        };
    }
    
    OnChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.name || !this.state.jobTitle) {
            this.setState(() =>({ error: 'Please fill the mandatory field.' }));
        } else {
            this.setState(() =>({ error: '' }));
            this.props.onSubmit({
                name : this.state.name,
                jobTitle: this.state.jobTitle,
                address: this.state.address,
                phone: this.state.phone,
                email: this.state.email,
                company: this.state.company,
                jobDescription: this.state.jobDescription,
            });
        }
    };


    render() {
        return (
            <div  className="contact-create-container">
               <form onSubmit={this.onSubmit}>
                    <label>Full Name</label>
                    <input 
                        type ="text"
                        name = "name"
                        placeholder= "Full Name" 
                        autoFocus
                        value={this.state.name}
                        onChange={this.OnChange}
                        />

                    <label>Job Title</label>
                    <input 
                        type="text"
                        name = "jobTitle"
                        placeholder="Enter job title"
                        value={this.state.jobTitle}
                        onChange={this.OnChange}
                        />

                    <label>Company</label>
                    <input 
                        type="text"
                        name="company"
                        placeholder="Enter company name"
                        value={this.state.company}
                        onChange={this.OnChange}
                    />

                    <label>Job Description</label>
                    <textarea
                        name="jobDescription"
                        placeholder="Enter Job Description"
                        value={this.state.jobDescription}
                        onChange={this.OnChange}
                    >
                    </textarea>

                    <label>Contact Number</label>
                    <input 
                        type="text"
                        name="phone"
                        placeholder="Enter contact number"
                        value={this.state.phone}
                        onChange={this.OnChange}
                    />

                    <label>Email</label>
                    <input 
                        name="email"
                        type="text"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.OnChange}
                    />

                    <label >Address</label>
                    <textarea
                        name="address"
                        placeholder="Enter Adress"
                        value={this.state.address}
                        onChange={this.OnChange}
                    >
                    </textarea>    
                    <button>{this.state.name ? 'Update Contact' : 'Add Contact'}</button>
                </form>
            </div>
        )
    }
}


export default ContactForm;