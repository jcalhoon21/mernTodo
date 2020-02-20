import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const styles = (theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

class TodoForm extends Component {

  constructor(props){
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeResponsible = this.onChangeResponsible.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    }
  }

  onChangeDescription(e) {
    this.setState({
      todo_description: e.target.value
    })
  }

  onChangeResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    })
  }

  onChangePriority(e) {
    this.setState({
      todo_priority: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    this.setState = ({
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    })
  }
  
  render() {
    return (
      
      <form noValidate autoComplete="off" style={{width: 200, margin: 20}} onSubmit={this.onSubmit}>
        <div>
          <TextField 
            style={{width: 200, margin: 20}} 
            required id="standard-required" 
            label="Description"
            value={this.state.todo_description}
            onChange={this.onChangeDescription}
          />
          <TextField 
            style={{width: 200, margin: 20}} 
            required id="standard-required" 
            label="Responsible"
            value={this.state.todo_responsible}
            onChange={this.onChangeResponsible}
          />
          
          <FormControl component="fieldset">
            <RadioGroup aria-label="priority" name="priority1" onChange={this.onChangePriority}>
              <FormControlLabel 
                name="priorityOptions" 
                id="priorityLow" 
                type="radio"
                value="low" 
                checked={this.state.todo_priority==='Low'} 
                onChange={this.onChangePriority} 
                control={<Radio />} 
                label="Low" 
              />
              <FormControlLabel 
                name="priorityOptions" 
                id="priorityMedium" 
                type="radio"
                value="medium" 
                checked={this.state.todo_priority==='Medium'} 
                onChange={this.onChangePriority} 
                control={<Radio />} 
                label="Medium" 
              />
              <FormControlLabel 
                name="priorityOptions" 
                id="priorityHigh" 
                type="radio"
                value="high" 
                checked={this.state.todo_priority==='High'} 
                onChange={this.onChangePriority} 
                control={<Radio />} 
                label="High" 
              />
            </RadioGroup>
          </FormControl>
          
          
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="4"
            defaultValue="Default Value"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Todo" className="btn btn-primary" />
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(TodoForm);
