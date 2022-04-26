import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useRouter } from "next/router";
import { useRegisterUserMutation } from "@/store/fetcherApi";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "@/components/Formik";

function Signup() {
  const router = useRouter();
  const [registerUser] = useRegisterUserMutation();
  const [showPassword, setShowPassword] = useState("password");

  const validation = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be a min of 1 chars")
      .max(20, "Name must be a max of 20 chars"),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email")
      .min(4)
      .max(40, "Email must be a max of 40 chars"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be a min of 6 chars")
      .max(20, "Password must be a ,max of 20 chars"),
    secPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords did not match")
      .required("Please confirm your password"),
  });

  const showPasswordHandler = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  //------------Submitting Form---------------
  const submitForm = async (values) => {
    await registerUser(values);

    router.push("/profile");
  };

  const thedate = new Date();
  const year = thedate.getFullYear();

  return (
    <div className="authbackground">
      <div className="flex flex-col mt-3 mx-auto w-4/5  items-center justify-center">
        <div className="flex-shrink-0 cursor-default p-2 flex items-center">
          <AiOutlineCar className="text-8xl mx-auto text-blue-400" />
          <h1 className="text-white text-6xl mx-auto font-logo-font">Big-C</h1>
        </div>
        <div className=" shadow rounded xl:w-1/3 bg-gray-100  md:w-1/2 w-full p-10 mt-16">
          <p aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
            Create an account
          </p>
          <Formik
            initialValues={{ name: "", email: "", password: "", secPassword: "" }}
            validationSchema={validation}
            onSubmit={submitForm}
          >
            {() => (
              <Form>
                <div className="mt-5">
                  {/*_________Name_______*/}
                  <MyInput label="Name" placeholder="Enter your name" type="text" className="authform" name="name" />
                </div>
                <div className="mt-2">
                  {/*_________Email_______*/}
                  <MyInput
                    placeholder="Enter email adress"
                    type="email"
                    className="authform"
                    label="Email"
                    name="email"
                  />
                </div>
                {/*_________Password_______*/}
                <div className="mt-2 relative w-full">
                  <button
                    type="button"
                    onClick={showPasswordHandler}
                    className="showpasswordicon border-none absolute right-5 bottom-3 cursor-pointer"
                  >
                    {showPassword === "password" && <BsEye />}
                    {showPassword === "text" && <BsEyeSlash />}
                  </button>
                  <MyInput
                    placeholder="Enter your password"
                    type={showPassword}
                    className="authform"
                    name="password"
                    label="Password"
                  />
                </div>
                {/*_________secPassword_______*/}
                <div className="mt-2 relative w-full">
                  <div className="absolute right-5 bottom-3">
                    <button
                      type="button"
                      onClick={showPasswordHandler}
                      className="showpasswordicon border-none cursor-pointer"
                    >
                      {showPassword === "password" && <BsEye />}
                      {showPassword === "text" && <BsEyeSlash />}
                    </button>
                  </div>
                  <MyInput
                    placeholder="Confirm your password"
                    type={showPassword}
                    className="authform"
                    name="secPassword"
                    label="Confirm Password"
                  />
                </div>
                <div className="mt-8">
                  <button type="submit" className="authformbutton">
                    Create account
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Already have an account?{" "}
            <span role="link" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
              <Link href="/login">Login here</Link>
            </span>
          </p>
        </div>
      </div>
      <footer className="py-16 flex flex-col justify-center items-center">
        <p className="mt-2 text-xs xl:text-sm leading-none text-gray-50">
          <span>{year}</span> Big-C. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Signup;
