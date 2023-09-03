"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { TbLogout } from "react-icons/tb";

export default function SignoutButton() {

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    return await signOut({callbackUrl: '/'});
  }
  return (
    <Link onClick={handleClick} href={"/api/auth/signout"} title="Déconnexion">
      <TbLogout size={25} />
    </Link>
  );
}
