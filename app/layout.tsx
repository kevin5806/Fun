import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "fun",
    description: "fun",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="size-full" lang="en">
            <body className="size-full bg-black">{children}</body>
        </html>
    );
}
