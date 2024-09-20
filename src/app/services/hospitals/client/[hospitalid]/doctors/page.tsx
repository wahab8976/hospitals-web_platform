"use client";
import React from "react";
import Image from "next/image";
import addIcon from "@/app/assets/icons/addIcon.svg";
import chatIcon from "@/app/assets/icons/chatIcon.svg";
import detailsIcon from "@/app/assets/icons/details.svg";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  // Dummy array of doctors
  const doctors = [
    {
      doctorId: "D001",
      name: "Dr. Emily Clark",
      specialization: "Cardiologist",
      phone: "+1234567890",
      email: "emilyclark@example.com",
    },
    {
      doctorId: "D002",
      name: "Dr. Alex Brown",
      specialization: "Neurologist",
      phone: "+0987654321",
      email: "alexbrown@example.com",
    },
    {
      doctorId: "D003",
      name: "Dr. Sarah Lee",
      specialization: "Pediatrician",
      phone: "+9234567890",
      email: "sarahlee@example.com",
    },
  ];

  return (
    <div className="overflow-hidden flex flex-col justify-center">
      <h1 className="text-xl">Doctors</h1>
      <div className="my-5 overflow-hidden rounded-lg w-[93%] bg-white h-[85vh] shadow-xl shadow-gray-300">
        <div className="flex justify-between items-center mt-2 px-3">
          <h2 className="font-semibold">Doctor Info</h2>
          <button className="flex justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 items-center rounded-md">
            <Image height={35} src={addIcon} alt="Add a new Doctor" />
            <span className="font-semibold">New Doctor</span>
          </button>
        </div>
        <hr className="mt-2" />
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Doctor ID
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Name
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Specialization
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
              {doctors.map((doctor, index) => (
                <tr
                  key={doctor.doctorId}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {doctor.doctorId}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {doctor.name}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {doctor.specialization}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {doctor.phone}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {doctor.email}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700 flex space-x-2">
                    <div className="flex items-center gap-2">
                      <button>
                        <Image height={35} src={chatIcon} alt="Doctor Chat" />
                      </button>
                      <button
                        onClick={() => {
                          router.push(
                            `${process.env.NEXT_PUBLIC_BASE_URL}/3224/doctors/${doctor.doctorId}`
                          );
                        }}
                      >
                        <Image
                          height={30}
                          src={detailsIcon}
                          alt="Doctor Details"
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
