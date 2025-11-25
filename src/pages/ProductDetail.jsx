import { useEffect } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80";

const specs = [
  { label: "Brix", value: "70 ± 1º" },
  { label: "pH", value: "3.5 ± 0.2" },
  { label: "Rəng", value: "Qızılı tünd" },
  { label: "Qablaşdırma", value: "Aseptik bag-in-drum (250 kg)" },
  { label: "Saxlama şəraiti", value: "+4ºC-də, quru və sərin yerdə" },
  { label: "Raf ömrü", value: "12 ay" },
];

const usageAreas = [
  {
    title: "Meyvə şirələri və içkilər",
    description:
      "Frutena alma konsentratı, təbii dad və rəng keyfiyyətini qoruyaraq müxtəlif meyvə şirələrinin əsas tərkib hissəsi kimi istifadə olunur. İçkilərə balanslı şirinlik və təbii meyvə aroması qatır.",
    image: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1763920839/Rectangle_60_iljd8t.png",
  },
  {
    title: "Qənnadı və desert məhsulları",
    description:
      "Təmiz və sabit quruluşa malik alma konsentratı desertlərdə, piroqlarda və jellilərdə həm rəng, həm də təbii dad təmin edir. Süni ətirləndiricilərə alternativ kimi daha sağlam seçimdir.",
    image: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1763920840/Rectangle_60_1_ggtgc7.png",
  },
  {
    title: "Uşaq qidaları və yoqurtlar",
    description:
      "Frutena konsentratı təbii və vitaminlə zəngin tərkibi ilə uşaq qidaları üçün ideal həlldir. Həm qida dəyərini artırır, həm də dad baxımından məhsulu daha cəlbedici edir.",
    image: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1763920840/Rectangle_60_2_zuvwyl.png",
  },
  {
    title: "Sirkə istehsalı",
    description: "Konsentrat, sirkə istehsalında təbii şəkər və turşuluq balansını təmin edir. Məhsulun fermentasiya prosesini sabitləşdirir və son nəticədə keyfiyyətli dad verir.",
    image: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1763920840/Rectangle_60_3_lu7mqc.png",
  },
  {
    title: "Qida sənayesinin digər sahələri",
    description:
      "Alma konsentratı dondurma, sous, cem və enerji barları kimi müxtəlif qida məhsullarında təbii şirinləşdirici və dadlaşdırıcı kimi geniş istifadə olunur.",
    image: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1763920840/Rectangle_60_4_bvthsd.png",
  },
];

export default function ProductDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white">
      <section className=" py-12 space-y-6">
        <header className="text-center space-y-4 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#021D49]">
            Frutena Alma Konsentratı
          </h1>
          <p className="text-[#021D49] text-base md:text-lg max-w-3xl mx-auto">
            Seçilmiş Quba almalarından istehsal olunan Frutena alma konsentratı tərkibində əlavə şəkər
            və süni qatqılar olmadan hazırlanır.
          </p>
        </header>

        <div className="relative w-full px-0">
          <img
            src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1763811942/Rectangle_11_kjhi3k.png"
            alt="Frutena Farm"
            className="w-full h-auto object-cover"
          />
          
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <p>
            Quba bölgəsinin münbit torpaqlarında yetişən təzə almaların sıxılması, süzülməsi və yüksək texnologiya ilə
            emal olunması nəticəsində əldə olunur. İstehsal prosesi tam avtomatlaşdırılmış və beynəlxalq qida
            təhlükəsizliyi standartlarına uyğun şəkildə həyata keçirilir. Məhsulun əsas üstünlüyü onun təbii dadının,
            rənginin və qida dəyərlərinin qorunmasıdır.
          </p>
          <p>
            Frutena konsentratı həm yerli, həm də ixrac yönümlü istehsal üçün uyğundur və içki, çınnadi, dondurma və digər
            qida sənayesi sahələrində geniş istifadə olunur.
          </p>
        </div>

        <section className="space-y-4 px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <h2 className="text-2xl font-semibold text-[#021D49]">Texniki göstəricilər</h2>
          <ul className="space-y-2 text-gray-700 text-base">
            {specs.map((spec) => (
              <li key={spec.label} className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="font-semibold text-[#021D49] w-48">{spec.label}:</span>
                <span>{spec.value}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <h2 className="text-[40px] py-10 font-semibold text-[#021D49]">İstifadə sahələri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usageAreas.map((area) => (
              <article key={area.title} className="relative rounded-[24px] overflow-hidden shadow-md h-[320px]">
                <img src={area.image} alt={area.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021D49]/90 via-[#021D49]/40 to-transparent" />
                <div className="relative z-10 lg:p-16 p-6 text-white space-y-2">
                  <h3 className="text-[22px] font-semibold">{area.title}</h3>
                  <p className="text-[16px] leading-relaxed">{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

