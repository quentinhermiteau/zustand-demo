import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
        // some code here...
    }
    
    return (
        <div className="min-vh-100 row align-items-center">
            <div className="col-4 offset-4 p-4 card shadow">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} onChange={event => setUsername(event.currentTarget.value)} />
                    </Form.Group>
    
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={event => setPassword(event.currentTarget.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;