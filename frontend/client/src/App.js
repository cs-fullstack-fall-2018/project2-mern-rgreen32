import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import DisplayBlogs from "./DisplayBlogs";
import NewEntry from "./NewEntry"

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={blogs:[]}
    }

    // getEmAll = () =>{
    //     fetch("http://localhost:3005/getAll")
    //         .then(data => data.json())
    //         .then(data => this.setState( {blogs: data}))
    //
    // }
    // componentDidMount(){
    //     this.getEmAll()
    //     console.log("here")
    // }

    render() {
        fetch('/getAll', {
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(data => data.json())
            .then(data => this.setState( {blogs: data}))
    return (
      <div>
          <NewEntry/>
          <DisplayBlogs blogs={this.state.blogs}/>
      </div>
    );
  }
}

export default App;
