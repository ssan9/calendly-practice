import React from 'react';
import './modal.css';
import {required, nonEmpty, isTrimmed, length} from './validators';

export default class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			contact: '',
			errors: {}
		}
		
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleContactChange = this.handleContactChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleValidation = this.handleValidation.bind(this);
	}

	handleValidation() {
		// let fields = this.state.fields;
		let name = this.state.name;
		let contact = this.state.contact
        let errors = {};
        let formIsValid = true;

		if(!name){
	      formIsValid = false;
	      errors["name"] = "Required";
	    }

	    if(!contact) {
	    	formIsValid = false;
	    	errors["contact"] = "Required";
	    }

	    if(contact.length !== 10) {
	    	formIsValid = false;
	    	errors["contact"] = "Must be 10 digits long"
	    }

	    if(name.length > 20) {
	    	formIsValid = false;
	    	errors["name"] = "Too long"
	    }


		// if (contact) {
		// 	return undefined 
		// } else {
		// 	return 'Required';
		// }

		// if (name.trim() !== '') {
		// 	formIsValid = false;
		// } else {
		// 	errors["name"] = "Cannot be empty";
		// }

		// if (!name.trim()) {
		// 	formIsValid = false;
		// 	errors["name"] = 'Cannot start or end with whitespace';
		// }
		// this.setState({errors: errors});
  //   	return formIsValid;

		  // if(!name){
		  //     formIsValid = false;
		  //     errors["name"] = "Cannot be empty";
		  //   }

		     this.setState({errors: errors});
   			 return formIsValid;
	}

	handleNameChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleContactChange(event) {
		this.setState({
			contact: event.target.value
		});
	}


	handleSubmit(event) {
    	event.preventDefault();
        // this.setState({
        // 	name: this.state.name,
        // 	contact: this.state.contact
        // })
        // if(this.handleValidation()) {
        // 	alert (`the name is submitted: ${this.state.name}`);
        // } else{
        //        alert("Form has errors.")
        // }
        if (this.handleValidation()) {
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
							 refs="fName"
							 value={this.state.name}  
							 onChange={this.handleNameChange}/>
							 <span className="error">{this.state.errors["name"]}</span>
						</label>
					</div>
					<div className="form-data">
						<label htmlFor="pNumber">
							Phone Number
						<input type="phone" 
						 value={this.state.contact}  
						 onChange={this.handleContactChange} />
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


