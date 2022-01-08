import React from "react";
import { useForm } from "react-hook-form";
import signUpRequest from "../../services/requests/signUpRequest";
import IRegister from "../../types/register";

function SignUp() {
  const { register, handleSubmit } = useForm();

  function handleSignIn(data: IRegister) {
    signUpRequest(data);
  }

  return (
    <form method="post" onSubmit={handleSubmit(handleSignIn)}>
      <div className="row gtr-uniform">
        <div className="col-6 col-12-xsmall">
          <input
            {...register("name")}
            type="text"
            name="name"
            id="demo-name"
            placeholder="Name"
            required
          />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            {...register("username")}
            type="text"
            name="username"
            id="demo-username"
            placeholder="Username"
            required
          />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            {...register("email")}
            type="email"
            name="email"
            id="demo-email"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            {...register("password")}
            type="password"
            name="password"
            id="demo-password"
            placeholder="Password"
            required
          />
        </div>
        <div className="col-12 col-12-xsmall">
          <textarea
            {...register("bio")}
            name="bio"
            id="demo-bio"
            placeholder="Biography"
          />
        </div>
        <div className="col-12">
          <input
            {...register("avatar")}
            type="text"
            name="avatar"
            id="demo-avatar"
            placeholder="Avatar"
          />
        </div>
        <div className="col-12">
          <ul className="actions">
            <li>
              <input type="submit" value="Sign Up" />
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
