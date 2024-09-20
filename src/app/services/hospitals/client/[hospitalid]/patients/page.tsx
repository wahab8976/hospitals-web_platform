"use client";
import React from "react";
import Image from "next/image";
import addIcon from "@/app/assets/icons/addIcon.svg";
import chatIcon from "@/app/assets/icons/chatIcon.svg";
import detailsIcon from "@/app/assets/icons/details.svg";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  // Dummy array of patients
  const patients = [
    {
      patientId: "P001",
      name: "John Doe",
      age: 30,
      gender: "Male",
      phone: "+1234567890",
      email: "johndoe@example.com",
    },
    {
      patientId: "P002",
      name: "Jane Smith",
      age: 25,
      gender: "Female",
      phone: "+0987654321",
      email: "janesmith@example.com",
    },
  ];

  return (
    <div className="overflow-hidden flex flex-col justify-center ">
      <h1 className="text-xl">Patients</h1>
      <div className="my-5 overflow-hidden rounded-lg w-[93%] bg-white h-[85vh] shadow-xl shadow-gray-300">
        <div className="flex justify-between items-center mt-2 px-3">
          <h2 className="font-semibold">Patient Info</h2>
          <button className="flex justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 items-center rounded-md">
            <Image height={35} src={addIcon} alt="Add a new Patient" />
            <span className="font-semibold">New Patient</span>
          </button>
        </div>
        <hr className="mt-2" />
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Patient ID
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Name
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Age
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Gender
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Phone
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Email
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  User Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr
                  key={patient.patientId}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {patient.patientId}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {patient.name}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {patient.age}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {patient.gender}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {patient.phone}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {patient.email}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700 flex space-x-2">
                    <div className="flex items-center gap-2">
                      <button>
                        <Image height={35} src={chatIcon} alt="Patient Chat" />
                      </button>
                      <button
                        onClick={() => {
                          router.push(
                            `${process.env.NEXT_PUBLIC_BASE_URL}/3224/patients/${patient.patientId}`
                          );
                        }}
                      >
                        <Image
                          height={30}
                          src={detailsIcon}
                          alt="Patient Details"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
