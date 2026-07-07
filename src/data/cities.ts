export type City = {
  slug: string;
  name: string;
  province: string;
  headlineArea: string;
};

export const cities: City[] = [
  { slug: "jakarta", name: "Jakarta", province: "DKI Jakarta", headlineArea: "Jakarta Pusat, Jakarta Selatan, Jakarta Barat, Jakarta Timur, dan Jakarta Utara" },
  { slug: "bandung", name: "Bandung", province: "Jawa Barat", headlineArea: "Dago, Setiabudi, Buahbatu, Antapani, dan sekitarnya" },
  { slug: "surabaya", name: "Surabaya", province: "Jawa Timur", headlineArea: "Surabaya Pusat, Barat, Timur, Utara, dan Selatan" },
  { slug: "medan", name: "Medan", province: "Sumatera Utara", headlineArea: "Medan Kota, Medan Baru, Medan Petisah, dan sekitarnya" },
  { slug: "bekasi", name: "Bekasi", province: "Jawa Barat", headlineArea: "Bekasi Barat, Bekasi Timur, Bekasi Selatan, dan Bekasi Utara" },
  { slug: "depok", name: "Depok", province: "Jawa Barat", headlineArea: "Margonda, Beji, Cinere, Sawangan, dan sekitarnya" },
  { slug: "tangerang", name: "Tangerang", province: "Banten", headlineArea: "Tangerang Kota, BSD, Alam Sutera, Karawaci, dan sekitarnya" },
  { slug: "semarang", name: "Semarang", province: "Jawa Tengah", headlineArea: "Semarang Tengah, Banyumanik, Tembalang, dan sekitarnya" },
  { slug: "yogyakarta", name: "Yogyakarta", province: "DI Yogyakarta", headlineArea: "Gondokusuman, Kotagede, Umbulharjo, Sleman, dan Bantul" },
  { slug: "denpasar", name: "Denpasar", province: "Bali", headlineArea: "Denpasar Barat, Timur, Selatan, Utara, dan sekitarnya" },
];

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}
