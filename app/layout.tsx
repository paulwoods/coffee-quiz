import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import "./globals.css";

const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Coffee Personality Quiz",
    description: "Discover your perfect coffee based on your personality",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${nunito.variable} font-sans antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
