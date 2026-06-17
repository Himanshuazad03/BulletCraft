import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Resume Bullet Generator | Turn Project Descriptions into ATS Achievements",
  description:
    "Generate professional resume bullet points, LinkedIn project summaries, and interview talking points in seconds using AI-optimized templates.",
  keywords: [
    "resume generator",
    "resume builder",
    "ATS resume bullets",
    "job application",
    "career achievements",
    "interview talking points",
  ],
  authors: [{ name: "Resume Bullet Generator Team" }],
  openGraph: {
    title: "Resume Bullet Generator | ATS-Optimized Achievements",
    description:
      "Generate professional, recruiter-ready resume bullet points in seconds.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Bullet Generator | ATS-Optimized Achievements",
    description:
      "Generate professional, recruiter-ready resume bullet points in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
