import React from 'react';
import './date.css';

export default class DateToday extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date().toString()
		};

		setInterval(() => {
	      this.setState ({
	        date: new Date().toString()
	      })
	    }, 1000)
	}

	render() {
		return (
			<div>
				<p className="date">{this.state.date}</p>
				<p className="time-zone">Times are in Eastern Time - US & Canada</p>
			</div>
		);
	}
}