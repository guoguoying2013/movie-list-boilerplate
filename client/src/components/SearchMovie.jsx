import React from 'react'

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange (event) {
    //if didn't allow typing on webpage, it may mean the onChange = {this.handleChange} didn't get setup properly
    this.setState({
      [event.target.name]: event.target.value,
    }
    )
  }

  handleSearch (event) {
    event.preventDefault(); //prevent default html form behavior eg reset, submit form, up at top
    console.log('submitting event: ', event.target.name); //SyntheticEvent, not html event
    console.log('this is search state: ', this.state);
    this.reinitializeState(); //clear up state after submit
    this.props.search(this.state); //{title: "ll"}
  }

  reinitializeState() {
    this.setState({
      title: ''
    })
  }

  render () {
    return (
    <div>
      <form onSubmit = {this.handleSearch}>
        <label>
          <input 
            name = 'title' 
            type = "text" 
            value = {this.state.title} //what is on website represents React state, controlled component feature
            onChange = {this.handleChange}
          ></input>
        </label>
        <button>Go!</button>
      </form>
      <form>
      <button>Refresh</button>
      </form>
    </div>
    ) 
  }
}

export default SearchMovie