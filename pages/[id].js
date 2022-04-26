import Layout from "@/components/Layout";
import Authorization from "@/HOC/Authorization";
import { useRouter } from "next/router";
import { useGetCarByIdQuery } from "@/store/fetcherApi";
import OneCar from "@/components/OneCar";

const Car = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: carData, isLoading } = useGetCarByIdQuery(id);

  return (
    <Layout>
      {isLoading && !carData && <p>Loading...</p>}
      {carData && !isLoading && <OneCar carData={carData} />}
    </Layout>
  );
};

export default Authorization(Car);
