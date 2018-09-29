import React, {Component} from 'react'
import 'tachyons'

class DisplayBlogs extends Component {
    render(){

        var blogs = this.props.blogs.map(
            Item =>{
                let time = new Date(Item.Date);
                return(
                    <div className="bg-light-green dib br3 pa3 ma2 grow">
                        {Item.UserName}<br/>
                        {Item.Title}<br/>
                        {Item.JournalEntry}<br/>
                        {time.toDateString()}<br/>
                    </div>

                )
            }


        )
        return (<div>
                    <h2>{blogs}</h2>
                </div>
        )

    }

}
export default DisplayBlogs


