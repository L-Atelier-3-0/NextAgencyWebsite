"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function SignInForm() {
  const params = useSearchParams();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
   event.preventDefault();
   return await signIn("credentials", { username: username, password: password, callbackUrl: params.get("callbackUrl") ?? '/' });
 };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block font-bold mb-2 after:content-['*'] after:ml-1 after:text-red-500 after:font-bold"
          htmlFor="username"
        >
          Identifiant
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Identifiant"
          required
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(v => e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block font-bold mb-2 after:content-['*'] after:ml-1 after:text-red-500 after:font-bold"
          htmlFor="password"
        >
          Mot de passe
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Mot de passe"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(v => e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-primary hover:brightness-125 text-textLight w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Connexion
        </button>
      </div>
    </form>
  );
}
