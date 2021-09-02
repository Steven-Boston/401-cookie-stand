import React from 'react';

class AddStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      description: '',
      minCust: 0,
      maxCust: 0,
      avgCookies: 0,
      owner: ''
    }
  }

  handleLocationChange = (e) => {
    e.preventDefault();
    this.setState({location: e.target.value});
    console.log(e.target.Value);
  }
  handleDescriptionChange = (e) => {
    e.preventDefault();
    this.setState({description: e.target.value});
    console.log(e.target.Value);
  }
  handleMinChange = (e) => {
    e.preventDefault();
    this.setState({minCust: e.target.value});
    console.log(e.target.Value);
  }
  handleMaxChange = (e) => {
    e.preventDefault();
    this.setState({maxCust: e.target.value});
    console.log(e.target.Value);
  }
  handleAvgChange = (e) => {
    e.preventDefault();
    this.setState({avgCookies: e.target.value});
    console.log(e.target.Value);
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Location:
            <input type="text" onChange={this.handleLocationChange}/>
          </label>
          <label>
            Description:
            <input type="text" onChange={this.handleDescriptionChange}/>
          </label>
          <label>
            Minimum Hourly Customers: 
            <input onChange={this.handleMinChange}/>
          </label>
          <label>
            Maximum Hourly Customers:
            <input onChange={this.handleMaxChange}/>
          </label>
          <label>
            Average Cookies Per Sale:
            <input onChange={this.handleAvgChange}/>
          </label>
          <button type="submit" value="Create">Create</button>
        </form>
      </>
    )
  }
}

export default AddStore