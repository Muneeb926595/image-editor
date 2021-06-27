import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import React from "react";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_NO_SPACE,
  VALIDATOR_CONFIRM_PASSWORD,
} from "@helpers/validators";
import { useForm } from "@customeHooks";
import LoginBackground from "assets/icons/login-background.png";
import { Input } from "@components";
import { submitRegister } from "@store/auth/AuthActions";

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formState, inputHandler] = useForm(
    {
      userName: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const handleSubmitRegister = () => {
    dispatch(
      submitRegister(
        {
          userName: formState.inputs.userName.value,
          email: formState.inputs.email.value,
          password: formState.inputs.confirmPassword.value,
        },
        history
      )
    );
  };
  return (
    <div className="flex h-screen">
      <div className="flex w-2/5 bg-gray-100 flex-col justify-center pl-16">
        <div className="my-4 w-2/3">
          <p className="mb-1 text-l font-sans">UserName</p>
          <Input
            inputName="UserName"
            id="userName"
            type="outlined-basic"
            label="User Name*"
            placeholder="MichealBrown"
            width="large"
            onInput={inputHandler}
            validators={[
              VALIDATOR_REQUIRE(),
              VALIDATOR_NO_SPACE(),
              VALIDATOR_MINLENGTH(3),
            ]}
            required={true}
          />
        </div>
        <div className="my-4 w-2/3">
          <p className="mb-1 text-l font-sans">Email</p>
          <Input
            width="large"
            id="email"
            type="outlined-email-input"
            label="Email*"
            placeholder="user@gmail.com"
            variant="outlined"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
            helperText={"Email is invalid!"}
          />
        </div>
        <div className="my-4 w-2/3">
          <p className="mb-1 text-l font-sans">Password</p>
          <Input
            width="large"
            id="password"
            isPassword={true}
            label="Password*"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6)]}
            helperText={"Minimum length 6 required!"}
          />
        </div>
        <div className="my-4 w-2/3">
          <p className="mb-1 text-l font-sans">Confirm Password</p>
          <Input
            width="large"
            id="confirmPassword"
            isPassword={true}
            label="Confirm Password*"
            onInput={inputHandler}
            validators={[
              VALIDATOR_CONFIRM_PASSWORD(formState.inputs.password.value),
            ]}
            helperText={"Confirm password doesn't match!"}
          />
        </div>
        <div className="w-4/5">
          <button
            type="button"
            disabled={!formState.isValid}
            onClick={handleSubmitRegister}
            className={`my-8 w-1/5 rounded-md px-4 py-2 ${
              !formState.isValid ? "bg-gray-500" : "bg-green-500"
            } font-sans font-medium text-white`}
          >
            Signup
          </button>
        </div>
        <div className="flex ">
          <p className="text-1xl font-medium font-sans">
            Already have an account ?{" "}
            <span
              onClick={() => history.push("/")}
              className="text-1xl font-medium text-green-500 font-sans"
              style={{ cursor: "pointer", alignSelf: "flex-end" }}
            >
              Signin
            </span>
          </p>
        </div>
      </div>
      <div className=" flex w-3/5">
        <div className="flex flex-col justify-center w-2/4 px-8">
          <p className="text-5xl font-thin font-sans">Introducing</p>
          <p className="my-2 text-7xl font-bold text-green-500 font-sans">
            Whatsapp
          </p>
          <p className="text-5xl font-semibold font-sans">Bussiness API</p>
          <p className="my-8 text-2xl font-thin font-sans">
            Reach out to your account manager and get your whatsapp account now.
          </p>
          <p className="text-1xl font-medium text-green-500 font-sans">
            muneebkhann0@gmail.com
          </p>
        </div>
        <div className="w-2/4 h-screen">
          <img
            className="w-full 2xl:h-screen"
            src={LoginBackground}
            alt="background"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
