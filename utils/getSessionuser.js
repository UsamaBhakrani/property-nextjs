import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export const getSessionUser = async () => {
  const session = await getServerSession(authOptions);
  try {
    if (!session || !session.user) {
      return null;
    }
    return {
      user: session.user,
      userId: session.user.id,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
