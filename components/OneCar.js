import Image from "next/image";

const OneCar = ({ carData }) => {
  return (
    <div className="mb-10 md:w-3/5 mx-auto">
      <div className="flex flex-col w-11/12 mx-auto mt-8 justify-center border border-gray-300 bg-blue-200 rounded-lg shadow">
        <div className="flex w-full justify-center mt-6 px-4 mx-auto box-shadow-lg h-2/4 relative">
          <Image
            src={carData?.carImage}
            alt="shopping image"
            className="mx-auto flex rounded-lg inset-0 w-full h-2/4 object-cover"
            width={500}
            height={400}
            objectFit="cover"
          />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap  text-xl w-11/12 mx-auto">
            <h1 className="flex-auto font-semibold text-gray-800">{carData?.carName}</h1>
           <span>$</span> <div className=" font-semibold text-gray-700 ">{carData?.carPrice}</div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 text-gray-800 ">
          </div>
          <div className="flex mb-4 text-sm font-medium">
            <button
              type="button"
              className="py-2 px-4  bg-blue-700 hover:bg-blue-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full sm:w-1/4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mx-auto rounded-lg "
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCar;
