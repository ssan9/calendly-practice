import React from 'react';
import Modal from '../modal/modal-shorter-method';
import * as Actions from '../../actions/time-slots'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';


class Time extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};	
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	openModal(time) {
		this.setState({
			isOpen: true
		});
	}

	closeModal() {
		this.setState({
			isOpen: false
		});
	}

	handleChange(event) {
		let newSelectedAppointment = {
			...this.props.data,
			[event.target.id]: event.target.value
		}
		this.props.action.trackAppointment(newSelectedAppointment);
	}

	handleSave() {
		let updatedAppointment;
		if (this.props.data.name !== '' || this.props.data.contact !== '') {
			updatedAppointment = {
				...this.props.data,
				available: false
			};
		} else {
			updatedAppointment = {
				...this.props.data,
				available: true
			};
		}

		let newAppointmentDataArray = this.props.updateData.map(appointment => {
			if (appointment.time === this.props.data.time) {
				return updatedAppointment;
			} else {
				return appointment;
			}
		});
		this.props.action.updatedAppointment(newAppointmentDataArray);
		this.closeModal();
	}

	render() {
		// const mapTimeArray = this.state.timeArray.map((time, i) => <li key={i}>{time}</li>);
		const mapTimeArray = this.props.updateData && this.props.updateData.map((data, i) => {
			return (
				<div key={i}
					onClick={() => this.openModal(data)}>{data.time}
						name={data.name}
						contact={data.contact}
						available={data.available}>
				</div>
			);
		})

		return(
			<div>
				<p> Select a Time</p>
				{/*{this.state.timeArray.map((time, i) => <div key={i}><button onClick={() => this.openModal(time)}>{time}</button></div>)}*/}


				{/*this.state.timeArray.map((time, i) => (<div key={i} className="small">

            	<button onClick={() => this.openModal(time)}>{time}</button>
          		</div>))*/}



				{/*<button onClick={this.openModal}>{mapTimeArray}</button>*/}

				{{/*<List component="nav">
					{mapTimeArray}
				</List>/*}
				{/*<Modal />*/}


				{this.props.updateData.map((data, i) => <div key={i}><button onClick={() => this.openModal(data)}>{data.time}</button></div>)}

				<Modal 
					open={this.state.isOpen} 
					close={this.closeModal}
					data={this.props.data}
					handleChange={this.handleChange}
					handleSave={this.handleSave}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	updateData: state.updateData,
	data: state.data
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Time);

