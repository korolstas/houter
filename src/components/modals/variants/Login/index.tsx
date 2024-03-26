import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

import { useStore } from "@mobx";

import "./styles.scss";

type FormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { userStore, modalStore } = useStore();
  const { setUser } = userStore;
  const { setModalType } = modalStore;
  const [isActive, setIsActive] = useState<boolean>(false);

  const onSubmit = () => {
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
          <button onClick={onSubmit}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign In</h1>
          <input
            placeholder="Email*"
            style={{ border: errors.email && "1px solid red" }}
            {...register("email", {
              required: "This field should be filled",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email format",
              },
            })}
          />
          <div className="error">{errors.email && errors.email.message}</div>
          <input
            placeholder="Password*"
            type="password"
            style={{ border: errors.password && "1px solid red" }}
            {...register("password", {
              required: "This field should be filled",
              minLength: 5,
            })}
          />
          <div className="error">
            {errors.password && errors.password.message}
          </div>

          <Link href="#">Forget Your Password?</Link>
          <button type="submit">Sign In</button>
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
