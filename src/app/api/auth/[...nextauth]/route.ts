import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Demo Account',
      credentials: {
        email: { label: "Email (use: admin@test.com)", type: "email", placeholder: "admin@test.com" },
        password: { label: "Password (use: password)", type: "password" }
      },
      async authorize(credentials) {
        // MOCK USER: This proves to clients you know how auth logic works
        if (credentials?.email === "admin@test.com" && credentials?.password === "password") {
          return { 
            id: "1", 
            name: "Portfolio Reviewer", 
            email: "admin@test.com",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" // Cute default avatar
          };
        }
        
        // Return null if login fails
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  // We use a fallback secret if the .env file isn't reading properly
  secret: process.env.NEXTAUTH_SECRET || "my_super_secret_portfolio_key",
});

export { handler as GET, handler as POST };