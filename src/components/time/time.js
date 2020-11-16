import React from 'react';
import Modal from '../modal/modal-shorter-method';

export default class Time extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeArray: [
				'9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'
			],
			isOpen: false
		};	
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal(time) {
		this.setState({
			isOpen: true
		});
	}

	closeModal() {
		this.setState({
			isOpen:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    false
		});
	}

	render() {
		// const mapTimeArray = this.state.timeArray.map((time, i) => <li key={i}>{time}</li>);

		return(
			<div>
				<p> Select a Time</p>
				{this.state.timeArray.map((time, i) => <div key={i}><button onClick={() => this.openModal(time)}>{time}</button></div>)}
				<Modal open={this.state.isOpen} close={this.closeModal}/>
			</div>
		)
	}
}
