import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const AppointmentFrom = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { handleBlur, handleChange, values, errors, handleSubmit, touched } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
      },
      validationSchema,
    //   onSubmit: async (values, { resetForm }) => {
    //     try {
    //       setIsLoading(true);
    //       const res = await axios.post(`${server}/request-message`, {
    //         ...values,
    //       });
    //       toast.success(res?.data?.message);
    //       resetForm();
    //       setIsLoading(false);
    //     } catch (error) {
    //       toast.error(error?.response?.data?.message || "Contact failed");
    //       setIsLoading(false);
    //     }
    //   },
    });

  return (
    <>
      <div className="mx-auto max-w-7xl px-4">
        
        <div className="mx-auto max-w-3xl pb-10">
          {/* <p className="text-2xl text-center  font-bold text-gray-900 md:text-4xl">
            Get in touch
          </p>
          */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex justify-between ">
                
                  <div className="w-full mx-1 ">
                     <label
                    htmlFor="firstName"
                    className="block text-md font-medium text-gray-700"
                  >
                    First Name
                  </label>
                    <input
                      type="text"
                      name="fullName"
                      autoComplete="firstName"
                      required
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="appearance-none bg-secondary  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  focus:border-primary sm:text-sm"
                    />{" "}
                    {touched.fullName && errors.fullName && (
                      <p className="text-red-500 text-md">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="w-full mx-1">
                     <label
                    htmlFor="email"
                    className=" text-md font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                    <input
                      type="text"
                      name="fullName"
                      autoComplete="fullName"
                      required
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="appearance-none bg-secondary w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  focus:border-primary sm:text-sm"
                    />{" "}
                    {touched.fullName && errors.fullName && (
                      <p className="text-red-500 text-md">{errors.fullName}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between "> 
                  <div className="w-full mx-1">
                    <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Email address
                  </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="appearance-none bg-secondary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary sm:text-sm"
                    />{" "}
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-md">{errors.email}</p>
                    )}
                  </div>
                 
                  <div className="w-full mx-1">
                     <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                    <input
                      type="number"
                      name="phoneNumber"
                      autoComplete="phoneNumber"
                      required
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="appearance-none bg-secondary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary sm:text-sm"
                    />{" "}
                    {touched.phoneNumber && errors.phoneNumber && (
                      <p className="text-red-500 text-md">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between "> 
                  <div className="w-full mx-1">
                    <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Select Type 
                  </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="appearance-none bg-secondary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary sm:text-sm"
                    />{" "}
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-md">{errors.email}</p>
                    )}
                  </div>
                 
                  <div className="w-full mx-1">
                     <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Select Room
                  </label>
                    <input
                      type="number"
                      name="phoneNumber"
                      autoComplete="phoneNumber"
                      required
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="appearance-none bg-secondary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary sm:text-sm"
                    />{" "}
                    {touched.phoneNumber && errors.phoneNumber && (
                      <p className="text-red-500 text-md">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between "> 
                  <div className="w-full mx-1">
                    <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Check In
                  </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="appearance-none bg-secondary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary sm:text-sm"
                    />{" "}
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-md">{errors.email}</p>
                    )}
                  </div>
                 
                  <div className="w-full mx-1">
                     <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Check Out
                  </label>
                    <input
                      type="number"
                      name="phoneNumber"
                      autoComplete="phoneNumber"
                      required
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="appearance-none bg-secondary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary sm:text-sm"
                    />{" "}
                    {touched.phoneNumber && errors.phoneNumber && (
                      <p className="text-red-500 text-md">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      type="text"
                      name="message"
                      required
                      rows={"5"}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="appearance-none block w-full px-3 py-2 border bg-secondary border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />{" "}
                    {touched.message && errors.message && (
                      <p className="text-red-500 text-md">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative bg-primary h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-secondary/80"
                  >
                    {isLoading ? "Loading..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
    </>
  );
};

export default AppointmentFrom;