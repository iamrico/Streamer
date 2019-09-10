import React from 'react'
import {connect} from 'react-redux'
import {createStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component{

    onSubmit = (formValues) =>{
        this.props.createStream(formValues)
        // event.preventDefault() <- this is done my reduxForm for us so we dont need to call it
    }

    render(){
        return(
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
    
}

export default connect(null,{
    createStream
})(StreamCreate)