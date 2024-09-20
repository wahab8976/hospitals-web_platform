"use client";
import React from "react";
import Image from "next/image";
import profilePic from "@/app/assets/DummyProfilePic.jpeg";
import medicalIcon from "@/app/assets/icons/medicineIcon.svg"; // Add appropriate icons

const UserProfile = () => {
  const user = {
    name: "John Doe",
    age: 35,
    gender: "Male",
    phone: "+1234567890",
    email: "johndoe@example.com",
    bloodGroup: "O+",
    knownAllergies: "Pollen, Penicillin",
    currentMedications: "Aspirin, Ventolin",
    emergencyContact: "+9876543210",
  };

  const medicalHistory = [
    {
      visitDate: "2024-01-15",
      doctor: "Dr. Sarah Connor",
      diagnosis: "Hypertension",
      treatment: "Prescribed ACE inhibitors",
      followUp: "2024-02-15",
    },
    {
      visitDate: "2023-12-05",
      doctor: "Dr. Marcus Wright",
      diagnosis: "Asthma",
      treatment: "Prescribed inhaler",
      followUp: "2024-01-10",
    },
    // Will add more medical history data here from API
  ];

  return (
    <div className="bg-gray-100 mt-5 min-h-screen p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-lg text-white">
          <div className="flex items-center">
            <Image
              src={profilePic}
              alt="User Profile"
              className="rounded-full"
              width={120}
              height={120}
            />
            <div className="ml-6">
              <h2 className="text-3xl font-bold">{user.name}</h2>
              <p className="text-lg">
                Age: {user.age} | Gender: {user.gender}
              </p>
              <p className="text-lg">Blood Group: {user.bloodGroup}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Personal Info Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <p>
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">Emergency Contact:</span>{" "}
                {user.emergencyContact}
              </p>
              <p>
                <span className="font-semibold">Known Allergies:</span>{" "}
                {user.knownAllergies}
              </p>
              <p>
                <span className="font-semibold">Current Medications:</span>{" "}
                {user.currentMedications}
              </p>
            </div>
          </div>

          {/* Medical History Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Medical History
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                      Visit Date
                    </th>
                    <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                      Doctor
                    </th>
                    <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                      Diagnosis
                    </th>
                    <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                      Treatment
                    </th>
                    <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                      Follow-up
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {medicalHistory.map((entry, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="py-3 px-6 text-sm text-gray-700">
                        {entry.visitDate}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-700">
                        {entry.doctor}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-700">
                        {entry.diagnosis}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-700">
                        {entry.treatment}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-700">
                        {entry.followUp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Medical Icon Section */}
          <div className="flex justify-center mt-10">
            <Image
              src={medicalIcon}
              alt="Medical Icon"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
