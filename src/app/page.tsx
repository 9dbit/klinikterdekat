import { cities } from "@/data/cities";
import { services } from "@/data/services";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6280000000000";
const whatsappText = encodeURIComponent("Halo KlinikTerdekat, saya butuh bantuan layanan kesehatan terdekat.");
const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + whatsappText;

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Klinik Terdekat",
    url: "https://klinikterdekat.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://klinikterdekat.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section style={{ padding: "72px 24px 52px", background: "linear-gradient(135deg, #ecfdf5, #ffffff 50%, #e0f2fe)", borderBottom: "1px solid #dfeae7" }}>
        <div style={{ width: "min(1120px, 100%)", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", padding: "8px 12px", borderRadius: 999, background: "#e8f8f2", color: "#047857", fontWeight: 800, fontSize: 14 }}>
            Layanan kesehatan lokal Indonesia
          </div>
          <h1 style={{ margin: "18px 0 16px", fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.06em" }}>
            Cari Klinik, Apotek, Dokter Jaga, dan Antar Obat Terdekat.
          </h1>
          <p style={{ maxWidth: 780, color: "#5b6f6a", fontSize: 19, lineHeight: 1.7 }}>
            KlinikTerdekat membantu pengguna menemukan layanan kesehatan terdekat berdasarkan kota, kebutuhan darurat ringan, apotek 24 jam, tebus resep online, dokter jaga, ambulans, dan pengantaran obat.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a href={whatsappUrl} style={{ padding: "14px 18px", borderRadius: 14, background: "#059669", color: "white", fontWeight: 900, textDecoration: "none" }}>
              Hubungi via WhatsApp
            </a>
            <a href="#layanan" style={{ padding: "14px 18px", borderRadius: 14, background: "white", border: "1px solid #dfeae7", color: "#10201d", fontWeight: 900, textDecoration: "none" }}>
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      <section id="layanan" style={{ padding: "52px 24px" }}>
        <div style={{ width: "min(1120px, 100%)", margin: "0 auto" }}>
          <p style={{ color: "#047857", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 900 }}>Layanan utama</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.04em", margin: "0 0 16px" }}>Intent pencarian yang siap dikembangkan untuk SEO.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 24 }}>
            {services.map((service) => (
              <a key={service.slug} href={`/layanan/${service.slug}`} style={{ display: "block", background: "white", border: "1px solid #dfeae7", borderRadius: 22, padding: 22, boxShadow: "0 18px 48px rgba(16, 32, 29, 0.06)", textDecoration: "none" }}>
                <h3 style={{ margin: "0 0 10px" }}>{service.name}</h3>
                <p style={{ color: "#5b6f6a", lineHeight: 1.7, margin: 0 }}>{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "52px 24px", background: "white", borderTop: "1px solid #dfeae7", borderBottom: "1px solid #dfeae7" }}>
        <div style={{ width: "min(1120px, 100%)", margin: "0 auto" }}>
          <p style={{ color: "#047857", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 900 }}>Coverage kota</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.04em", margin: "0 0 16px" }}>Mulai dari kota besar, lalu scale ke kabupaten dan kecamatan.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 24 }}>
            {cities.map((city) => (
              <a key={city.slug} href={`/kota/${city.slug}`} style={{ display: "block", background: "#f7fbfa", border: "1px solid #dfeae7", borderRadius: 18, padding: 18, textDecoration: "none" }}>
                <strong>{city.name}</strong>
                <p style={{ color: "#5b6f6a", margin: "8px 0 0", lineHeight: 1.6 }}>{city.province}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "52px 24px" }}>
        <div style={{ width: "min(1120px, 100%)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          <div style={{ background: "white", border: "1px solid #dfeae7", borderRadius: 22, padding: 24 }}>
            <h2 style={{ marginTop: 0 }}>Untuk kondisi gawat darurat</h2>
            <p style={{ color: "#5b6f6a", lineHeight: 1.7 }}>
              Jika ada nyeri dada berat, sesak napas berat, pingsan, perdarahan hebat, stroke, kecelakaan, atau kondisi yang mengancam nyawa, segera hubungi nomor darurat setempat atau datang ke IGD terdekat.
            </p>
          </div>
          <div style={{ background: "#10201d", color: "white", borderRadius: 22, padding: 24 }}>
            <h2 style={{ marginTop: 0 }}>Roadmap platform</h2>
            <ul style={{ lineHeight: 1.9, color: "#d1fae5" }}>
              <li>Programmatic SEO per kota dan layanan</li>
              <li>AI content engine untuk topik kesehatan lokal</li>
              <li>Directory apotek, klinik, dokter, dan ambulans</li>
              <li>Upload resep dan WhatsApp conversion flow</li>
            </ul>
          </div>
        </div>
      </section>

      <footer style={{ padding: "36px 24px", background: "white", borderTop: "1px solid #dfeae7", color: "#5b6f6a" }}>
        <div style={{ width: "min(1120px, 100%)", margin: "0 auto" }}>
          <strong style={{ color: "#10201d" }}>KlinikTerdekat</strong>
          <p>Platform pencarian layanan kesehatan lokal. Informasi awal, bukan pengganti diagnosis dokter.</p>
        </div>
      </footer>
    </main>
  );
}
