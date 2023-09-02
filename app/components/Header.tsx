import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonPrimary from "./Buttons/ButtonPrimary";
import { getServerSession } from "next-auth";

export default async function Header() {
  const session = await getServerSession();

  return (
    <div className="py-4 fixed w-full backdrop-blur-lg bg-white/5 h-20 z-50">
      <nav className="m-auto flex items-center justify-between px-3 max-w-7xl">
        <Link href={"/"} title="Accueil" className="flex">
          <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
        </Link>
        <div className="flex gap-4 items-center">
          <Link href={"/#services"} title="Services">
            Services
          </Link>
          <Link href={"/#services"} title="Services">
            A propos
          </Link>
          <Link href={"/blog"} title="Blog">
            Blog
          </Link>
          <Link href={"/#services"} title="Services">
            Réalisations
          </Link>
          <ButtonPrimary>
            <Link href={"/#services"} title="Services">
              Contact
            </Link>
          </ButtonPrimary>
          {session && (
            <>
              <ButtonPrimary>
                <Link href={"/studio"} title="Studio">
                  Studio
                </Link>
              </ButtonPrimary>
              <Link href={"/api/auth/signout"} title="Déconnexion">
                Déconnexion
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
