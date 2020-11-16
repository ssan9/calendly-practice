// export const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
// export const toggleDialog = () => ({
// 	type: TOGGLE_DIALOG
// });

export const SELECT_APPOINTMENT = 'SELECT_APPOINTMENT';
export const selectAppointment = data => {
	console.log('selectAppointment', data);
	return ({
		type: SELECT_APPOINTMENT,
		data
	});
};

export const TRACK_APPOINTMENT = 'TRACK_APPOINTMENT';
export const trackAppointment = data => {
	console.log('trackAppointment', data);
	return ({
		type: TRACK_APPOINTMENT,
		data
	});
};

export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const updateAppointment = updateData => {
	console.log('action-updateData', updateData);
	return ({
		type: UPDATE_APPOINTMENT,
		updateData
	});
}

// export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
// export const deleteAppointment = deleteData => {
// 	console.log('deleteAppointment', deleteData);
// 	return ({
// 		type: DELETE_APPOINTMENT,
// 		deleteData,
// 		time: deleteData.time,
// 		name: deleteData.name,
// 		contact: deleteData.contact,
// 		available: deleteData.available
// 	});
// };


// export const SELECT_APPOINTMENT = 'SELECT_APPOINTMENT';
// export const selectAppointment = data => ({
//   type: SELECT_APPOINTMENT,
//   data
// });

// export const TRACK_APPOINTMENT = 'TRACK_APPOINTMENT';
// export const trackAppointment = (data) => ({
//   type: TRACK_APPOINTMENT,
//   data
// });

// export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
// export const updateAppointment = (appointmentData) => ({
//   type: UPDATE_APPOINTMENT,
//   appointmentData
// });


