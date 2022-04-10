import Layout from "@/components/Layout";
import Image from "next/image";
import { FaDollarSign } from "react-icons/fa";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import Authorization from "@/HOC/Authorization";
import { useGetProfileQuery, useGetUserQuery } from "@/store/ReduxStore/fetcherApi";
import MyCars from "@/components/MyCars";

function Profile() {
  const { data: profileData } = useGetProfileQuery();
  const { data: userData } = useGetUserQuery();

  return (
    <Layout>
      <div className="flex items-center justify-center mt-8 mx-auto w-4/5 ">
        {/* Card code block start */}
        <div className="bg-gray-300 shadow rounded-lg">
          <div className="relative ">
            <button className="w-full">
              <div className="coverpicstwo">
                <p className="text-xs text-gray-100">Change Cover Photo</p>
                <div className="ml-2 text-gray-100">
                  <FiEdit />
                </div>
              </div>
              <Image
                className="h-1/6 shadow rounded-t w-full object-cover object-center"
                src="/assets/images/d17.jpg"
                alt="profile"
                width={1000}
                height={200}
                objectFit="cover"
              />
            </button>
            <button className="roundedprofile">
              <Image
                className="w-full h-full z-10 overflow-hidden object-cover rounded-full"
                src="/assets/images/d17.jpg"
                alt="profile-image"
                layout="fill"
              />
            </button>
          </div>
          <div className="px-5 xl:px-10 pb-10 mt-2">
            <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5"></div>
            <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
              <div className="xl:pr-16 w-full xl:w-2/ mb-6 ">
                <div className="profileidentity">
                  <h2 className="profilename">{userData ? userData.name : <p>No name</p>}</h2>
                  <div className="profilestatus">
                    {profileData ? <p>{profileData.businessStatus}</p> : <p>Buyer</p>}
                  </div>
                </div>
                <div className="profiledescription ">
                  {profileData ? <p>{profileData.description}</p> : <p>Setup description</p>}
                </div>
              </div>

              <div className="workingstatusone">
                <div className="workingstatustwo">
                  <Link href="/new-car">
                    <button className="workingstatusthree">
                      <span>
                        <FaDollarSign className="text-xl mr-1" />
                      </span>
                      Sell
                    </button>
                  </Link>
                  <div className="availablestatus">
                    {profileData ? <p>{profileData.availability}</p> : <p>Available</p>}
                  </div>
                </div>
                <div className="profilecontactbutton">
                  <Link href="/profile-setup">Contact || Edit Profile</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyCars />
    </Layout>
  );
}
export default Authorization(Profile);
