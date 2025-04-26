import React from "react";
import { verifySession } from "@/lib/dal";
export default async function Test() {
  const { isAuth, userData } = await verifySession();
  return <div>{JSON.stringify(userData)}</div>;
}
