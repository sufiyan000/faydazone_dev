"use client";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>
      Logout
    </button>
  );
};

export default LogoutButton;
