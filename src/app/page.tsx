import Image from "next/image";
import { redirect } from "next/navigation";
import { getPageSession } from "~/auth/lucia";

export default async function Home() {
  const session = await getPageSession();
  if (!session) redirect("/sign-in");
  return <main>test</main>;
}
