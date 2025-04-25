import { UserDataTable } from "@/components/user-data-table";
import { SiteHeader } from "@/components/site-header";
import prisma from "@/lib/prisma";
import React from "react";

async function UsersList() {
  const users = await prisma.user.findMany();
  return (
    <>
      <SiteHeader title="User Management" />
      <div className="flex flex-col flex-1 gap-4 px-2 py-4">
        <UserDataTable data={users} />
      </div>
    </>
  );
}

export default UsersList;
