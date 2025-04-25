"use server";
import prisma from "@/lib/prisma";
import { wait } from "@/lib/utils";

export const deleteUser = async (userId: string) => {
  await wait(1000);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  if (!user) {
    throw new Error("User not found");
  }
  const res = await prisma.user.delete({
    where: { id: userId },
  });
  return {
    success: true,
    data: res,
    message: "User deleted successfully",
  };
};

export const deleteBulkUsers = async (ids: string[]) => {
  await wait(1000);
  console.log("userId", ids);
  const user = await prisma.user.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  if (!user) {
    throw new Error("Users not found");
  }

  const res = await prisma.user.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  return {
    success: true,
    data: res,
    message: "User deleted successfully",
  };
};
