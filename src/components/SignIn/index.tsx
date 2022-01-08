import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import ILogin from "../../types/login";

function SignIn() {
  const { register, handleSubmit } = useForm();
  const { handleSignIn } = useContext(AuthContext);

  async function handleSubmitForm(data: ILogin) {
    await handleSignIn(data);
  }

  return (
    <form method="post" onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="row gtr-uniform">
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
        <div className="col-12">
          <ul className="actions">
            <li>
              <input type="submit" value="Login" />
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
