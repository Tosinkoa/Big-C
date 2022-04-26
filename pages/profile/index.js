import Layout from "@/components/Layout";
import Image from "next/image";
import { FaDollarSign } from "react-icons/fa";
import Link from "next/link";
import Authorization from "@/HOC/Authorization";
import { useGetProfileQuery, useGetUserQuery } from "@/store/fetcherApi";
import MyCars from "@/components/MyCars";

function Profile() {
  const { data: profileData } = useGetProfileQuery();
  const { data: userData } = useGetUserQuery();

  console.log(profileData);

  return (
    <Layout>
      <div className="flex items-center justify-center mt-8 mx-auto w-full ">
        {/* Card code block start */}
        <div className="bg-gray-300 shadow rounded-lg w-4/5">
          <div className="relative ">
            <div className="flex flex-col text-center mx-auto ">
              <Image
                className="h-1/6 shadow rounded-t w-full object-cover  object-center"
                src={ profileData?.coverImage ?? "/assets/images/no-bg-image.png"}
                alt="profile"
                width={400}
                height={200}
                objectFit="cover"
              />
            </div>
            <div className="roundedprofile">
              <Image
                className="w-full h-full z-10 overflow-hidden object-cover rounded-full"
                src={ profileData?.profileImage ?? "/assets/images/no-bg-image.png"}
                alt="profile"
                width={200}
                height={200}
                objectFit="cover"
              />
            </div>
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
