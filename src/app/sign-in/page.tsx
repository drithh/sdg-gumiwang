import { getPageSession } from "~/auth/lucia";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
  const session = await getPageSession();
  if (session) redirect("/");
  return (
    <div className="flex h-screen ">
      <div className="hidden h-full flex-1 flex-col place-content-between bg-accent px-14 py-12 md:flex">
        <Link href="/" className=" flex items-center gap-2">
          <div className="relative h-9 w-9 sm:h-12 sm:w-12">
            <Image
              src="/images/logo.png"
              fill
              sizes="100%"
              alt="logo desa gumiwang lor"
            ></Image>
          </div>
          <div className="flex flex-1 flex-col px-4 py-6">
            <h2 className="text-justify text-base font-bold text-foreground sm:text-lg ">
              Gumiwang Lor
            </h2>
            <p className=" text-justify text-xs text-muted-foreground sm:text-sm ">
              Wonogiri
            </p>
          </div>
        </Link>
        <div className="">
          <h1 className=" text-justify text-2xl font-medium text-foreground">
            &quot;Aplikasi website yang berfokus pada Program Pembangunan
            Berkelanjutan (SDG) Desa Gumiwang Lor Kecamatan Wuryantoro&quot;
          </h1>
        </div>
      </div>

      <div className="flex h-full flex-1 flex-col place-content-center place-items-center gap-4 px-14 py-12">
        <div className="mb-12 flex flex-col place-content-center place-items-center gap-2 md:hidden">
          <h1 className=" text-center text-2xl font-semibold text-foreground">
            SDG Desa Gumiwang Lor Kecamatan Wuryantoro
          </h1>
        </div>
        <div className="flex flex-col place-content-center place-items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">Masuk</h1>
          <p className="text-sm text-muted-foreground">
            Masuk menggunakan akun google
          </p>
        </div>
        <Button variant="outline" type="button" className="w-64">
          <Link href="/sign-in/google" className="flex items-center gap-2">
            <svg
              className="mr-2 h-4 w-4 fill-current text-muted-foreground"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google</title>
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            Google
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
