import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../server";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .required("Phone number is required"),
  selectType: Yup.string().required("Type is required"),
  selectRoom: Yup.string().required("Room is required"),
  checkIn: Yup.date().required("Check In is required"),
  checkOut: Yup.date().required("Check Out is required"),
  message: Yup.string(),
});

const AppointmentForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        selectType: "",
        selectRoom: "",
        checkIn: "",
        checkOut: "",
        message: "",
      },
      validationSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          setIsLoading(true);
          const res = await axios.post(`${server}/booking`, values);
          toast.success("Booking created successfully!");
          resetForm();
          setIsLoading(false);
        } catch (error) {
          toast.error(error?.response?.data?.message || "Booking failed");
          setIsLoading(false);
        }
      },
    });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <label>First Name</label>
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border px-2 py-1 rounded bg-secondary"
          />
          {touched.firstName && errors.firstName && (
            <p className="text-red-500">{errors.firstName}</p>
          )}
        </div>
        <div className="flex-1">
          <label>Last Name</label>
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border px-2 py-1 rounded bg-secondary"
          />
          {touched.lastName && errors.lastName && (
            <p className="text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border px-2 py-1 rounded bg-secondary"
          />
          {touched.email && errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="flex-1">
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border px-2 py-1 rounded bg-secondary"
          />
          {touched.phoneNumber && errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber}</p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label>Select Type</label>
          <input
            name="selectType"
            value={values.selectType}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border px-2 py-1 rounded bg-secondary "
          />
          {touched.selectType && errors.selectType && (
            <p className="text-red-500">{errors.selectType}</p>
          )}
        </div>
        <div className="flex-1">
          <label>Select Room</label>
          <input
            name="selectRoom"
            value={values.selectRoom}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border px-2 py-1 rounded bg-secondary"
          />
          {touched.selectRoom && errors.selectRoom && (
            <p className="text-red-500">{errors.selectRoom}</p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label>Check In</label>
          <input
            name="checkIn"
            type="date"
            value={values.checkIn}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border px-2 py-1 rounded bg-secondary"
          />
          {touched.checkIn && errors.checkIn && (
            <p className="text-red-500">{errors.checkIn}</p>
          )}
        </div>
        <div className="flex-1">
          <label>Check Out</label>
          <input
            name="checkOut"
            type="date"
            value={values.checkOut}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border px-2 py-1 rounded bg-secondary"
          />
          {touched.checkOut && errors.checkOut && (
            <p className="text-red-500">{errors.checkOut}</p>
          )}
        </div>
      </div>

      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full border px-2 py-1 rounded bg-secondary"
        />
        {touched.message && errors.message && (
          <p className="text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Book Appointment"}
      </button>
    </form>
  );
};

export default AppointmentForm;
