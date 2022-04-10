import CarForm from "@/components/CarForm";
import Layout from "@/components/Layout";
import Authorization from "@/HOC/Authorization";
import { useRouter } from "next/router";
import { useGetCarByIdQuery } from "@/store/ReduxStore/fetcherApi";

const EditCar = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetCarByIdQuery(id);

  const newCar = {
    carName: data?.carName,
    carPrice: data?.carPrice,
    carDescription: data?.carDescription,
  };
  return (
    <Layout>
      <CarForm newCar={newCar} formId="editCar" theNewCar={false} />
    </Layout>
  );
};

export default Authorization(EditCar);
