import React from 'react';

export default class DateToday extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date().toString()
		};
		this.newDate = this.newDate.bind(this);
	}

	componentDidMount() {
        setInterval(
          () => this.newDate(),
          1000
        );
      }

	newDate() {
		this.setState({
			date: new Date().toString()
		});

	}
	
	render() {
		return (
			<div>
				<p>{this.state.date}</p>
			</div>
		);
	}
}