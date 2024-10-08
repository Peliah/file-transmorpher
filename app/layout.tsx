import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./(landing)/_components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = localFont({
  src: [
    {
      path: "../public/Roboto_Mono/static/RobotoMono-Regular.ttf",
      weight: '400',
      style: 'normal'
    },
  ]
})
export const metadata: Metadata = {
  title: "File Transmorpher",
  description: `File Transmorpher a next level software that enables users to effortlessly convert 
  images, audio, video, and other file types, 
  enhancing productivity and streamlining workflows. 
  Whether converting documents for professional presentations, optimizing media files for online distribution, 
  or ensuring interoperability between software applications, 
  File Transmorpher provides reliable and efficient file conversion solutions tailored to diverse user needs.`,
  creator: `EPOUPA PELAYAH`,
  keywords: 'image converter, audio, video, unlimited image converter, unlimited audio converter',
  icons: { icon: './logoDark.png', apple: './logoLight.png' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="./logoDark.png" />
        <link rel="apple-touch-icon" href="./logoDark.png" />
        <meta name="theme-color" content="#000000" />
      </head> */}
      <body className={roboto.className}>
        <Navbar />
        <div className="">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
