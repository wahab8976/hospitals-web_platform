"use client";
import React, { useState } from "react";
import Image from "next/image";
import settingsIcon from "@/app/assets/icons/settingsIcon.svg";
import patientIcon from "@/app/assets/icons/patient.svg";
import doctorIcon from "@/app/assets/icons/doctorIcon.svg";
import messageIcon from "@/app/assets/icons/messageIcon.svg";
import medicineIcon from "@/app/assets/icons/medicineIcon.svg";
import logoutIcon from "@/app/assets/icons/logoutIcon.svg";
import appointmentIcon from "@/app/assets/icons/appointmentIcon.svg";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Navbar = () => {
  const [selected, setSelected] = useState(1);
  const router = useRouter();
  useEffect(() => {
    setSelected(1);
    router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/3224/dashboard`);
  }, []);

  const handlePageNavigation = (clickedTab: number) => {
    setSelected(clickedTab);
    // 3224 will be replaced by Object ID of hospital from DataBase in Future
    switch (clickedTab) {
      case 1:
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/3224/dashboard`);
        break;
      case 2:
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/3224/appointments`);
        break;
      case 3:
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/3224/patients`);
        break;
      case 4:
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/3224/doctors`);
        break;
      case 5:
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/3224/messages`);
        break;
      case 6:
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/3224/medicines`);
        break;
      case 7:
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/3224/settings  `);
        break;
      default:
        break;
    }
  };

  return (
    <nav className=" w-[20vw] flex flex-col justify-center gap-8">
      <h1 className="mt-5 text-3xl">Logo</h1>
      <ul className="flex flex-col text-gray-300">
        <li
          className={`border-l-4 p-3 ${
            selected === 1 ? "border-blue-700 bg-blue-200" : ""
          } hover:cursor-pointer justify-start flex gap-3 items-center`}
          onClick={() => handlePageNavigation(1)}
        >
          <Image
            src={settingsIcon}
            alt="Dashboard"
            height={30}
            width={30}
            className="icon"
          />
          <span
            className={`bg-transparent ${
              selected === 1 ? "text-blue-700" : "text-gray-400"
            } `}
          >
            Dashboard
          </span>
        </li>
        <li
          className={`border-l-4 p-3 ${
            selected === 2 ? "border-blue-700 bg-blue-200" : ""
          } hover:cursor-pointer justify-start flex gap-3 items-center`}
          onClick={() => handlePageNavigation(2)}
        >
          <Image
            src={appointmentIcon}
            alt="Appointments"
            height={30}
            width={30}
            className="icon"
          />
          <span
            className={`bg-transparent ${
              selected === 2 ? "text-blue-700" : "text-gray-400"
            } `}
          >
            Appointments
          </span>
        </li>
        <li
          className={`border-l-4 p-3 ${
            selected === 3 ? "border-blue-700 bg-blue-200" : ""
          } hover:cursor-pointer justify-start flex gap-3 items-center`}
          onClick={() => handlePageNavigation(3)}
        >
          <Image
            src={patientIcon}
            alt="Patients"
            height={25}
            width={25}
            className="icon"
          />
          <span
            className={`bg-transparent ${
              selected === 3 ? "text-blue-700" : "text-gray-400"
            } `}
          >
            Patients
          </span>
        </li>
        <li
          className={`border-l-4 p-3 ${
            selected === 4 ? "border-blue-700 bg-blue-200" : ""
          } hover:cursor-pointer justify-start flex gap-3 items-center`}
          onClick={() => handlePageNavigation(4)}
        >
          <Image src={doctorIcon} alt="Doctors" height={30} className="icon" />
          <span
            className={`bg-transparent ${
              selected === 4 ? "text-blue-700" : "text-gray-400"
            } `}
          >
            Doctors
          </span>
        </li>
        <li
          className={`border-l-4 p-3 ${
            selected === 5 ? "border-blue-700 bg-blue-200" : ""
          } hover:cursor-pointer justify-start flex gap-3  items-center`}
          onClick={() => handlePageNavigation(5)}
        >
          <Image
            src={messageIcon}
            alt="Messages"
            height={25}
            width={25}
            className="icon"
          />
          <span
            className={`bg-transparent ${
              selected === 5 ? "text-blue-700" : "text-gray-400"
            } `}
          >
            Messages
          </span>
        </li>
        <li
          className={`border-l-4 p-3 ${
            selected === 6 ? "border-blue-700 bg-blue-200" : ""
          } hover:cursor-pointer justify-start flex gap-3 items-center`}
          onClick={() => handlePageNavigation(6)}
        >
          <Image
            src={medicineIcon}
            alt="Medicine"
            height={25}
            width={25}
            className="icon"
          />
          <span
            className={`bg-transparent ${
              selected === 6 ? "text-blue-700" : "text-gray-400"
            } `}
          >
            Medicine
          </span>
        </li>
        <li
          className={`border-l-4 p-3 ${
            selected === 7 ? "border-blue-700 bg-blue-200" : ""
          } hover:cursor-pointer flex justify-start gap-3 items-center`}
          onClick={() => handlePageNavigation(7)}
        >
          <Image
            src={settingsIcon}
            alt="Settings"
            height={30}
            width={30}
            className="icon"
          />
          <span
            className={`bg-transparent ${
              selected === 7 ? "text-blue-700" : "text-gray-400"
            } `}
          >
            Settings
          </span>
        </li>
      </ul>
      <span className="px-3 hover:cursor-pointer flex mt-5 gap-3 items-center">
        <Image src={logoutIcon} alt="Logout" height={30} className="icon" />
        <span className="text-gray-400">Logout</span>
      </span>
    </nav>
  );
};

export default Navbar;
