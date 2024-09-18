import React from "react";
import Image from "next/image";
import settingsIcon from "@/app/assets/icons/settingsIcon.svg";
import patientIcon from "@/app/assets/icons/patient.svg";
import doctorIcon from "@/app/assets/icons/doctorIcon.svg";
import messageIcon from "@/app/assets/icons/messageIcon.svg";
import medicineIcon from "@/app/assets/icons/medicineIcon.svg";
import logoutIcon from "@/app/assets/icons/logoutIcon.svg";

// Icons hex color code is #C1C1C1
const Navbar = () => {
  return (
    <nav className="px-4 flex flex-col justify-center gap-8">
      <h1 className="mt-5 text-3xl">Logo</h1>
      <ul className="flex flex-col gap-5 text-gray-300">
        <li className="hover:cursor-pointer flex gap-3 items-center ">
          <Image src={settingsIcon} alt="Description" height={30} />
          <span className="text-gray-400">Dashboard</span>
        </li>
        <li className=" hover:cursor-pointer flex gap-3 items-center">
          <Image src={patientIcon} alt="Description" height={30} />
          <span className="text-gray-400">Patients</span>
        </li>
        <li className="hover:cursor-pointer flex gap-3 items-center">
          <Image src={settingsIcon} alt="Description" height={30} />
          <span className="text-gray-400">Appointments</span>
        </li>
        <li className="hover:cursor-pointer flex gap-3 items-center">
          <Image src={doctorIcon} alt="Description" height={30} />
          <span className="text-gray-400">Doctors</span>
        </li>
        <li className="hover:cursor-pointer flex gap-3 items-center">
          <Image src={messageIcon} alt="Description" height={30} />
          <span className="text-gray-400">Messages</span>
        </li>
        <li className="hover:cursor-pointer flex gap-3 items-center">
          <Image src={medicineIcon} alt="Description" height={30} />
          <span className="text-gray-400">Medicine</span>
        </li>
        <li className="hover:cursor-pointer flex gap-3 items-center">
          <Image src={settingsIcon} alt="Description" height={30} />
          <span className="text-gray-400">Settings</span>
        </li>
      </ul>

      <span className="hover:cursor-pointer flex mt-5 gap-3 items-center">
        <Image src={logoutIcon} alt="Description" height={30} />
        <span className="text-gray-400">Logout</span>
      </span>
    </nav>
  );
};

export default Navbar;
