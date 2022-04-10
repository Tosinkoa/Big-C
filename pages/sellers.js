import Image from "next/image";
import Layout from "@/components/Layout";
import Authorization from "@/HOC/Authorization";
import { useGetAllProfilesQuery } from "@/store/ReduxStore/fetcherApi";

function Sellers() {
  const { data: allProfiles, isLoading, error } = useGetAllProfilesQuery();

  return (
    <Layout>
      <div className="container flex justify-center  mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">SELLERS</p>
          <h1 className="thesellermaintext">
            View Buyers Profile Here, You Might Be Lucky To Find Your Dream Car Too.
          </h1>
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      {allProfiles?.map((profiles, i) => {
        <div key={i} className="w-full bg-gray-100 px-10 pt-10">
          <div className="container mx-auto">
            <div className="thesellerbg">
              <div className="sellersimagebg">
                <div className="rounded overflow-hidden shadow-md bg-gray-100">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <Image
                        width={400}
                        height={400}
                        src="/assets/images/d17.jpg"
                        alt="profile"
                        className="sellersimage"
                      />
                    </div>
                  </div>
                  <div className="px-6 mb-8 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">{profiles.name}</div>
                    <p className="text-gray-800 text-sm text-center">{profiles.businessStatus}</p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">{profiles.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
      })}
    </Layout>
  );
}

export default Authorization(Sellers);
