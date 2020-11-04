import React from 'react';

class AddMovie extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        title: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.add(this.state);
    this.reinitializeState(); 
  }

  reinitializeState() {
    this.setState({
      title: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='title' value={this.state.title} onChange={this.handleChange}></input>
        <button>Add</button>
      </form>
    )
  }
}

export default AddMovie;