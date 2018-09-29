import React, {Component} from 'react'

class NewEntry extends Component {
    constructor(props) {
        super(props);
        this.state ={entry:{
                UserName: "",
                Title: "",
                JournalEntry: "",
            }}

    }
    updateUserName = (event) =>{
        this.setState({UserName: event.target.value })
    };

    updateTitle = (event) =>{
        this.setState({Title: event.target.value })
    };

    updateJournalEntry = (event) =>{
        this.setState({JournalEntry: event.target.value })
    };

    submisson = (event) =>{
        this.setState({Date: new Date()})

        fetch('/send', {method: 'POST', body: JSON.stringify({
                UserName : this.state.UserName,
                Title: this.state.Title,
                JournalEntry: this.state.JournalEntry
            }),headers: {
                'Content-Type': 'application/json',
            }
        })
        this.setState({UserName: "",Title:"", JournalEntry:""})
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.submisson}>
                <label htmlFor="UserName">UserName</label>
                <input type="text" name="UserName" onChange={this.updateUserName}/><br/>
                <label htmlFor="Title">Title</label>
                <input type="text" name="Title" onChange={this.updateTitle}/><br/>
                <label htmlFor="JournalEntry">JournalEntry</label>
                <input type="text" name="JournalEntry" onChange={this.updateJournalEntry}/><br/>
                <button>Post</button>
            </form>
        )
    }


}
export default NewEntry;