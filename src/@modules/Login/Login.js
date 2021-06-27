import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import firebase from "firebase";

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "@helpers/validators";
import { useForm } from "@customeHooks";
import LoginBackground from "assets/icons/login-background.png";
import { Input, Icon } from "@components";
import { submitLogin, socialLogin } from "@store/auth/AuthActions";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if (
      localStorage.getItem("userId") &&
      localStorage.getItem("access_token")
    ) {
      history.push("/messenger");
    }
  }, [history]);

  const handleSubmitLogin = () => {
    dispatch(
      submitLogin(
        {
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        },
        history
      )
    );
  };

  const handleGoogleLogin = () => {
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(({ additionalUserInfo }) => {
        const data = {
          email: additionalUserInfo.profile.email,
          socialId: additionalUserInfo.profile.id,
          imageUrl: additionalUserInfo.profile.picture,
          userName: additionalUserInfo.profile.name,
        };
        if (data.email) {
          dispatch(socialLogin(data, history));
        } else {
          toast.error("Login with Google Failed!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex h-screen">
      <div className="flex w-2/5 bg-gray-100 flex-col justify-center pl-16">
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
            helperText="Email is invalid!"
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
        <div className="w-4/5">
          <button
            type="button"
            disabled={!formState.isValid}
            onClick={handleSubmitLogin}
            className={`my-8 w-1/5 rounded-md px-4 py-2 ${
              !formState.isValid ? "bg-gray-500" : "bg-green-500"
            } font-sans font-medium text-white`}
          >
            Login
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className={`flex shadow-2xl justify-center items-center my-8 w-2/3 rounded-bl-full rounded-tr-full px-4 py-2  font-sans font-medium text-black border-2 border-green-500 border-solid transition duration-500 ease-in-out hover:bg-green-500 hover:border-0 hover:text-white `}
          >
            <Icon type="google" size="20px" marg="0 1rem 0 0" />
            Login With Google
          </button>
        </div>
        <div className="flex ">
          <p className="text-1xl font-medium font-sans">
            Don't have an account ?{" "}
            <span
              onClick={() => history.push("/register")}
              className="text-1xl font-medium text-green-500 font-sans"
              style={{ cursor: "pointer", alignSelf: "flex-end" }}
            >
              Register here
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

export default Login;
