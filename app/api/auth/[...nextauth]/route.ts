import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import {backend_url} from "../../../lib/const"

export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "username .. ",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          if (!credentials?.username || !credentials?.password) return null;
          const { username, password } = credentials;
          const res = await fetch( backend_url + "/login", {
            method: "POST",
            body: JSON.stringify({
              username,
              password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status == 401) {
            console.log(res.statusText);
  
            return null;
          }
          const response = await res.json();
          console.log(response.user,'',response.token)
          return response;
        },
      }),
    ],

    // callbacks: {
    //     async session({ response }: { response: any }) {
    //       const { user, token } = response; // Destructure the response object
      
    //       // Set the user and token properties in the session
    //       return {
    //         ...response, // Copy existing properties from the response
    //         user,
    //         token,
    //       };
    //     },
    //   },
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };