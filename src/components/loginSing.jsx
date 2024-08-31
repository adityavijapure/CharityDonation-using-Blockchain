import React, { useEffect } from 'react';
import '../styles/loginsign.css';

const LoginSign = () => {

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    registerLink.onclick = () => {
      wrapper.classList.add('active');
    }

    loginLink.onclick = () => {
      wrapper.classList.remove('active');
    }
  }, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle login form submission here
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up form submission here
  };

  return (
    <div className="wrapper">
      <span className="rotate-bg" />
      <span className="rotate-bg2" />

      {/* Login Form */}
      <div className="form-box login">
        <h2
          className="title animation"
          style={{ '--i': '0', '--j': '21' }}
        >
          Login
        </h2>
        <form onSubmit={handleLoginSubmit}>
          <div
            className="input-box animation"
            style={{ '--i': '1', '--j': '22' }}
          >
            <input required type="text" />
            <label htmlFor="">Username</label>
            <i className="bx bxs-user" />
          </div>
          <div
            className="input-box animation"
            style={{ '--i': '2', '--j': '23' }}
          >
            <input required type="password" />
            <label htmlFor="">Password</label>
            <i className="bx bxs-lock-alt" />
          </div>
          <button
            className="btn animation"
            style={{ '--i': '3', '--j': '24' }}
            type="submit"
          >
            Login
          </button>
          <div
            className="linkTxt animation"
            style={{ '--i': '5', '--j': '25' }}
          >
            <p>
              Don't have an account?{' '}
              <a className="register-link" href="#">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Info Text for Login */}
      <div className="info-text login">
        <h2 className="animation" style={{ '--i': '0', '--j': '20' }}>
          Welcome Back!
        </h2>
        <p className="animation" style={{ '--i': '1', '--j': '21' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem?
        </p>
      </div>

      {/* Sign-Up Form */}
      <div className="form-box register">
        <h2 className="title animation" style={{ '--i': '17', '--j': '0' }}>
          Sign Up
        </h2>
        <form onSubmit={handleSignUpSubmit}>
          <div className="input-box animation" style={{ '--i': '18', '--j': '1' }}>
            <input required type="text" />
            <label htmlFor="">Username</label>
            <i className="bx bxs-user" />
          </div>
          <div className="input-box animation" style={{ '--i': '19', '--j': '2' }}>
            <input required type="email" />
            <label htmlFor="">Email</label>
            <i className="bx bxs-envelope" />
          </div>
          <div className="input-box animation" style={{ '--i': '20', '--j': '3' }}>
            <input required type="password" />
            <label htmlFor="">Password</label>
            <i className="bx bxs-lock-alt" />
          </div>
          <button
            className="btn animation"
            style={{ '--i': '21', '--j': '4' }}
            type="submit"
          >
            Sign Up
          </button>
          <div className="linkTxt animation" style={{ '--i': '22', '--j': '5' }}>
            <p>
              Already have an account?{' '}
              <a className="login-link" href="#">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Info Text for Sign-Up */}
      <div className="info-text register">
        <h2 className="animation" style={{ '--i': '17', '--j': '0' }}>
          Welcome Back!
        </h2>
        <p className="animation" style={{ '--i': '18', '--j': '1' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem?
        </p>
      </div>
    </div>
  );
};

export default LoginSign;
