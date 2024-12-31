import Navigationbar from "@/components/core/Navigationbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Achari - Best Arabic Poetry Chat Bot",
  description:
    "Your AI-powered Arabic poetry tutor. Achari helps you understand, appreciate, and even write your own poems",
  icons: {
    icon: "/acharilogo.png",
  },
  openGraph: {
    title: "Achari",
    description:
      "Your AI-powered Arabic poetry tutor. Achari helps you understand, appreciate, and even write your own poems",
    locale: "en_DZ",
    type: "website",
    url: "https://achari-tau.vercel.app/",
    images: [
      {
        url: "/ACHRITHUMBNAIL.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased font-Manrope`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigationbar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
