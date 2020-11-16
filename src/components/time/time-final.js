import React, { Component } from 'react';
import ScheduleAppointment from '../schedule-appointment/schedule-appointment'
import List from '@material-ui/core/List';
import Modal from '../modal/modal-final-method';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/time-slots';

class TimeFinal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			errors: {}
		}
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal(appointmentItem) {
		console.log('openModal called');
		this.setState({
			isOpen: true
		});
		this.props.action.selectAppointment(appointmentItem);
	}

	closeModal() {
		console.log('props', this.props.selectedAppointment);
		console.log('closeModal called');
		this.setState({
			isOpen: false
		});
	}

	// openModal(appointmentItem) {
	// 	this.props.action.toggleDialog();
	// 	this.props.action.selectAppointment(appointmentItem);
	// }

	// closeModal() {
	// 	this.props.action.toggleDialog();
	// }

    handleChange = (event) => {
		let newSelectedAppointment = {
			...this.props.selectedAppointment,
			[event.target.id]: event.target.value
		};
		this.props.action.trackAppointment(newSelectedAppointment);
    }

	handleSave = () => {
				// localStorage.setItem('data', JSON.stringify(this.props.selectedAppointment));

		console.log('selectedAppointment', this.props.selectedAppointment.name);
		let updatedAppointment;
		// edit state of availability to conditionally render red background
		if (this.props.selectedAppointment.name !== '' || this.props.selectedAppointment.phone !== '') {
			updatedAppointment = {
		    	...this.props.selectedAppointment,
		    	available: false
			};
		} else {
			updatedAppointment = {
		    	...this.props.selectedAppointment,
		    	available: true
			};
		}

		// return newState;

		// find selectedApt and replace it in main data src
		let newAppointmentDataArray = this.props.updateData.map(appointment => {
			if (appointment.time === this.props.selectedAppointment.time) {
		    	return updatedAppointment;
			} else {
		    	return appointment;
			}
		});




		this.props.action.updateAppointment(newAppointmentDataArray);
		let newState = {
			...this.props,
			...this.state.isOpen,
		}

		localStorage.setItem('data', JSON.stringify(newState));
		console.log('newState', newState);
		// localStorage.setItem('data', JSON.stringify(newState));

		if(this.handleValidation()) {
			console.log('I am here');
			this.closeModal();
			// this.props.action.toggleDialog();
        } 
        		// localStorage.setItem('data', JSON.stringify(newState));

  // 		JSON.parse(localStorage.getItem('data'));
		// const json = localStorage.getItem('data');
		// const data = JSON.parse(json) || []; // set default value here
		// console.log('json', json);
		// console.log('data', data);
	}

	handleValidation = () => {
		console.log('validating');
        let errors = {};
        let formIsValid = true;

        const { name, phone } = this.props.selectedAppointment;

	    if(phone && phone.length !== 10) {
	    	console.log('validation-selectedAppointment.phone', this.props.selectedAppointment.phone);
	    	formIsValid = false;
	    	errors["phone"] = "Must be 10 digits long";
	    }

	    if(name.length > 20) {
	    	formIsValid = false;
	    	errors["name"] = "Too long"
	    }

	    if (name && !isNaN(name)) {
	    	formIsValid = false;
	    	errors["name"] = "Must be a string";
	    }

	    if(isNaN(phone)) {
	    	formIsValid = false;
	    	errors["phone"] = "Should be a number";
	    }

	    if(name && name !== name.trim()) {
	    	formIsValid = false;
	    	errors["name"] = "Cannot start or end with whitespace"
	    }
	    this.setState({
	    	errors: errors
	    });
		return formIsValid;
	}

	render() {
		let appointmentsArray = this.props.updateData.map(appointmentItem => {
			return (
				<div onClick={() => this.openModal(appointmentItem)} key={appointmentItem.time}>
					<ScheduleAppointment
					time={appointmentItem.time} 
					name={appointmentItem.name} 
					phone={appointmentItem.phone}
					available={appointmentItem.available} 
					/>
				</div>
			) 
		});

		return (
			<div className="appointment-dashboard">
				<List component="nav">
					{appointmentsArray}
				</List>
				<Modal
					open={this.state.isOpen}
					handleClose={this.closeModal}
					data={this.props.selectedAppointment}
					handleChange={this.handleChange}
					handleSave={this.handleSave}
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	updateData: state.updateData,
	// open: state.open,
	selectedAppointment: state.selectedAppointment
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeFinal);
