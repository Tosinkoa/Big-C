import CarForm from "@/components/CarForm";
import Layout from "@/components/Layout";
import Authorization from "@/HOC/Authorization";

const NewCar = () => {
  const newCar = {
    carImage: "",
    carName: "",
    carPrice: "",
    carDescription: "",
  };
  return (
    <Layout>
      <CarForm newCar={newCar} formId="new-car" />
    </Layout>
  );
};

export default Authorization(NewCar);
