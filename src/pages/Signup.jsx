import React from "react";
import myImage from "../assets/signup.png";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div>
      <div className=" min-h-screen  bg-custColor2 flex items-center justify-center">
        <div className="flex flex-row justify-around  bg-white w-max h-max rounded-lg shadow-lg border border-black p-[90px]">
          <div className="flex flex-col">
            <div className="flex justify-center items-center  mt-20 w-[500px] h-[500px] bg-white">
              <div className="mr-12 mt-8 bg-white h-max w-max ">
                <div className=" flex flex-col items-center bg-white">
                  <h1 className="text-customColor text-3xl font-sans font-semibold">
                    REGISTER
                  </h1>

                  <form className="w-full">
                    <div className="mt-8 mb-5 flex items-center">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full px-2 py-2 border-b-2  border-customColor text-customColor font-semibold text-sm  placeholder-customColor focus:outline-none "
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-2 py-2 border-b-2  border-customColor text-customColor font-semibold text-sm  placeholder-customColor focus:outline-none "
                        placeholder="Password"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-2 py-2 border-b-2  border-customColor text-customColor font-semibold text-sm  placeholder-customColor focus:outline-none "
                        placeholder="Confirm Password"
                        required
                      />
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="w-36 bg-buttonColour mt-5 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      >
                        Register
                      </button>
                    </div>

                    <div className="text-sm mt-5 ml-10 w-max">
                    <span className="text-customColor">
                      Already have an account ?{" "}
                    </span>
                    <a
                      href="/"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Login
                    </a>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-[648px] h-[648px] rounded-lg bg-cover`}
            style={{ backgroundImage: `url(${myImage})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
