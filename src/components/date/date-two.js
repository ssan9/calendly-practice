import React from 'react';

export default class DateToday extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// date: Date.now()
			date: new Date().toString()
		};
		this.newDate = this.newDate.bind(this);
		// this.setTimeout = this.setTimeout.bind(this);

		// this.updateCurrentTime = this.updateCurrentTime.bind(this);
	}

	// updateCurrentTime() {
 //    this.setState(state => ({
 //      ...state,
 //      date: Date.now(),
 //    }));
 //    this.timeoutId = setTimeout(this.updateCurrentTime.bind(this), 1000);
 //  }


	// newDate() {
	//    setTimeout(() => {this.setState(state => ({
	// 	      ...state,
	// 	      date: new Date().toString(),
	// 	    }, 3000) )}
	//    	)
	// }

	componentDidMount() {
        setInterval(
          () => this.newDate(),
          1000
        );
      }

// newDate() {
// 	setTimeout(() => {this.setState({ date: new Date().toString(),})},3000); 
// }

	newDate() {
		this.setState({
			date: new Date().toString()
		});

	}

	// tick() {
 //        this.setState({
 //          time: new Date().toLocaleString()
 //        });
 //      }
	
	render() {
		return (
			<div>
				{/*<p>{this.state.date.toISOString()}</p>*/}
				{/*<p>{this.state.date.toDateString()}</p>*/}
				<p>{this.state.date}</p>
			</div>
		);
	}
}