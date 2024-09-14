import type { Metadata } from "next";
import "@/styles/globals.css";
import { notoSansKr } from "@/assets/fonts/font";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const metadata: Metadata = {
  title: "Countries",
  description: "나라 리스트 정보 모음",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <ToastContainer position="top-left" autoClose={1000} />
        {children}
      </body>
    </html>
  );
}
