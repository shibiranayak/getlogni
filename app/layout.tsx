import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Logni — Build. Scale. Simplify.", description:"Cloud architecture, enterprise infrastructure, automation and digital solutions designed for security, resilience and scale.", metadataBase:new URL("https://getlogni.com") };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}