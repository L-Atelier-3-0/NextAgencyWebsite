import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "./Buttons/ButtonPrimary";
import SignoutButton from "./Buttons/SignoutButton";

export default async function Header() {
  const session = await getServerSession();

  return (
    <div className="py-4 fixed w-full backdrop-blur-lg bg-white/5 h-20 z-50">
      <nav className="m-auto flex items-center justify-between px-3 max-w-7xl">
        <Link className="hover:italic hover:underline flex" href={"/"} title="Accueil">
          <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
        </Link>
        <div className="flex gap-4 items-center">
          <Link className="hover:italic hover:underline" href={"/#services"} title="Services">
            Services
          </Link>
          <Link className="hover:italic hover:underline" href={"/#team"} title="L'équipe">
            L'équipe
          </Link>
          <Link className="hover:italic hover:underline" href={"/#services"} title="Services">
            Réalisations
          </Link>
          <Link className="hover:italic hover:underline" href={"/blog"} title="Blog">
            Blog
          </Link>
          <ButtonPrimary>
            <Link className="hover:italic hover:underline" href={"mailto:latelierduweb30@gmail.com"} title="Contact">
              Contact
            </Link>
          </ButtonPrimary>
          {session && (
            <>
              <ButtonPrimary>
                <Link className="hover:italic hover:underline" href={"/studio"} title="Studio">
                  Studio
                </Link>
              </ButtonPrimary>
              <SignoutButton />
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
