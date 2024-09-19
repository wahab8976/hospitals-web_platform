import React from "react";
import Image from "next/image";
import addIcon from "@/app/assets/icons/addIcon.svg";
import chatIcon from "@/app/assets/icons/chatIcon.svg";
import infoIcon from "@/app/assets/icons/infoIcon.svg";
const page = () => {
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
    // Add more patient data here
  ];
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-xl">Patients</h1>
      <div className="my-5 rounded-lg w-[93%] bg-white h-[85vh] shadow-xl shadow-gray-300">
        <div className="flex justify-between items-center mt-2 px-3">
          <h2 className="font-semibold">Patient Info</h2>
          <button className="flex justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-bold px-2  items-center rounded-md">
            <Image height={35} src={addIcon} alt="add a new Patient" />
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
                    {/* <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
                      Edit
                    </button> */}

                    <button>
                      <Image height={35} src={chatIcon} alt="" />
                    </button>
                    <button className="btn btn-square btn-outline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="#"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <button>
                      <Image height={35} src={infoIcon} alt="" />
                    </button>
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

export default page;
