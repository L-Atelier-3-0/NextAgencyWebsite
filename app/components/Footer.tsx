import Link from "next/link";
import React from "react";
import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="bg-black/95 flex text-textLight p-4 py-16 justify-center items-center">
      <div className="max-w-5xl w-full flex gap-4 justify-between text-sm">
        <ul className="flex flex-col">
          <Link
            className="hover:italic hover:underline"
            href="/mentions-legales"
          >
            Mentions légales
          </Link>
          <Link
            className="hover:italic hover:underline"
            href="/confidentialite"
          >
            Politique de confidentialité
          </Link>
          <Link className="hover:italic hover:underline" href="/cgv">
            Conditions générales de vente
          </Link>
        </ul>
        <ul className="flex flex-col"></ul>
        <ul className="flex flex-col">
          <div className="flex gap-2">
            <Link
              title="Github L'Atelier 3.0"
              href="https://github.com/L-Atelier-3-0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-skew-x-12 origin-bottom"
            >
              <TbBrandGithub className="text-2xl text-textLight" />
            </Link>
            <Link
              title="Instagram L'Atelier 3.0"
              href="https://www.instagram.com/latelier3.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-skew-x-12 origin-bottom"
            >
              <TbBrandInstagram className="text-2xl text-textLight" />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
