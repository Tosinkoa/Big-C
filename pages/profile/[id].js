import CarForm from "@/components/CarForm";
import Layout from "@/components/Layout";
import Authorization from "@/HOC/Authorization";
import { useRouter } from "next/router";
import { useGetCarByIdQuery } from "@/store/fetcherApi";

const EditCar = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useGetCarByIdQuery(id);

  const newCar = {
    carImage: data?.carImage,
    carName: data?.carName,
    carPrice: data?.carPrice,
    carDescription: data?.carDescription,
  };
  return (
    <Layout>
      {isLoading && !data && <p>Loading...</p>}
      {!isLoading && data && <CarForm newCar={newCar} formId="editCar" theNewCar={false} />}
    </Layout>
  );
};

export default Authorization(EditCar);
