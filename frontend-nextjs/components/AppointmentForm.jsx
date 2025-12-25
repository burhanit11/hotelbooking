"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "@/utils/server";

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
          await axios.post(`${server}/booking`, values);
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
    <>
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Book Your Stay
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border border-primary px-3 py-2 rounded bg-gray-50 focus:outline-primary"
            />
            {touched.firstName && errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border border-primary px-3 py-2 rounded bg-gray-50 focus:outline-primary"
            />
            {touched.lastName && errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border border-primary px-3 py-2 rounded bg-gray-50 focus:outline-primary"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border border-primary px-3 py-2 rounded bg-gray-50 focus:outline-primary"
            />
            {touched.phoneNumber && errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        {/* Type & Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Select Type</label>
            <input
              name="selectType"
              value={values.selectType}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border border-primary px-3 py-2 rounded bg-gray-50 focus:outline-primary"
            />
            {touched.selectType && errors.selectType && (
              <p className="text-red-500 text-sm">{errors.selectType}</p>
            )}
          </div>
          <div>
            <label>Select Room</label>
            <input
              name="selectRoom"
              value={values.selectRoom}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border border-primary px-3 py-2 rounded bg-gray-50 focus:outline-primary"
            />
            {touched.selectRoom && errors.selectRoom && (
              <p className="text-red-500 text-sm">{errors.selectRoom}</p>
            )}
          </div>
        </div>

        {/* Check In & Check Out */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Check In</label>
            <input
              type="date"
              name="checkIn"
              value={values.checkIn}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border border-primary px-3 py-2 rounded bg-gray-50 focus:outline-primary"
            />
            {touched.checkIn && errors.checkIn && (
              <p className="text-red-500 text-sm">{errors.checkIn}</p>
            )}
          </div>
          <div>
            <label>Check Out</label>
            <input
              type="date"
              name="checkOut"
              value={values.checkOut}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border border-primary px-3 py-2 rounded bg-gray-50 focus:outline-primary"
            />
            {touched.checkOut && errors.checkOut && (
              <p className="text-red-500 text-sm">{errors.checkOut}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label>Message</label>
          <textarea
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border border-primary px-3 py-2 rounded bg-gray-50 focus:outline-primary"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto bg-primary text-white px-6 py-2 rounded hover:opacity-90 transition"
          >
            {isLoading ? "Sending..." : "Book Appointment"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AppointmentForm;
