import "~/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import Navigation from "./navigation";
import { getPageSession } from "~/server/auth/lucia";
import Providers from "./providers";
import { redirect } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SDG Gumiwang Lor",
  description: "Website SDG Desa Gumiwang Lor",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  // manifest: '/site.webmanifest',
  referrer: "no-referrer",
  themeColor: "#ffffff",
};
import { usePathname } from "next/navigation";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getPageSession();
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation session={session} />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
