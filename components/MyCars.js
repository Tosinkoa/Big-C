import Image from "next/image";
import { useRouter } from "next/router";
import {
  useGetCarByIdQuery,
  useGetAllUserCarsQuery,
} from "@/store/ReduxStore/fetcherApi";

const MyCars = () => {
  const router = useRouter();
  const { id } = router.query;
  // const { carData } = useGetCarByIdQuery(id)
  const { theUserCarsData } = useGetAllUserCarsQuery();
  console.log(theUserCarsData);

  return (
    <div className="justify-center text-center ">
      <h1 className="font-bold mt-8 mb-4">My Cars</h1>
      <div className="flex items-center justify-center mt-8 mx-auto w-4/5">
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {theUserCarsData?.map((userCarsData, i) => {
            <div className="relative" key={i}>
              <div className=" relative group">
                <Image
                  width={600}
                  height={400}
                  className="rounded-md w-full"
                  src="/assets/images/d17.jpg"
                  alt="A girl Posing Img"
                />
              </div>
              <div className="text-left">
                <p className=" text-xl leading-5 text-gray-600 md:mt-6 mt-4">
                  {userCarsData.name}
                </p>
                <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
                  <span>$</span>
                  {userCarsData.price}
                </p>
                {/* <Link href="/profile/[id]" as={`profile/${carData?._id}`}>
                  Edit Car
                </Link> */}
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCars;
