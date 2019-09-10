import React from 'react'
import { Field, reduxForm} from 'redux-form'

class StreamForm extends React.Component{
    
    renderError({error,touched}){
       if(touched && error){
           return (
               <div className="ui error message">
                   <div className="header">{error}</div>
               </div>
           );
       }
    }
    renderInput = (formProps) => {
        const className=`field ${formProps.meta.error && formProps.meta.touched ? "error" : ""}`
        // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
        //another way of doing it is below:
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div>
            
        )
    }

    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues)
        // event.preventDefault() <- this is done my reduxForm for us so we dont need to call it
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name='description' component={this.renderInput } label="Enter Description" />
                <button className="ui button">SUBMIT</button>
            </form>
        );
    }
    
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title){
        errors.title = "You must enter a title"
    }

    if(!formValues.description){
        errors.description = "You must enter a description"
    }

    return errors;
}
    

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

