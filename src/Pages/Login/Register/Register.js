import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Col, Row } from 'react-bootstrap';
import regi from '../../../images/undraw_mobile_payments_re_7udl.svg'
const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login');
  };
  if (user) {
   console.log('user', user)
  }
  const handleRegister = async event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/home')
  };
  return (
    <div className="register-form container text-center mt-5 p-3 ">
      <h2 className="text-center text-primary p-3">Please Register</h2>
      <Row>
        <Col lg={4} md={6} sm={12}>
        <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={agree ? 'text-primary' : 'text-danger'}
          htmlFor="terms"
        >
          Accept Terms And Conditions
        </label>
        <input
          disabled={!agree}
          className="btn btn-primary w-100 mx-auto mt-2"
          type="submit"
          value="Register"
        />
      </form>

      <p>
        Already have an account?{' '}
        <span className="login text-danger" onClick={navigateLogin}>
          Please login
        </span>
      </p>
      <SocialLogin></SocialLogin>
        </Col>
        <Col lg={8} md={6} sm={12}>
        <img className='w-100' src={regi} alt="" />
        </Col>
      </Row>
     
    </div>
  );
};

export default Register;
