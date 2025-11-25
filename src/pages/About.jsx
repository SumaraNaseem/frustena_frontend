import { Link } from "react-router-dom";
import { useEffect } from "react";
import FruitFectory from "../assets/FruitFectory.jpg";
import BackgroundIcon1 from "../assets/BackgroundIcon1.png";
import BackgroundIcon2 from "../assets/BackgroundIcon2.png";
import BackgroundIcon3 from "../assets/BackgroundIcon3.png";
import BackgroundIcon4 from "../assets/BackgroundIcon4.png";
import BackgroundIcon5 from "../assets/BackgroundIcon5.png";
import MisyonImg from "../assets/MisyonImg.jpg";
import VizyonImg from "../assets/VizyonImg.jpg";
import GroupSvg from "../assets/Group.svg";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";
import Group4 from "../assets/Group4.png";
import Member1 from "../assets/Member1.png";
import Member2 from "../assets/Member2.png";
import Member3 from "../assets/Member3.png";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";

const stats = [
  {
    number: "2500+",
    description: "Gündə emal olunan alma sayı",
  },
  {
    number: "12000 m²",
    description: "Ümumi istehsal sahəsi",
  },
  {
    number: "5",
    description: "Yaxın zamanda təqdim ediləcək yeni məhsul çeşidi",
  },
  {
    number: "100%",
    description: "Qatqısız, şəkərsiz, təbii məhsul",
  },
];

const valueSlider = [
  {
    title: "Keyfiyyət",
    image: Slider1,
    paragraph: "Hər bir məhsulumuzda təbiətin ən saf dadını qorumaq və beynəlxalq standartlara uyğun istehsal təmin etmək əsas prioritetimizdir. Keyfiyyət bizim üçün nəticə deyil, prosesin özüdür."
  },
  {
    title: "Etibar",
    image: Slider2,
    paragraph: "Hazırda yerli bazarda etibarlı tərəfdaşlıq əlaqələri quruq, eyni zamanda beynəlxalq bazarlara çıxış üçün aktiv hazırlıqlar aparırıq."
  },
  {
    title: "Davamlılıq",
    image: Slider3,
    paragraph: "Frutena alma konsentratının yüksək keyfiyyəti və mükafatlandırıcı müştəri əməkdaşlığı sayəsində bizimlə əməkdaşlıq münasibətimiz daimi və davamlıdır."
  },
  {
    title: "Davamlılıq",
    image: Slider3,
    paragraph: "Frutena alma konsentratının yüksək keyfiyyəti və mükafatlandırıcı müştəri əməkdaşlığı sayəsində bizimlə əməkdaşlıq münasibətimiz daimi və davamlıdır."
  },
  {
    title: "Davamlılıq",
    image: Slider3,
    paragraph: "Frutena alma konsentratının yüksək keyfiyyəti və mükafatlandırıcı müştəri əməkdaşlığı sayəsində bizimlə əməkdaşlıq münasibətimiz daimi və davamlıdır."
  },
];

const certificates = [
  {
    name: "First Quality Certification",
    logo: GroupSvg,
    pdfUrl: "#", // Add PDF URL here
  },
  { 
    name: "FSSC 22000", 
    logo: Group2,
    pdfUrl: "#", // Add PDF URL here
  },
  { 
    name: "Halal", 
    logo: Group3,
    pdfUrl: "#", // Add PDF URL here
  },
  { 
    name: "Kosher", 
    logo: Group4,
    pdfUrl: "#", // Add PDF URL here
  },
];

const teamMembers = [
  {
    name: "Kıvanç Yayıcı",
    role: "İdarəedici Tərəfdaş və Baş Direktor",
    image: Member1,
  },
  {
    name: "Vuqar Abbasov",
    role: "İdarəedici Tərəfdaş və Əməliyyat Direktoru",
    image: Member2,
  },
  {
    name: "Asim Ağaverdiyev",
    role: "Maliyyə rəhbəri",
    image: Member3,
  },
];

const differentiators = [
  {
    title: "Saxlama Sistemi",
    description: "İstehsaldan sonrakı keyfiyyəti qorumaq üçün müasir saxlama infrastrukturuna sahibik.",
    icon: BackgroundIcon1,
  },
  {
    title: "Qlobal Əhatə",
    description: "Hazırda yerli bazarda etibarlı tərəfdaşlıq əlaqələri qurur, eyni zamanda beynəlxalq bazarlara çıxış üçün aktiv hazırlıqlar aparırıq.",
    icon: BackgroundIcon2,
  },
  {
    title: "Planlaşdırma və Çatdırılma",
    description: "Yüksək koordinasiyalı logistika sistemimiz sayəsində sifarişdən çatdırılmaya qədər olan bütün mərhələlər effektiv şəkildə idarə olunur.",
    icon: BackgroundIcon3,
  },
  {
    title: "Keyfiyyətə Nəzarət",
    description: "Hər bir məhsul Frutena laboratoriyalarında çoxmərhələli testlərdən keçir.",
    icon: BackgroundIcon4,
  },
  {
    title: "Müştəri Əməkdaşlığı",
    description: "Bizimlə əməkdaşlıq yalnız məhsul alış-verişi deyil, qarşılıqlı inkişaf münasibətidir.",
    icon: BackgroundIcon5,
  },
];

