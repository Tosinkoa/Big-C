import Link from "next/link";
import { useRouter } from "next/router";
import { usePostCarMutation, usePutCarMutation } from "@/store/fetcherApi";
import MyInput, { MyTextArea } from "./Formik";
import { Formik, Form } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";

function CarForm({ newCar, formId, theNewCar = true }) {
  const [postCar] = usePostCarMutation();
  const [putCar] = usePutCarMutation();
  const router = useRouter();
  const { id } = router.query;

  const [carImage, setCarImage] = useState("");
  const [selectedCarImage, setSelectedCarImage] = useState("");
  const [selectedCarImageURL, setSelectedCarImageURL] = useState("");

  useEffect(() => {
    if (selectedCarImage) {
      setSelectedCarImageURL(URL.createObjectURL(selectedCarImage));
    }
  }, [selectedCarImage]);

  const submitForm = (values) => {
    const formData = new FormData();
    formData.append("carImage", carImage);
    formData.append("carName", values.carName);
    formData.append("carPrice", values.carPrice);
    formData.append("carDescription", values.carDescription);
    if (theNewCar) {
      postCar(formData);
    } else {
      putCar({ id, formData });
    }
    router.push("/profile");
  };

  return (
    <div className=" flex justify-center inset-0 my-10">
      <div className=" bg-gray-900 z-0 inset-0" />
      <div className="mx-auto container">
        <div className="flex items-center justify-center h-full w-full">
          <div className="newcarbackground">
            
              <p className="text-2xl text-center font-semibold m-4">Sell Your Car</p>
         
            <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
              <p className="mylabel">Add Your Car Picture</p>
              <div className="flex items-center justify-center relative">
                {selectedCarImage && selectedCarImageURL ? (
                  <Image
                    src={selectedCarImage && selectedCarImageURL && selectedCarImageURL}
                    alt="carImage"
                    height={400}
                    width={600}
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    src={newCar.carImage ? newCar.carImage : "/assets/images/d17.jpg"}
                    alt="carImage"
                    height={400}
                    width={600}
                    objectFit="cover"
                  />
                )}

                <input
                  className="imageinput absolute  h-full opacity-0"
                  type="file"
                  name="myImage"
                  accept="image/*"
                  onChange={(e) => {
                    setCarImage(e.target.files[0]);
                    setSelectedCarImage(e.target.files[0]);
                  }}
                />
              </div>
              <div className="flex justify-center">
                <div className="mb-3 mt-2 w-2/4"></div>
              </div>
              <Formik
                initialValues={{
                  carName: newCar.carName,
                  carPrice: newCar.carPrice,
                  carDescription: newCar.carDescription,
                }}
                onSubmit={submitForm}
              >
                <Form id={formId} className="mt-6">
                  <div className="flex flex-col items-start">
                    <MyInput
                      name="carName"
                      className="nameandprice"
                      placeholder="Lamborghini Advendator"
                      label="Car Name"
                    />
                  </div>
                  <div className="mt-6 flex flex-col">
                    <MyInput
                      name="carPrice"
                      placeholder="$200,000"
                      type="number"
                      className="nameandprice"
                      label="Car Price"
                    />
                  </div>

                  <div className="mt-6">
                    <MyTextArea
                      name="carDescription"
                      placeholder="carDescription"
                      className="mytextera"
                      label="Car Description"
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
