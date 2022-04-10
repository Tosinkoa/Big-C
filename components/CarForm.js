import { FiImage } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePostCarMutation, usePutCarMutation } from "@/store/ReduxStore/fetcherApi";
import MyInput, { MyTextArea } from "./Formik";
import { Formik, Form } from "formik";

function CarForm({ newCar, formId, theNewCar = true }) {
  const [carForm, setCarForm] = useState({
    carName: newCar.carName,
    carPrice: newCar.carPrice,
    carDescription: newCar.carDescription,
  });

  const [postCar] = usePostCarMutation();
  const [putCar] = usePutCarMutation();
  const router = useRouter();

  const changeHandler = (e) => {
    setCarForm({ ...carForm, [e.target.name]: e.target.value });
  };

  const { carName, carPrice, carDescription } = carForm;

  return (
    <div className=" flex justify-center inset-0">
      <div className=" bg-gray-900 z-0 inset-0" />
      <div className="mx-auto container">
        <div className="flex items-center justify-center h-full w-full">
          <div className="newcarbackground">
            <div className="sellyourcar">
              <p className="text-base font-semibold">Sell Your Car</p>
            </div>
            <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
              <p className="mylabel text-center">Add car picture</p>
              <div className="flex items-center justify-center">
                <div className="newcaricon">
                  <FiImage />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-3 mt-2 w-2/4">
                  <input className="imageinput" type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
                </div>
              </div>
              <Formik
                initialValues={{ carName: "", carPrice: "", carDescription: "" }}
                onSubmit={(values) => {
                  theNewCar ? postCar(values) : putCar({ values });
                }}
              >
                <Form id={formId} className="mt-6">
                  <div className="flex flex-col items-start space-x-9">
                    <label htmlFor="carName" className="mylabel ml-8">
                      Car Name
                    </label>
                    <MyInput
                      name="carName"
                      onChange={changeHandler}
                      className="nameandprice"
                      placeholder="Lamborghini Advendator"
                    />

                    <label htmlFor="carPrice" className="mylabel">
                      Car Price
                    </label>
                    <MyInput
                      name="carPrice"
                      onChange={changeHandler}
                      placeholder="$200,000"
                      type="number"
                      className="nameandprice"
                    />
                  </div>

                  <div className="mt-8">
                    <MyTextArea
                      name="carDescription"
                      onChange={changeHandler}
                      placeholder="carDescription"
                      className="mytextera"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <Link href="/profile" className="cancelbutton" passHref>
                      Cancel
                    </Link>
                    <button className="sellbutton">Sell</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarForm;
