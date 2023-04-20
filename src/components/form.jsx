import React from "react";
import './style.css';
class Form extends React.Component {

    state ={
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscriprion: false,
    }

    handelChange = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
    }
    render() {
        const { firstName, email, message, select, subscription } = this.state

        return <div>
            <input  
                type = "text"
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={this.handelChange}
            
            />

            <input 
                type = "email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handelChange}
            
            />

            <label>
                <input 
                type='checkbox'
                name='subscription'
                checked={subscription}
                onChange={this.handelCheckboxChange}
                />
                Согласен с условием 
            </label>
                
        </div>
    }
}

export {Form}