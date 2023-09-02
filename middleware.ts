import { withAuth } from "next-auth/middleware";

export default withAuth({
 secret: process.env.NEXTAUTH_URL,
 pages: {
  // signIn: '/auth/signin',
 }
});  

export const config = {
  matcher: ["/studio"],
};

