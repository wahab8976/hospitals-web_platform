"use client";
import React from "react";
import Image from "next/image";
import detailsIcon from "@/app/assets/icons/details.svg";
import { useRouter } from "next/navigation";
import { Tabs, Tab } from "@nextui-org/react";

interface AppointmentProps {
  appointmentId: string;
  patientName: string;
  age: number;
  date: string;
  time: string;
  doctor: string;
  completed: boolean;
}

const AppointmentsPage: React.FC = () => {
  const router = useRouter();
  const [selected, setSelected] = React.useState<string>("New");

  // Dummy array of appointments with a "completed" property
  const appointments: AppointmentProps[] = [
    {
      appointmentId: "A001",
      patientName: "John Doe",
      age: 30,
      date: "2024-09-25",
      time: "10:00 AM",
      doctor: "Dr. Emily Clark",
      completed: false,
    },
    {
      appointmentId: "A002",
      patientName: "Jane Smith",
      age: 25,
      date: "2024-09-26",
      time: "02:30 PM",
      doctor: "Dr. Alex Brown",
      completed: false,
    },
    {
      appointmentId: "A003",
      patientName: "Habeeb Ullah",
      age: 20,
      date: "2024-09-27",
      time: "01:00 PM",
      doctor: "Dr. Sarah Lee",
      completed: true,
    },
  ];

  // Filtered arrays based on appointment status
  const newAppointments = appointments.filter(
    (appointment) => !appointment.completed
  );
  const completedAppointments = appointments.filter(
    (appointment) => appointment.completed
  );

  const renderAppointments = (filteredAppointments: AppointmentProps[]) => (
    <tbody>
      {filteredAppointments.map((appointment, index) => (
        <tr
          key={appointment.appointmentId}
          className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <td className="py-3 px-6 text-sm text-gray-700">
            {appointment.appointmentId}
          </td>
          <td
            className="hover:cursor-pointer hover:underline py-3 px-6 text-sm text-gray-700"
            //  If an Admin Clicks on the Patient Name, they will be forwarded to the Patient Profile
            onClick={() => {
              router.push(
                `${process.env.NEXT_PUBLIC_BASE_URL}/3224/patients/${appointment.patientName}`
              );
            }}
          >
            {appointment.patientName}
          </td>

          <td className="py-3 px-6 text-sm text-gray-700">{appointment.age}</td>
          <td className="py-3 px-6 text-sm text-gray-700">
            {appointment.date}
          </td>
          <td className="py-3 px-6 text-sm text-gray-700">
            {appointment.time}
          </td>
          <td className="py-3 px-6 text-sm text-gray-700">
            {appointment.doctor}
          </td>
          <td className="py-3 px-6 text-sm text-gray-700 flex space-x-2">
            <div className="flex items-center gap-2">
              {!appointment.completed && (
                <button className="flex text-xs font-semibold text-blue-500">
                  Reschedule
                </button>
              )}
              <button
                onClick={() => {
                  router.push(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/3224/appointments/${appointment.appointmentId}`
                  );
                }}
              >
                <Image
                  height={30}
                  src={detailsIcon}
                  alt="Appointment Details"
                />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="overflow-hidden flex flex-col justify-center">
      <h1 className="text-xl">Appointments</h1>
      <div className="my-5 overflow-hidden rounded-lg w-[93%] bg-white h-[85vh] shadow-xl shadow-gray-300">
        <div className="flex justify-between items-center mt-2 px-3">
          <div className="flex w-full flex-col">
            <Tabs
              color="primary"
              variant="underlined"
              aria-label="Options"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="New" title="New Appointments" />
              <Tab key="Completed" title="Completed Appointments" />
            </Tabs>
          </div>
        </div>
        <hr className="mt-2" />
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Appointment ID
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Patient Name
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Age
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Date
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Time
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  Doctor
                </th>
                <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                  User Actions
                </th>
              </tr>
            </thead>
            {/* Conditional rendering based on the selected tab */}
            {selected === "New"
              ? renderAppointments(newAppointments)
              : renderAppointments(completedAppointments)}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
