import React, { useState } from 'react';


class AddStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: 'Steven Boston'
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({...this.State,[e.target.name]: e.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.newStore(this.state);
    e.target.reset();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Location:
            <input type="text" name="location" onChange={this.handleChange}/>
          </label>
          <label>
            Description:
            <input type="text" name="description" onChange={this.handleChange}/>
          </label>
          <label>
            Minimum Hourly Customers: 
            <input name="minimumCustomers" onChange={this.handleChange}/>
          </label>
          <label>
            Maximum Hourly Customers:
            <input name="maximumCustomers" onChange={this.handleChange}/>
          </label>
          <label>
            Average Cookies Per Sale:
            <input name="averageCookiePerSale" onChange={this.handleChange}/>
          </label>
          <button type="submit" value="Create">Create</button>
        </form>
      </>
    )
  }
}

export default AddStore