import { useState } from "react";
import Link from "next/link";

import { useStore } from "@mobx";

import "./styles.scss";

export const Login = () => {
  const { userStore, modalStore } = useStore();
  const { setUser } = userStore;
  const { setModalType } = modalStore;
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleSignIn = () => {
    setModalType(null);
    setUser({
      firstName: "Super",
      lastName: "Admin",
      id: 99,
    });
  };

  return (
    <div className={`container ${isActive ? "active" : null}`}>
      <div className="form-container sign-up">
        <form>
          <h1>Create a New Account</h1>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="password" placeholder="Password*" required />
          <button onClick={handleSignIn}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email*" required />
          <input type="password" placeholder="Password*" required />
          <Link href="#">Forget Your Password?</Link>
          <button onClick={handleSignIn}>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={() => setIsActive(false)}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button className="hidden" onClick={() => setIsActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div> */
}
{
  /* <span>or use your email for registeration</span> */
}
