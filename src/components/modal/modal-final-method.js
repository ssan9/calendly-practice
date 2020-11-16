import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Modal extends React.Component {
  render() {
    console.log('data', this.props.data);
    console.log('open', this.props.open);
    console.log('close', this.props.handleclose);
    let time = this.props.data.time ? this.props.data.time : '';
    let name = this.props.data.name ? this.props.data.name : '';
    let phone = this.props.data.phone ? this.props.data.phone : '';
    let isEnabled = (name !== '' && phone !== '');

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="fName"
                label=" Full Name"
                type="text"
                fullWidth
                value={this.props.data.name}
                onChange={this.props.handleChange}
              />
              <span className="error">{this.props.errors["name"]}</span>

              <TextField
                margin="dense"
                id="phone"
                name="contact"
                label="Phone Number"
                type="tel"
                fullWidth
                value={this.props.data.phone}
                onChange={this.props.handleChange}
              />
              <span className="error">{this.props.errors["phone"]}</span>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.props.handleSave} color="primary" disabled={!isEnabled}>
                Save
              </Button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }
}