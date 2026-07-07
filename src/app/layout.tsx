import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://klinikterdekat.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Klinik Terdekat | Klinik, Apotek, Dokter Jaga & Antar Obat",
    template: "%s | Klinik Terdekat",
  },
  description:
    "Cari klinik terdekat, apotek 24 jam, dokter jaga online, antar obat, tebus resep, dan ambulans online di kota Anda.",
  keywords: [
    "klinik terdekat",
    "apotek terdekat",
    "apotek 24 jam",
    "dokter jaga online",
    "antar obat",
    "tebus resep online",
    "ambulans online",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Klinik Terdekat",
    description:
      "Platform pencarian layanan kesehatan lokal untuk klinik, apotek, dokter jaga, ambulans, dan antar obat terdekat.",
    url: siteUrl,
    siteName: "Klinik Terdekat",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body style={{ margin: 0, background: "#f7fbfa", color: "#10201d", fontFamily: "Arial, Helvetica, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
