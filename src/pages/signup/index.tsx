"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";

import { useStore } from "@mobx";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { userStore } = useStore();
  const { setUser } = userStore;

  const onSubmit = () => {
    setUser({
      firstName: "Super",
      lastName: "Admin",
      id: 99,
    });
  };

  return (
    <div className="form-container signup">
      <form>
        <h1>Create a New Account</h1>
        <input
          placeholder="Name*"
          type="text"
          style={{ border: errors.name && "1px solid red" }}
          {...register("name", {
            required: "This field should be filled",
          })}
        />
        <div className="error">{errors.name && errors.name.message}</div>
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
        <Link href="auth/login">Do you have account?</Link>
        <button onClick={onSubmit}>Sign Up</button>
      </form>
    </div>
  );
};
