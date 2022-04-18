import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error || error1 || error2) {
    errorElement = <p className="text-danger">Error: {error?.message} {error1?.message} {error2?.message}</p>
  }

  if (user || user1 || user2) {
    navigate('/home');
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: '1px' }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">OR</p>
        <div style={{ height: '1px' }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary w-100 d-block mx-auto my-2"
        >
          <img src={google} alt="" />
          <span className="mx-2">Google Sign In</span>
        </button>
        <button onClick={() => signInWithGithub()} className="btn btn-outline-primary w-100 d-block mx-auto my-2">
          <img src={github} alt="" />
          <span className="mx-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
