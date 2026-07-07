import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klinik Terdekat | Cari Klinik, Apotek, Dokter Jaga 24 Jam",
  description:
    "Cari klinik terdekat, apotek 24 jam, dokter jaga online, antar obat, tebus resep, dan ambulans online di kota Anda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
