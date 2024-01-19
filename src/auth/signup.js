import React from "react";
import BgSignUp from "../assets/bg_signup.avif";
import { Link, NavLink } from "react-router-dom";
import FadeIn from "../components/animations/Fadein";
import { useState } from "react";
import { Image } from "antd";
import { useMutationHooks } from "../hooks/useMutationHook";
import * as UserService from "../services/UserService";
import * as message from "../components/message/message";
import { useEffect } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnchangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnchangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnchangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const mutation = useMutationHooks((data) => UserService.signupUser(data));

  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword });
  };
  return (
    <FadeIn delay={0.2} direction="right">
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="max-w-[980px] w-full bg-white p-8 rounded-md shadow-md flex">
          <div className="w-3/4 px-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 self-start text-[#69432B]">
              Chocobrat
            </h3>
            <p className="mt-5 ml-16">
              Hello,{" "}
              <p className="flex">
                Let's start with{" "}
                <p className="text-[#69432B] font-bold ml-1"> Chocobrat</p>
              </p>{" "}
            </p>
            <form action="#" method="post">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-5 ml-16 p-2 border border-solid border-#69432B rounded-md text-[#69432B] placeholder-[#69432B] w-full md:w-1/2 focus:outline-none focus:border-orange-950 focus:bg-orange-50"
                placeholder="Email"
                value={email}
                onChange={handleOnchangeEmail}
              />
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-5 ml-16 p-2 border border-solid border-#69432B rounded-md text-[#69432B] placeholder-[#69432B] w-full md:w-1/2 focus:outline-none focus:bg-orange-50 focus:border-orange-950"
                  placeholder="Password"
                  value={password}
                  onChange={handleOnchangePassword}
                />

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-5 ml-16 p-2 border border-solid border-#69432B rounded-md text-[#69432B] placeholder-[#69432B] w-full md:w-1/2 focus:outline-none focus:bg-orange-50 focus:border-orange-950"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleOnchangeConfirmPassword}
                />
              </div>
              <button
                onClick={handleSignUp}
                className="bg-[#69432B] text-white py-2 px-4 ml-16 mt-1 rounded-md hover:bg-orange-950 focus:outline-none focus:ring focus:border-blue-300 md:w-1/2"
              >
                Sign up
              </button>

              <p className="mt-4 ml-16 flex">
                Already have an account,{" "}
                <Link to={"/"}>
                  <p className="text-[#69432B] font-bold ml-1">sign in</p>
                </Link>
              </p>
            </form>
          </div>
          <div className="w-1/4">
            <img src={BgSignUp} alt="" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default SignUp;
