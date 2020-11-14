import React from 'react'

class FormHandler extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password:'',
            select:'Male'
        }
    }
    EmailChangehandler=(event)=>{
        this.setState({ email: event.target.value, })
    }
    PasswordChangehandler= (event)=>{
        this.setState({password:event.target.value})
    }
    Selectionhandler=(event)=>{
        this.setState({select:event.target.value})
        console.log(event.target.value)
    }
    SubmitHandler=(event)=>{
        event.preventDefault()
        alert(` 
                email: ${this.state.email} 
                Passwprd: ${this.state.password}
                gender: ${this.state.select}`)

    }

    render(){
        return(
            <div>
        <h2>from handler</h2>
                <form onSubmit={this.SubmitHandler}>
                    <span>Email: </span>
                    <input type='email' value= {this.state.email} onChange={this.EmailChangehandler} />
                    <span>Password:</span>
                    <input type='password' value= {this.state.password} onChange={this.PasswordChangehandler} />
                    <span>Gender:</span>
                    <select value={this.state.select} onChange={this.Selectionhandler} >
                        <option value= 'Male'> Male </option>
                        <option value= 'Female'> Female </option>
                        <option value= 'Others'> Others </option>
                    </select>
                    <button type= 'submit' onSubmit={this.SubmitHandler}> Submit </button>
                </form>

                <h2>email: { this.state.email}</h2>
                <h2>Password: { this.state.password}</h2>
                <h2>Gender: { this.state.select}</h2>
            </div>
        )
    }
    
}
export default FormHandler 