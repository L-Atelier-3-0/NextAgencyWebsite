import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "id/password",
      credentials: {
        username: {
          label: "Identifiant",
          type: "text",
        },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
        
        if(!(credentials?.username === process.env.ADMIN_USERNAME && credentials?.password === process.env.ADMIN_PASSWORD)) return null;
        return { id: "1", name: "Administrateur" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // signOut: "/auth/signout",
  }
};
