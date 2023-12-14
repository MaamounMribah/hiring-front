import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import UserService from '../Services/UserService';
import { withRouter } from 'react-router-dom';




class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', // Correct state property name
            firstname: '', // Correct state property name
            lastname: '',
            email: ''
        };
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.cancel = this.cancel.bind(this);


    }
    

    changeFirstNameHandler = (event) => {
        this.setState({ firstname: event.target.value }); // Correct state property name
    };

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value }); // Correct state property name
    };
    changeLastNameHandler = (event) => {
        this.setState({ lastname: event.target.value });

    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    saveUser= (e) => {
        e.preventDefault();
        let user ={username:this.state.username,firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email};
        console.log('user =>' + JSON.stringify(user));
        UserService.createUser(user).then(res=>{
            this.props.history.push("/users");
            //let navigate = useNavigate();
            //navigate("/users");
        })
        .catch(error => {
            console.error("Erreur Axios :", error);
            
        });
    }


     cancel ()  {
        
     // this.props.history.push('/users');
     this.props.history.push('/users');
    
    };
    

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Add User</h3>
                        <div className='card-body addUserForm'>
                            <form>
                                <div className='form-group'>
                                    <label> UserName:</label>
                                    <Form.Control
                                        placeholder='UserName'
                                        name='UserName'
                                        className='form-control'
                                        value={this.state.username} // Correct state property name
                                        onChange={this.changeUserNameHandler}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label> FirstName:</label>
                                    <Form.Control
                                        placeholder='FirstName'
                                        name='firstName'
                                        className='form-control'
                                        value={this.state.firstname} // Correct state property name
                                        onChange={this.changeFirstNameHandler}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label> Lastname:</label>
                                    <Form.Control
                                        placeholder='LastName'
                                        name='LastName'
                                        className='form-control'
                                        value={this.state.lastname} // Correct state property name
                                        onChange={this.changeLastNameHandler}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label> Email:</label>
                                    <Form.Control
                                        placeholder='Email'
                                        name='Email'
                                        className='form-control'
                                        value={this.state.email} // Correct state property name
                                        onChange={this.changeEmailHandler}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}

export default CreateUserComponent;
