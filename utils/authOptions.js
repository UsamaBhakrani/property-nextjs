import connectDB from "@/config/db";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful signin
    async signIn({ account, profile }) {
      // Connect to Database
      await connectDB();
      // Check if User Exists
      const userExists = await User.findOne({ email: profile.email });
      // If not then add user to database
      if (!userExists) {
        // Truncate User name if Too long
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      // Return true to allow signin
      return true;
    },
    async session({ session, token }) {
      // Get User from database
      const user = User.findOne({ email: session.user.email });
      // Assign the user id to the session
      session.user.id = user._id.toString();
      // return session
      return { session};
    },
  },
};
