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
    const data = await axios.post(
      "https://auth-with-discord-backend.vercel.app/api/v1/discord/grant-role",
      { userId: session.userId }
    );

    window.alert(`Your role is:- ${data.data.data[0]}`);
    console.log({ data: data.data.data[0] });
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
