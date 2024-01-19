import React, { useEffect } from "react";
import BackLog from "../assets/back_log.avif";
import { Link } from "react-router-dom";
import FadeIn from "../components/animations/Fadein";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../services/UserService";
import { useMutationHooks } from "../hooks/useMutationHook";
import { useNavigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isLoading, isSuccess } = mutation;
  useEffect(() => {
    if (isSuccess) {
      if (location?.state) {
        navigate(location?.state);
      } else {
        navigate("/home");
      }
      /*  localStorage.setItem('access_token', JSON.stringify(data?.access_token))
          localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token)) */
      //if (data?.access_token) {
      //const decoded = jwt_decode(data?.access_token)
      /*  if (decoded?.id) {
              handleGetDetailsUser(decoded?.id, data?.access_token)
            } 
          }*/
    }
  }, [isSuccess]);
  /*  const handleGetDetailsUser = async (id, token) => {
        const storage = localStorage.getItem('refresh_token')
        const refreshToken = JSON.parse(storage)
        const res = await UserService.getDetailsUser(id, token)

      } */
  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnchangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    console.log("logingloin");
    mutation.mutate({
      email,
      password,
    });
  };

  return (
    <FadeIn delay={0.2} direction="left">
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="max-w-[980px] w-full bg-white p-8 rounded-md shadow-md flex">
          <div className="w-1/4">
            <img src={BackLog} alt="" />
          </div>

          <div className="w-3/4 px-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 self-start text-[#69432B]">
              Chocobrat
            </h3>
            <p className="mt-5 ml-16">
              Welcome back,{" "}
              <span className="flex">
                Let's go to{" "}
                <span className="text-[#69432B] font-bold ml-1">
                  {" "}
                  Chocobrat
                </span>
              </span>{" "}
            </p>
            <form action="#" method="post">
              <input
                type="email"
                //id="email"
                //name="email"
                className="mt-5 ml-16 p-2 border border-solid border-#69432B rounded-md text-[#69432B] placeholder-[#69432B] w-full md:w-1/2 focus:outline-none focus:border-orange-950 focus:bg-orange-50"
                placeholder="Email"
                value={email}
                onChange={handleOnChangeEmail}
              />
              <div className="mb-6">
                <input
                  type="password"
                  //id="password"
                  //name="password"
                  className="mt-5 ml-16 p-2 border border-solid border-#69432B rounded-md text-[#69432B] placeholder-[#69432B] w-full md:w-1/2 focus:outline-none focus:bg-orange-50 focus:border-orange-950"
                  placeholder="Password"
                  value={password}
                  onChange={handleOnchangePassword}
                />
              </div>
              <Link to={"/home"}>
                <button
                  type="submit"
                  onClick={handleSignIn}
                  className="bg-[#69432B] text-white py-2 px-4 ml-16 mt-1 rounded-md hover:bg-orange-950 focus:outline-none focus:ring focus:border-blue-300 md:w-1/2"
                >
                  Login
                </button>
              </Link>

              <p className="mt-4 ml-16 flex">
                If you don't have an account,{" "}
                <Link to={"/sign-up"}>
                  <p className="text-[#69432B] font-bold ml-1">register</p>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Login;
