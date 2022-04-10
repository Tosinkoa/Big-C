import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useRouter } from "next/router";
import { useLoginUserMutation } from "@/store/ReduxStore/fetcherApi";
import MyInput from "@/components/Formik";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function Login() {
  const [showPassword, setShowPassword] = useState("password");
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();

  const validation = Yup.object({
    email: Yup.string().required("Email is required").email("Please enter a valid email"),
    password: Yup.string().required("Password is required"),
  });

  const showPasswordHandler = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const theyear = new Date();
  const year = theyear.getFullYear();

  return (
    <div className="authbackground">
      <div className="flex flex-col mt-3 mx-auto w-4/5  items-center justify-center">
        <div className="flex-shrink-0 cursor-default flex items-center">
          <AiOutlineCar className="text-8xl  text-blue-400" />
          <h1 className="text-white text-6xl font-logo-font">Big-C</h1>
        </div>
        <div className="bg-gray-100 shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              loginUser(values);
              router.push("/profile");
            }}
            validationSchema={validation}
          >
            {() => (
              <Form>
                <div className="mt-5">
                  <MyInput
                    placeholder="Enter your email adress"
                    type="email"
                    className="authform"
                    name="email"
                    label="Email"
                  />
                </div>
                <div className="mt-2 relative w-full">
                  <div className="absolute right-4 bottom-8">
                    <button
                      type="button"
                      onClick={showPasswordHandler}
                      className="border-none  flex  bottom-3 cursor-pointer"
                    >
                      {showPassword === "password" && <BsEye />}
                      {showPassword === "text" && <BsEyeSlash />}
                    </button>
                  </div>
                  <MyInput
                    placeholder="Enter your password"
                    type={showPassword}
                    className="authform"
                    name="password"
                    label="Password"
                  />
                </div>
                <div className="mt-8">
                  <button type="submit" className="authformbutton">
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <span role="link" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
              <Link href="/signup">Sign up here</Link>
            </span>
          </p>
        </div>
      </div>
      <footer className="py-16 flex flex-col justify-center items-center">
        <p className="mt-2 text-xs lg:text-sm leading-none text-gray-50">
          <span>{year}</span> Big-C. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Login;
