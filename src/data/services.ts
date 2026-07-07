export type Service = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  intent: string;
};

export const services: Service[] = [
  {
    slug: "klinik-terdekat",
    name: "Klinik Terdekat",
    shortName: "Klinik",
    description: "Temukan klinik terdekat untuk pemeriksaan awal, keluhan umum, dan kebutuhan kesehatan keluarga.",
    intent: "mencari klinik yang dekat, jelas lokasinya, dan mudah dihubungi",
  },
  {
    slug: "apotek-terdekat",
    name: "Apotek Terdekat",
    shortName: "Apotek",
    description: "Cari apotek terdekat untuk kebutuhan obat umum, vitamin, alat kesehatan, dan konsultasi apoteker.",
    intent: "mencari apotek paling dekat dari lokasi pengguna",
  },
  {
    slug: "apotek-24-jam",
    name: "Apotek 24 Jam",
    shortName: "Apotek 24 Jam",
    description: "Info apotek 24 jam untuk kebutuhan obat mendesak pada malam hari, akhir pekan, dan hari libur.",
    intent: "mencari apotek yang buka malam atau 24 jam",
  },
  {
    slug: "dokter-jaga-online",
    name: "Dokter Jaga Online",
    shortName: "Dokter Online",
    description: "Akses bantuan dokter jaga online untuk arahan awal sebelum datang ke klinik, rumah sakit, atau apotek.",
    intent: "mencari dokter yang bisa dihubungi cepat secara online",
  },
  {
    slug: "antar-obat",
    name: "Antar Obat",
    shortName: "Antar Obat",
    description: "Layanan bantu antar obat dari apotek partner ke alamat pengguna sesuai ketersediaan area.",
    intent: "mencari obat yang bisa dikirim ke rumah",
  },
  {
    slug: "tebus-resep-online",
    name: "Tebus Resep Online",
    shortName: "Tebus Resep",
    description: "Upload resep dokter dan dapatkan bantuan pengecekan ketersediaan obat di apotek partner.",
    intent: "menebus resep tanpa harus keliling apotek",
  },
  {
    slug: "ambulans-online",
    name: "Ambulans Online",
    shortName: "Ambulans",
    description: "Informasi awal untuk mencari kontak ambulans dan bantuan darurat medis sesuai area layanan.",
    intent: "mencari ambulans atau bantuan darurat terdekat",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
