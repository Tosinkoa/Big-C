// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useGetAuthQuery } from "@/store/ReduxStore/fetcherApi";

export default (ChildComponent) => {
  const composeComponent = (props) => {
    // const router = useRouter();

    // const getLoggedIn = async () => {
    //   const loggedInRes = await axios.get("http://localhost:5000/auth");
    //   console.log(loggedInRes);
    //   if (loggedInRes?.data === false) {
    //     router.push("/login");
    //   }
    // };

    // useEffect(() => {
    //   getLoggedIn();
    // }, []);

    // const { authData } = useGetAuthQuery();

    // console.log(authData);

    // useEffect(() => {
    //   if (authData === false) {
    //     router.push("/login");
    //   }
    // }, []);

    return (
      <div>
        <ChildComponent {...props} />
      </div>
    );
  };
  return composeComponent;
};
