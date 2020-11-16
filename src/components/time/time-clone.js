import React, { Component } from 'react';
import AppointmentItem from './../schedule-appointment/schedule-appointment';
import List from '@material-ui/core/List';
import AppointmentEditDialog from './../modal/modal-clone';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/time-slots';

class AppointmentDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal(appointmentItem) {
		console.log('openModal called')
		this.setState({
			isOpen: true
		});
		this.props.action.selectAppointment(appointmentItem);
	}

	closeModal() {
		console.log('closeModal called');
		this.setState({
			isOpen: false
		});
	}

    handleChange = (event) => {
		let newSelectedAppointment = {
			...this.props.selectedAppointment,
			[event.target.id]: event.target.value
		};
		this.props.action.trackAppointment(newSelectedAppointment);
    }

	handleSave = () => {
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

		// find selectedApt and replace it in main data src
		let newAppointmentDataArray = this.props.appointmentData.map(appointment => {
			if (appointment.time === this.props.selectedAppointment.time) {
		    	return updatedAppointment;
			} else {
		    	return appointment;
			}
		});

		this.props.action.updateAppointment(newAppointmentDataArray);
		this.closeModal();
	}

	render() {
		let appointmentsArray = this.props.appointmentData.map(appointmentItem => {
			return (
				<div onClick={() => this.openModal(appointmentItem)} key={appointmentItem.time}>
					<AppointmentItem 
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
				<AppointmentEditDialog
					open={this.state.isOpen}
					handleClose={this.closeModal}
					selectedAppointment={this.props.selectedAppointment}
					handleChange={this.handleChange}
					handleSave={this.handleSave}
				>
				</AppointmentEditDialog>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	appointmentData: state.updateData,
	selectedAppointment: state.selectedAppointment
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDashboard);
