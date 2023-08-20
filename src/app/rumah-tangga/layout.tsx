import { redirect } from "next/navigation";
import { getPageSession } from "~/server/auth/lucia";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getPageSession();
  if (!session) {
    redirect("/sign-in");
  }
  return <>{children}</>;
}
