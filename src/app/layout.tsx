import type { Metadata } from "next";
import "@/utils/styles/index.css";
import StyledComponentsRegistry from "@/utils/lib/registry";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import { Montserrat } from "next/font/google";
import LayoutWrapper from "./layoutComponents/layoutWrapper";

const TDNS_DESC =
  "We believe in the boundless potential of young minds. We're on a mission to provide them with the tools, mentorship, and opportunities they need to turn their dreams into reality.";

export const metadata: Metadata = {
  title: "The Deen Networking Summit | Home",
  description: TDNS_DESC,
  metadataBase: new URL("https://tdns.org"),
  keywords: [
    "youth",
    "foundation",
    "growth",
    "ngo",
    "nigeria",
    "personal development",
    "community",
  ],
  category: "islam, personal development",
  openGraph: {
    title: "The Deen Networking Summit",
    description: TDNS_DESC,
    url: "https://tdns.org",
    siteName: "The Deen Networking Summit",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 768,
        height: 768,
        alt: "The Deen Networking Summit-icon",
      },
    ],
  },
};

const sans = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <LayoutWrapper>{children}</LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