const missionVision = [
  {
    title: "Misyon",
    description: "Yerli meyvə potensialını ən yüksək səviyyədə dəyərləndirərək, dünya standartlarına uyğun konsentrat məhsulları istehsal etmək.",
    image: MisyonImg,
  },
  {
    title: "Vizyon",
    description: "Qlobal bazarda Azərbaycan mənşəli keyfiyyətli meyvə məhsulları ilə tanınan etibarlı brend olmaq.",
    image: VizyonImg,
  },
];

const sectionHeaders = [
  {
    number: "01",
    label: "Haqqımızda",
    bgColor: "bg-gray-100",
  },
  {
    number: "02",
    label: "Frutena rəqəmlərlə",
    bgColor: "bg-gray-100",
  },
  {
    number: "03",
    label: "Frutena fərqi",
    bgColor: "bg-gray-200",
  },
  {
    number: "04",
    label: "Dəyərlərimiz",
    bgColor: "bg-gray-100",
  },
  {
    number: "04",
    label: "Sertifikatlar",
    bgColor: "bg-gray-200",
  },
  {
    number: "05",
    label: "Komandamız",
    bgColor: "bg-gray-200",
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 mt-8 sm:mt-12 md:mt-20">
        <div className="text-center space-y-4 sm:space-y-6 w-full max-w-[710px] mx-auto">
          <div className="inline-flex items-center bg-[#E9E9E9] rounded-3xl px-3 py-1 gap-2 font-['Poppins'] font-[400] text-base sm:text-lg md:text-[20px]">
            <span className="bg-white py-1 px-[10.5px] rounded-full text-xs sm:text-sm">01</span>
            <span className="text-black">Haqqımızda</span>
          </div>
          <h1 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] text-center text-[#021D49]">
            Təbiidən gələn keyfiyyət texnologiya ilə formalaşır.
          </h1>
          <p className="font-['Poppins'] font-medium text-base sm:text-lg md:text-[20px] leading-relaxed sm:leading-[28px] md:leading-[30px] tracking-[0.2px] text-center text-[#021D49] max-w-xl mx-auto px-4">
            Biz yerli bazarda təbii alma konsentratı istehsal edən yeni, amma
            təcrübəli komandayıq. Məqsədimiz, hər damlada keyfiyyət və etibar
            yaratmaqdır.
          </p>
        </div>
      </section>

      {/* Intro copy with image */}
      <section className="relative  mt-6 sm:mt-8 md:mt-10">
        <div className="absolute inset-0 lg:left-1/2 lg:-translate-x-1/2 top-[50%]  -translate-y-1/2 text-white z-10 text-sm sm:text-lg md:text-xl lg:text-[25px] text-center  max-w-5xl">
          Frutena olaraq məqsədimiz, meyvənin saf dadını gündəlik qidalanma və
          içki istehsal proseslərinə yüksək standartlarla çatdırmaqdır. İstehsal
          etdiyimiz alma konsentratı yerli və beynəlxalq içki, qida və şirniyyat
          sənayesində istifadə üçün ideal xammaldır. Məhsulumuzun hər damlası
          yüksək dərəcədə seçilmiş, sağlam və təbii almalaradan hazırlanır.
          İstehsal prosesimizdə şəkərsiz, qatqısız, rəngləndiricisiz və tamamilə
          təbiətin öz dadını qoruyan üsullardan istifadə edirik.
        </div>

        <div className="relative h-[400px] sm:h-[500px] md:h-[650px] lg:h-[760px] xl:h-[860px]">
          <img
            src={FruitFectory}
            alt="Fruit Fectory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 sm:py-10 md:py-12 relative">
        <div className="z-10 ">
          <div className="inline-flex items-center bg-gray-100 rounded-3xl px-3 py-1 mb-4 sm:mb-6 gap-2 font-['Poppins'] font-[400] text-base sm:text-lg md:text-[20px]">
            <span className="bg-white py-1 px-[6.5px] rounded-full text-xs sm:text-sm">02</span>
            <span className="text-black">Frutena rəqəmlərlə</span>
          </div>

          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 w-full max-w-[800px]">
            <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] text-[#021D49]">
              Təbiətin dəyərlərinin rəqəmlərlə ifadə edirik
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x-2 divide-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="pl-0 sm:pl-6 pt-4 sm:pt-0 first:pt-0">
                <div>
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-['Poppins'] font-bold leading-tight sm:leading-[70px] md:leading-[100px] tracking-[0px] text-[#021D49] block">
                    {stat.number}
                  </span>
                </div>
                <p className="text-base sm:text-lg md:text-[20px] font-medium font-['Poppins'] text-[#021D49] mt-2 sm:mt-4">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[#F5F3F2] py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32">
          <div className="inline-flex items-center bg-gray-200 rounded-3xl px-3 py-1 mb-4 sm:mb-6 gap-2 font-['Poppins'] font-[400] text-base sm:text-lg md:text-[20px]">
            <span className="bg-white py-1 px-[6.5px] rounded-full text-xs sm:text-sm">03</span>
            <span className="text-black">Frutena fərqi</span>
          </div>

          <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] mb-8 sm:mb-12 md:mb-16 lg:mb-24 text-[#021D49]">
            Meyvənin dəyərini qorumaq bizim işimizdir.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl">
                <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] p-2 bg-[#021D49] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-[22px] font-[600] font-['Poppins'] text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-[16px] font-[400] font-['Poppins'] text-gray-800">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
          {missionVision.map((item, index) => (
            <div key={index} className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[800px] xl:h-[950px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>

              <div className="absolute left-1/2 -translate-x-1/2 top-[42%] -translate-y-1/2 text-center w-[90%] sm:w-[450px] mx-auto px-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-[700] font-['Poppins'] text-white mb-4 sm:mb-6 md:mb-8">
                  {item.title}
                </h3>
                <p className="text-white tracking-[0.2px] text-sm sm:text-base md:text-lg lg:text-[18px] font-[400] font-['Poppins']">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values slider */}
      <section className="pl-4 sm:pl-6 md:pl-12 lg:pl-18 xl:pl-32 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 w-full max-w-[710px]">
          <div className="inline-flex items-center bg-gray-100 rounded-3xl px-3 py-1 mb-4 sm:mb-6 gap-2 font-['Poppins'] font-[400] text-base sm:text-lg md:text-[20px]">
            <span className="bg-white py-1 px-[6.5px] rounded-full text-xs sm:text-sm">04</span>
            <span className="text-black">Dəyərlərimiz</span>
          </div>
          <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] mb-8 sm:mb-12 md:mb-16 lg:mb-24 text-[#021D49]">
            Təbiətdən gələn dəyərlər, texnologiya ilə qorunur.
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {valueSlider.map((item) => (
            <div key={item.title} className="relative flex-shrink-0 group cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-[20px] overflow-hidden w-[280px] sm:w-[400px] md:w-[550px] lg:w-[650px] xl:w-[710px] h-[200px] sm:h-[280px] md:h-[360px] lg:h-[400px] xl:h-[445px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021D49]/100 via-[#021D49]/50 to-transparent rounded-[20px]" />
              <div className="absolute inset-0 left-4 sm:left-8 md:left-12 top-12 sm:top-16 md:top-20 overflow-hidden">
                <p className="text-white text-lg sm:text-xl font-semibold">{item.title}</p>
                <div className="mt-6 overflow-hidden max-w-[500px]">
                  <p className="text-white text-sm sm:text-base md:text-[16px] font-[400] font-['Poppins'] transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                   {item.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="bg-[#F7F5F3] py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 w-full max-w-[710px]">
            <div className="inline-flex items-center bg-gray-200 rounded-3xl px-3 py-1 mb-4 sm:mb-6 gap-2 font-['Poppins'] font-[400] text-base sm:text-lg md:text-[20px]">
              <span className="bg-white py-1 px-[6.5px] rounded-full text-xs sm:text-sm">04</span>
              <span className="text-gray-600">Sertifikatlar</span>
            </div>
            <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] text-[#021D49]">
              Sözümüzü sənədlər, nəticəmizi işimiz təsdiqləyir.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificates.map((certificate) => (
              <article
                key={certificate.name}
                className="bg-white rounded-[10px] py-6 sm:py-8 md:py-10 text-center shadow-sm space-y-8 sm:space-y-12 md:space-y-16"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={certificate.logo}
                    alt={certificate.name}
                    className="object-contain h-[60px] sm:h-[70px] md:h-[80px] w-[120px] sm:w-[135px] md:w-[150px]"
                  />
                </div>

                <div className="text-[#021D49] font-[500] font-['Poppins'] text-sm sm:text-base md:text-[16px] text-center">
                  <p>{certificate.name}</p>
                </div>

                <div className="text-sm sm:text-base md:text-[16px] font-[600] font-['Poppins'] text-[#021D49] underline">
                  <a 
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-[#FF9F19] transition-colors"
                  >
                    baxın
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 w-full max-w-[710px]">
          <div className="inline-flex items-center bg-gray-200 rounded-3xl px-3 py-1 mb-4 sm:mb-6 gap-2 font-['Poppins'] font-[400] text-base sm:text-lg md:text-[20px]">
            <span className="bg-white py-1 px-[6.5px] rounded-full text-xs sm:text-sm">05</span>
            <span className="text-black">Komandamız</span>
          </div>
          <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] mb-8 sm:mb-12 md:mb-16 lg:mb-24 text-[#021D49]">
            Təcrübə və məsuliyyətlə idarə olunan istehsal prosesi
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="bg-white overflow-hidden"
            >
              <div className="h-[362px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[615px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="py-4 sm:py-6 space-y-2">
                <p className="text-xl sm:text-2xl md:text-[25px] font-bold font-['Poppins'] text-[#021D49]">
                  {member.name}
                </p>
                <p className="text-[#021D49] text-sm sm:text-base md:text-[16px] font-[400] font-['Poppins']">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
