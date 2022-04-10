import { useState, useEffect } from "react";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { Formik, Form } from "formik";
import { usePostProfileMutation, useUpdateUserNameMutation } from "@/store/ReduxStore/fetcherApi";
import MyInput, { MySelect, MyTextArea } from "./Formik";

const ProfileForm = ({ theProfile }) => {
  const [postProfile] = usePostProfileMutation();
  const [updateUserName] = useUpdateUserNameMutation();
  const [phoneNumber, setPhoneNumber] = useState(theProfile?.phoneNumber);

  // const [image, setImage] = useState("");
  // const [imageURL, setImageURL] = useState("");

  const router = useRouter();

  // useEffect(() => {
  //   if (image) {
  //     setImageURL(URL.createObjectURL(image));
  //   }
  // }, [image]);

  const phoneNumberChange = (value, country, e, formattedValue) => {
    setPhoneNumber(e.target.value);
  };

  const businessOptions = [
    { value: "default", name: "*Select Business Status*" },
    { value: "buyer", name: "Buyer" },
    { value: "seller", name: "Seller" },
  ];

  const availabilityOptions = [
    { value: "yes", name: "Yes" },
    { value: "no", name: "No" },
  ];

  // const profileImageBackgroundUpload = async (e) => {
  //   const files = e.target.files;
  //   setImage(files[0]);
  // const data = new FormData();
  // data.append("file", files[0]);
  // data.append("upload_preset", "car-project");
  // const res = await fetch(
  //   "https://api.cloudinary.com/v1_1/dcasx7rnk/image/upload",
  //   {
  //     method: "POST",
  //     body: data,
  //   }
  // );
  // const File = await res.json();
  // setImage(File.secure_url);
  // };

  return (
    <div>
      <Formik
        initialValues={{
          name: theProfile.name,
          description: theProfile.description,
          businessStatus: theProfile.businessStatus,
          availability: theProfile.availability,
        }}
        onSubmit={(values) => {
          postProfile(values);
          updateUserName({ name: values.name });
          router.push("/profile");
        }}
      >
        <Form>
          <div className="bg-gray-100 ">
            <div className="profilesetupheader">
              <div className="profilesetupline">
                <div className="flex w-11/12 mx-auto xl:w-full xl:mx-4 items-center">
                  <p className="setupheadertext">Profile Setup</p>
                </div>
              </div>
              <div className="mx-auto">
                <div className="xl:w-9/12 w-11/12 mx-auto xl:ml-8">
                  <div className="rounded relative mt-8 h-48">
                    {/* {image === "" ? (
                    <Image
                      src="/assets/images/no-bg-image"
                      alt="myprof"
                      className="coverpicsoverlay"
                      layout="fill"
                    />
                  ) : (
                    image &&
                    imageURL && (
                      <Image
                        src={imageURL}
                        alt="myprof"
                        className="editprofilepics"
                        layout="fill"
                      />
                    )
                  )} */}
                    <div className="coverpicsone" />
                    <div className="coverpicstwo">
                      <p className="text-xs text-gray-100">Change Cover Photo</p>
                      <div className="ml-2 text-gray-100">
                        <FiEdit />
                      </div>
                    </div>
                    <input
                      className="border-0 absolute w-full h-full bg-yellow-500 right-0 left-0 object-cover  z-10 opacity-0"
                      type="file"
                      name="myImage"
                      accept="image/png, image/gif, image/jpeg"
                      // onChange={profileImageBackgroundUpload}
                    />
                    <button className="profilepics">
                      <Image src="/assets/images/d17.jpg" alt="myprof" className=" rounded-full" layout="fill" />

                      <div className="coverpicsoverlay" />
                      <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                        <FiEdit />
                        <p className="text-xs text-gray-100">Edit Picture</p>
                      </div>
                      <input
                        className="border-0 absolute w-full h-full bg-yellow-500 rounded-full right-0 left-0 object-cover  z-10 opacity-0"
                        type="file"
                        name="myImage"
                        accept="image/png, image/gif, image/jpeg, image/jpg"
                      />
                    </button>
                  </div>
                  <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                    <MyInput type="text" name="name" className="formname" placeholder="John Doe" label="Name" />
                  </div>
                  <div className="mt-8 flex flex-col xl:w-4/5 lg:w-4/5 md:w-4/5 w-full">
                    <MyTextArea
                      type="text"
                      name="description"
                      className="formdescription"
                      placeholder="Let people know who you are"
                      label="Description"
                    />
                  </div>
                  <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                    <div className="inline-flex justify-between py-4  space-x-20 ">
                      <div className=" flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                        <MySelect
                          name="businessStatus"
                          type="text"
                          label="Bussiness Status"
                          className="bg-gray-200 p-2"
                          options={businessOptions}
                        />
                      </div>
                    </div>
                    <p className="mylabel">Available</p>
                    <MySelect
                      name="availability"
                      type="text"
                      label="Availability"
                      options={availabilityOptions}
                      className="bg-gray-200 p-2"
                    />
                    <div className="mt-6 mb-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full pr-8">
                      <label htmlFor="phoneNumber" className="mylabel">
                        Phone Number
                      </label>
                      <PhoneInput country={"us"} name="phoneNumber" onChange={phoneNumberChange} value={phoneNumber} />
                      <p className="w-full text-left text-xs pt-1 text-gray-500 ">
                        You might choose not to include your phone number if this seems like a security concern.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-10 justify-end">
                <Link href="/profile">
                  <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-600  px-6 py-2 text-xs mr-4">
                    Cancel
                  </button>
                </Link>
                <button
                  className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-500 rounded text-white px-8 py-2 text-sm"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileForm;
