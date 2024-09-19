"use client";
import React from "react";
import { Badge, Button, Avatar } from "@nextui-org/react";
import { NotificationIcon } from "@/app/components/hospitals/NotificationIcon";

const AdminInfoBar = () => {
  return (
    <div className="w-full h-14 bg-blue-50 flex justify-around items-center">
      <h1>Hospital Name</h1>
      <div className="flex justify-center items-center gap-4">
        <Badge content="9+" shape="circle" color="primary">
          <Button
            radius="full"
            isIconOnly
            aria-label="more than 99 notifications"
            variant="light"
          >
            <NotificationIcon size={24} />
          </Button>
        </Badge>
        <div className="flex gap-1 bg-transparent items-center">
          <Badge
            content=""
            placement="bottom-right"
            color="primary"
            shape="circle"
          >
            <Avatar
              radius="full"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
          <div className="flex flex-col text-xs">
            <span>Abdul Wahab</span>
            <span className="text-gray-400">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInfoBar;
