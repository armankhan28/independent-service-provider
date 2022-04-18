import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import icon from '../../../images/undraw_male_avatar_323b.svg'
import ui from '../../../images/undraw_login_re_4vu2.svg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending ] = useSendPasswordResetEmail(auth);

    if(user){
      navigate(from, { replace: true });
    }
    if (error) {
      errorElement =  <p className="text-danger">Error: {error?.message}</p>   
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event =>{
        navigate('/register');
    }
    const resetPassword = async() =>{
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }

  return (
    <div className='container text-center mt-5 p-3'>
      <h2 className='text-primary text-center'>Please Login</h2>
     <Row>
       <Col lg={4} md={6} sm={12} >
         <img className='icon' src={icon} alt="" />
       <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary w-100 mx-auto d-block mb-2" type="login">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to Car Services? <span className='register text-danger' onClick={navigateRegister}>Please Register</span></p>
      <p>Forget Password? <span className='register text-danger' onClick={resetPassword}>Reset Password</span></p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
       </Col>
       <Col lg={8} md={6} sm={12} >
         <img className='' src={ui} alt="" />
       </Col>
     </Row>
      
    </div>
  );
};

export default Login;
