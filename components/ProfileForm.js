import { useState, useEffect } from "react";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Formik, Form } from "formik";
import { usePostProfileMutation, useUpdateUserNameMutation } from "@/store/fetcherApi";
import MyInput, { MySelect, MyTextArea } from "./Formik";
import { useDispatch } from "react-redux";

const ProfileForm = ({ theProfile }) => {
  const dispatch = useDispatch();
  const [postProfile] = usePostProfileMutation();
  const [updateUserName] = useUpdateUserNameMutation();

  const [phoneNumber, setPhoneNumber] = useState(theProfile?.phoneNumber);
  const [coverImage, setCoverImage] = useState(theProfile.coverImage);
  const [selectedCoverImage, setSelectedCoverImage] = useState("");
  const [selectedCoverImageURL, setSelectedCoverImageURL] = useState("");
  const [profileImage, setProfileImage] = useState(theProfile.profileImage);
  const [selectedProfileImage, setSelectedProfileImage] = useState("");
  const [selectedProfileImageURL, setSelectedProfileImageURL] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (selectedCoverImage) {
      setSelectedCoverImageURL(URL.createObjectURL(selectedCoverImage));
    }
  }, [selectedCoverImage]);

  useEffect(() => {
    if (selectedProfileImage) {
      setSelectedProfileImageURL(URL.createObjectURL(selectedProfileImage));
    }
  }, [selectedProfileImage]);

  const submitForm = (values) => {
    let formData = new FormData();
    formData.append("coverImage", coverImage);
    formData.append("profileImage", profileImage);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("businessStatus", values.businessStatus);
    formData.append("availability", values.availability);
    postProfile(formData);
    updateUserName(values.name);
    router.push("/profile");
  };

  const initialValues = {
    name: theProfile.name,
    description: theProfile.description,
    businessStatus: theProfile.businessStatus,
    availability: theProfile.availability,
  };

  const phoneNumberChange = (value, country, e, formattedValue) => {
    setPhoneNumber(e.target.value);
  };

  const businessOptions = [
    { value: "--Select Business Status--", name: "business default" },
    { value: "Buyer", name: "buyer" },
    { value: "Seller", name: "seller" },
  ];

  const availabilityOptions = [
    { value: "--Select Availability Status--", name: "availabity default" },
    { value: "Yes", name: "yes" },
    { value: "No", name: "no" },
  ];

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={submitForm}>
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
                  {/* -------------------Cover image start -----------------------*/}
                  <div className="rounded relative mt-8 h-48">
                    {selectedCoverImage && selectedCoverImageURL ? (
                      <Image
                        src={selectedCoverImage && selectedCoverImageURL && selectedCoverImageURL}
                        alt="myprof"
                        layout="fill"
                        objectFit="cover"
                      />
                    ) : (
                      <Image
                        src={theProfile.coverImage ? theProfile.coverImage : "/assets/images/d17.jpg"}
                        alt="myprof"
                        layout="fill"
                        objectFit="cover"
                      />
                    )}

                    <div className="coverpicstwo ">
                      <p className="text-xs text-gray-100 ">Change Cover Photo</p>
                      <div className="ml-2 text-gray-100">
                        <FiEdit />
                      </div>
                    </div>
                    <input
                      className="border-0 absolute w-full h-full  right-0 left-0 object-cover  z-10 opacity-0"
                      type="file"
                      name="coverImage"
                      accept="image/*"
                      onChange={(e) => {
                        setCoverImage(e.target.files[0]);
                        setSelectedCoverImage(e.target.files[0]);
                      }}
                    />
                    {/* -------------------Cover image end -----------------------*/}
                    {/* -------------------Profile image start -----------------------*/}

                    {selectedCoverImage && selectedCoverImageURL ? (
                      <Image
                        src={selectedCoverImage && selectedCoverImageURL && selectedCoverImageURL}
                        alt="myprof"
                        layout="fill"
                        objectFit="cover"
                      />
                    ) : (
                      <Image
                        src={theProfile?.coverImage ?? "/assets/images/d17.jpg"}
                        alt="myprof"
                        layout="fill"
                        objectFit="cover"
                      />
                    )}

                    <div className="profilepics">
                      {selectedProfileImage && selectedProfileImageURL ? (
                        <Image
                          src={selectedProfileImage && selectedProfileImageURL && selectedProfileImageURL}
                          alt="myprof"
                          className=" rounded-full"
                          layout="fill"
                          objectFit="cover"
                        />
                      ) : (
                        <Image
                          src={theProfile?.profileImage ?? "/assets/images/no-profile-image.jpg"}
                          alt="myprof"
                          className=" rounded-full"
                          layout="fill"
                          objectFit="cover"
                        />
                      )}

                      <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100 bg-gray-700 p-1 rounded-md left-6 bottom-2 absolute">
                        <FiEdit />
                      </div>
                      <input
                        className="border-0  w-full h-full  rounded-full object-cover  z-10 opacity-0"
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        onChange={(e) => {
                          setProfileImage(e.target.files[0]);
                          setSelectedProfileImage(e.target.files[0]);
                        }}
                      />
                    </div>
                    {/* -------------------Profile image end -----------------------*/}
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

                    <div className="inline-flex justify-between py-4  space-x-20 ">
                      <div className=" flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                        <MySelect
                          name="availability"
                          type="text"
                          label="Are you available for client?"
                          options={availabilityOptions}
                          className="bg-gray-200 py-2"
                        />
                      </div>
                    </div>
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
                  <div className=" justify-end mb-6">
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
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileForm;
