import React, { Component } from 'react';
// import { Link, NavLink } from "react-router-dom";
import { Form, Input, Label, Button } from 'reactstrap';
// import {fetchApi} from '../middlewares/api';

import './signin.css';
import logo from './bootstrap-solid.svg';

class SignIn extends Component {
  
  render() {
    
    return (
        <div >
            <Form className="form-signin">
                <img className="mb-4" src={logo} alt="" width={72} height={72} />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <Label for="inputEmail" className="sr-only">Email address</Label>
                <Input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                <Label for="inputPassword" className="sr-only">Password</Label>
                <Input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <div className="checkbox mb-3">
                    <Label>
                        <Input type="checkbox" defaultValue="remember-me" /> Remember me
                    </Label>
                </div>
                <Button color="primary" className="btn btn-lg btn-block" type="submit">Sign in</Button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </Form>
        
        </div>
    );
  }
}

export default SignIn;