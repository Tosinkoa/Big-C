import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Authorization from "@/HOC/Authorization";
import { useRouter } from "next/router";
import { useGetCarByIdQuery } from "@/store/ReduxStore/fetcherApi";

const Car = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetCarByIdQuery(id);

  return (
    <Layout>
      <div className="flex flex-col w-11/12 mx-auto mt-8 justify-center bg-blue-200 rounded-lg shadow">
        <div className="flex w-full justify-center mt-6 px-4 mx-auto box-shadow-lg h-2/4 relative">
          <Image
            src="/assets/images/d17.jpg"
            alt="shopping image"
            className="mx-auto flex rounded-lg inset-0 w-full h-2/4 object-cover"
            width={1000}
            height={500}
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold text-gray-800">
              {data?.carName}
            </h1>
            <div className="text-xl font-semibold text-gray-700 ">
              {data?.carPrice}
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500  mt-2">
              In stock
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 text-gray-800 ">
            <Link
              href="#"
              className="ml-auto hidden md:block text-sm text-gray-500  underline"
            >
              Size Guide
            </Link>
          </div>
          <div className="flex mb-4 text-sm font-medium">
            <button
              type="button"
              className="py-2 px-4  bg-blue-700 hover:bg-blue-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full sm:w-1/4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mx-auto rounded-lg "
            >
              Buy now
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center ">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Authorization(Car);
