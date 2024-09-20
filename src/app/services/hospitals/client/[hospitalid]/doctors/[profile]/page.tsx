"use client";
import React from "react";
import Image from "next/image";
import profilePicture from "@/app/assets/DummyProfilePic.jpeg"; // Add a placeholder image for the doctor

const DoctorProfilePage = () => {
  // Dummy data for a doctor
  const doctor = {
    doctorId: "D001",
    name: "Dr. Emily Clark",
    specialization: "Cardiologist",
    bio: "Dr. Emily Clark is a highly experienced Cardiologist with over 15 years in the field, specializing in the treatment of heart diseases. She is committed to providing the best care possible for her patients.",
    phone: "+1234567890",
    email: "emilyclark@example.com",
    experience: "15 years",
    qualifications: "MBBS, MD, FACC",
    hospital: "City Health Hospital",
    officeHours: "Mon-Fri: 9:00 AM - 5:00 PM",
    isAvailable: false,
    location: "123 Health St, City, Country", // Add location here
  };

  return (
    <div className="flex flex-col items-center p-5">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mt-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Image
              src={profilePicture}
              alt="Doctor Profile"
              width={120}
              height={120}
              className="rounded-full"
            />
            <div className="ml-6">
              <h1 className="text-3xl font-bold text-gray-800">
                {doctor.name}
              </h1>
              <p className="text-lg text-gray-500">{doctor.specialization}</p>
              <p className="text-sm text-gray-400">{doctor.qualifications}</p>
            </div>
          </div>
          <div className="text-gray-500 text-right">
            <p>{doctor.officeHours}</p>
            {doctor.isAvailable ? (
              <p className="text-sm text-green-400">Available Today</p>
            ) : (
              <p className="text-sm text-red-500">Not Available Today</p>
            )}
          </div>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Bio</h2>
            <p className="text-gray-600">{doctor.bio}</p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Contact Information
            </h2>
            <p className="text-gray-600">Phone: {doctor.phone}</p>
            <p className="text-gray-600">Email: {doctor.email}</p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Experience
            </h2>
            <p className="text-gray-600">
              {doctor.experience} in {doctor.specialization}
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Qualifications
            </h2>
            <p className="text-gray-600">{doctor.qualifications}</p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Office Hours
            </h2>
            <p className="text-gray-600">{doctor.officeHours}</p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Location
            </h2>
            <p className="text-gray-600">{doctor.location}</p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            View Patients List
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
