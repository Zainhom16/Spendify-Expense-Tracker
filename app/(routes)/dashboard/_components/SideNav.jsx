import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: <LayoutGrid size={24} />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: <PiggyBank size={24} />,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: <ReceiptText size={24} />,
      path: "/dashboard/expenses",
    },
  ];

  const path = usePathname();

  useEffect(() => {}, [path]);

  return (
    <div className="p-5 h-screen border shadow-sm ">
      <Image src={"/logo.png"} alt="logo" width={240} height={240} />
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-primaryColor hover:bg-blue-100 ${
                path === menu.path && "text-primaryColor bg-blue-100"
              }`}
            >
              {menu.icon}
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-3 p-5 flex gap-6 items-center">
        <UserButton />
        <p className="text-xl font-medium text-gray-500">Profile</p>{" "}
      </div>
    </div>
  );
}

export default SideNav;
