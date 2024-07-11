import React from "react";
import myImage from "../assets/image.png";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <div className=" min-h-screen  bg-customColor flex items-center justify-center">
        <div className="flex flex-row justify-around  bg-white w-max h-max rounded-lg shadow-lg border border-black p-[90px]" >
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-[650px] h-[550px] bg-cover  `}
              style={{ backgroundImage: `url(${myImage})` }}
            ></div>
          </div>
          <div className="flex justify-center items-center  mt-20 w-[500px] h-[500px] bg-white">
            <div className=" flex justify-center items-center bg-white h-[400px] w-[300px] ">
              <div className=" flex flex-col items-center bg-white">
                <h1 className="text-customColor text-3xl font-sans font-semibold">
                  LOGIN
                </h1>

                <form className="w-full">
                  <div className="mt-8 mb-7  flex items-center">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="w-full px-2 py-2 border-b-2  border-customColor text-customColor font-semibold text-sm  placeholder-customColor focus:outline-none "
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-2 py-2 border-b-2  border-customColor text-customColor font-semibold text-sm  placeholder-customColor focus:outline-none "
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:text-blue-700"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-36 bg-buttonColour mt-5 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Login
                    </button>
                  </div>

                  <div className="text-sm mt-5 ml-10">
                    <span className="text-customColor">
                      Create an account?{" "}
                    </span>
                    <a
                      href="/signup"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Register
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
