/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import Button from "./Button";
import { signIn, signOut } from "next-auth/react";
import axios from "axios";

export default function HandleLogin({ session }: any) {
  useEffect(() => {
    session?.userId && handleTest();
  }, [session]);

  const handleTest = async () => {
    try {
      const data = await axios.post(
        " https://auth-with-discord-backend-codewithshamim.vercel.app/api/v1/discord/grant-role",
        { userId: session.userId, roleId: process.env.NEXT_PUBLIC_ROLE_ID }
      );

      console.log({ data: data.data });
      window.alert(data.data.message);
    } catch (error: any) {
      console.log({ error: error?.response });
      window.alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      {!session ? (
        <Button onClick={() => signIn("discord")}>Login with discord</Button>
      ) : (
        <Button onClick={() => signOut()}>Sign Out</Button>
      )}
    </div>
  );
}
