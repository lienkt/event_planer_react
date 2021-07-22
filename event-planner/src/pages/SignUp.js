import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'




class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            fullName:'',
            username:'',
            //skills:[],
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        //this.changeSkills = this.changeSkills.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
/*
    changeSkills(event){
        this.setState({
            skills:event.target.value
        })
    }
*/
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username:this.state.username,
            //skills:this.state.skills,
            password:this.state.password
        }

        axios.post('http://localhost:3002/users/', registered)
            .then(response => console.log(response.data))
            .then(window.location='./pages/LoginPage/Login')

        /*
        //window.location = '/'
        this.setState({
            fullName:'',
            username:'',
            //skills:'',
            password:''
        })
        */
    }


    render(){
        return (
            <div>
                <div className='container'>
                    <div>Register Page</div>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'
                            />

                            

                            <input type='password'
                            placeholder='password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



export default SignUp;



