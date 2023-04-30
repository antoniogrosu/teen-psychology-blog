import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

async function getUsersWithAdminRole() {
  const res = await fetch(
    "https://blog-d9dcf-default-rtdb.europe-west1.firebasedatabase.app/data/admins.json"
  );
  const data = await res.json();
  console.log(data);
  const admins = Object.values(data).map((admin) => admin.email);
  return admins;
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
});
