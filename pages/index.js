import Image from "next/image";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import { GiBinoculars } from "react-icons/gi";
import { useGetAllCarsQuery } from "@/store/ReduxStore/fetcherApi";
import Link from "next/link";

const Market = () => {
  const { data, isLoading } = useGetAllCarsQuery();

  return (
    <Layout>
      <div className="2xl:container 2xl:mx-auto">
        <div className=" py-3 lg:px-20 md:px-6 px-4">
          <div className=" flex justify-center mt-3 items-center">
            <div className=" flex space-x-3 justify-center items-center">
              <span className="bg-blue-800 px-4 py-2 rounded-md text-2xl text-white">
                <GiBinoculars />
              </span>
              <input
                type="search"
                className="border-b-2 w-9/12 border-gray-700 -mb-3 leading-5 text-lg p-2 focus:outline-none"
                placeholder="Search for cars here..."
              />
            </div>
          </div>
          <hr className=" w-full bg-gray-200 my-6" />

          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            {data?.map((cars, i) => (
              <Link key={i} href="/[id]" as={`${cars._id}`} className="relative" passHref>
                <div>
                  <div className=" relative group">
                    <div className="caroverlay"></div>
                    <Image
                      width={600}
                      height={400}
                      className="rounded-md w-full"
                      src="/assets/images/d17.jpg"
                      alt="A girl Posing Img"
                    />
                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100 z-20">
                      <button className="text-base font-bold leading-4 text-gray-600 hover:bg-gray-300 hover:text-gray-700 bg-gray-100 py-3 w-full">
                        Add to your garage
                      </button>
                      <button className=" bg-transparent  text-base font-bold leading-4 border-2 hover:bg-gray-300 hover:text-gray-700 border-white py-3 w-full mt-2 text-white">
                        View Car
                      </button>
                    </div>
                  </div>

                  <p className="  text-xl leading-5 text-gray-600 md:mt-6 mt-4">{cars.carName}</p>
                  <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
                    <span>$</span> {cars.carPrice}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* _______________________________________________________ */}

          <Pagination />

          {/* _______________________________________________________ */}
        </div>
      </div>
    </Layout>
  );
};

export default Market;
