import { UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";

import React from "react";

function DashboardHeader() {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center ">
      <div className=" md:w-80 lg:w-96">
        <Input
          type="text"
          class="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
          placeholder="🔍  Search"
        />
      </div>
      <div className="size">
        <UserButton showName="true" />
      </div>
    </div>
  );
}

export default DashboardHeader;
