import { SiteHeader } from "@/components/site-header";
import React from "react";

function UsersList() {
  return (
    <>
      <SiteHeader title="User Management" />
      <div className="flex flex-col justify-center items-center">Users</div>
    </>
  );
}

export default UsersList;
