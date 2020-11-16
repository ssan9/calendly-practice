import React from 'react';
import './modal.css';
import {required, nonEmpty, isTrimmed, length} from './validators';

export default class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fName: {
				value: ''
			},
			contact: {
				value: ''
			},
			errors: {}
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleValidation = this.handleValidation.bind(this);
	}

	handleValidation() {
		let name = this.state.fName.value;
		let contact = this.state.contact.value
        let errors = {};
        let formIsValid = true;

		if(!name || name.trim().length === 0){
	      formIsValid = false;
	      errors["name"] = "Required";
	    }

	    if(!contact || contact.trim().length === 0) {
	    	formIsValid = false;
	    	errors["contact"] = "Required";
	    }

	     if(contact && contact.length !== 10) {
	    	formIsValid = false;
	    	errors["contact"] = "Must be 10 digits long";
	    }

	    if(name.length > 20) {
	    	formIsValid = false;
	    	errors["name"] = "Too long"
	    }

	    if (name && !isNaN(name)) {
	    	formIsValid = false;
	    	errors["name"] = "Must be a string";
	    }

	    if(isNaN(contact)) {
	    	formIsValid = false;
	    	errors["contact"] = "Should be a number";
	    }

	    if(name && name !== name.trim()) {
	    	formIsValid = false;
	    	errors["name"] = "Cannot start or end with whitespace"
	    }

	    // if(name && !name.trim()) {
	    // 	formIsValid = false;
	    // 	errors["name"] = "Cannot start or end with whitespace"
	    // }

	    this.setState({errors: errors});
		return formIsValid;
	}

	handleChange(event) {
		const { name, value } = event.target
		this.setState({
			...this.state,
			[name]: {
				value
			}
		});
	}

	handleSubmit(event) {
    	event.preventDefault();
        if(this.handleValidation()) {
        	this.props.close();
        } 
	}

  	handleCancel(event) {
    	event.preventDefault();
        alert('Cancel clicked ' + this.state.contact);
  	}

 	render() {
		return (
			<div>
			{this.props.open &&
			<form className="registration-form" onSubmit={this.handleSubmit}>
				<div className="small">
					<div className="form-data">
						<label htmlFor="fName">
							Full Name
							<input type="text" 
							 name="fName"
							 value={this.state.fName.value}  
							 onChange={this.handleChange}/>
							 <span className="error">{this.state.errors["name"]}</span>
						</label>
					</div>
					<div className="form-data">
						<label htmlFor="pNumber">
							Phone Number
						<input type="phone" 
						 name="contact"
						 value={this.state.contact.value}  
						 onChange={this.handleChange} />
						 <span className="error">{this.state.errors["contact"]}</span>
						</label>
					</div>
					<div className="buttons">
						<button className="man" type="submit">Submit</button>
						<button onClick={this.props.close} className="man" type="cancel">Cancel</button>
					</div>
				</div>
			</form>
			}
			</div>
		);
	}
}


