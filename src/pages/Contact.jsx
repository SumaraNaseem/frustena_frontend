import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import tittle from "../assets/tittle.png";

const faqItems = [
  {
    id: 1,
    question: "Frutena hazırda hansı məhsulları istehsal edir?",
    answer: "Frutena müxtəlif meyvə püreləri, konsentratları və təbii meyvə məhsulları istehsal edir.",
  },
  {
    id: 2,
    question: "Məhsullar hansı standartlara uyğundur?",
    answer: "Bütün məhsullarımız beynəlxalq qida təhlükəsizliyi standartlarına və ISO sertifikatlarına uyğundur.",
  },
  {
    id: 3,
    question: "Xammalı haradan əldə edirsiniz?",
    answer: "Xammalımızı Azərbaycanın müxtəlif bölgələrindəki yerli bağlardan əldə edirik.",
  },
  {
    id: 4,
    question: "Məhsul ixrac olunurmu?",
    answer: "Bəli, məhsullarımız müxtəlif ölkələrə ixrac olunur.",
  },
];

const contactInfo = [
  { label: "Ünvan:", value: "Quba rayonu" },
  { label: "Telefon:", value: "+994 (23) 389-9000" },
  { label: "Mobil:", value: "+994 (55) 311-3021" },
  { label: "E-mail:", value: "info@frutena.com" },
];

const mapButtons = [
  { name: "Google Xəritə", url: "#" },
  { name: "Waze Xəritə", url: "#" },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-gray-100 rounded-3xl mb-4 sm:mb-6 px-3 py-1 gap-2 font-['Poppins'] font-[400] text-sm sm:text-base md:text-lg lg:text-[20px]">
            <span className="bg-white py-1 px-[10.5px] rounded-full text-xs sm:text-sm">01</span>
            <span className="text-black">Bizimlə əlaqə</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-['Poppins'] font-semibold leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] text-center text-[#021D49]">
            Gəlin birlikdə dəyər yaradaq.
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-['Poppins'] font-medium leading-relaxed sm:leading-[28px] md:leading-[30px] tracking-[0.2px] w-full max-w-[608px] text-[#021D49] text-center mx-auto mt-4 sm:mt-6 px-4">
            İstehsal, distribusiya və tərəfdaşlıq imkanları barədə
            bizimlə əlaqə saxlayın. Sizin üçün
            ən uyğun həlli birlikdə tapaq.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative mb-8 sm:mb-12 md:mb-16">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1763819445/Rectangle_11_2_zcfipf.png"
            alt="Frutena Building"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[90%] xl:w-[1196px] mx-auto lg:mx-0 -mt-8 sm:-mt-12 md:-mt-16 lg:mt-0 bg-[#021D49] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <div className="mb-4 sm:mb-6">
                <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="border-t-2 border-white/30 mb-6 sm:mb-8"></div>

              <div className="space-y-3 sm:space-y-4 text-left">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="text-sm sm:text-base ">
                    <span className="text-white/70 mr-3 sm:mr-4">{contact.label}</span>
                    <span className="text-white ">{contact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Buttons */}
            <div className="h-auto sm:h-[160px] md:h-[180px] flex flex-col sm:flex-row gap-3">
              {mapButtons.map((button, index) => (
                <button
                  key={index}
                  className="flex-1 bg-[#0a2d5c] hover:bg-[#0d3a6f] text-white font-semibold text-sm sm:text-base px-4 pt-4 pb-3 rounded-xl relative transition-colors flex flex-col items-start min-h-[120px] sm:min-h-0"
                >
                  <span className="mt-1">{button.name}</span>
                  <div className="absolute bottom-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-52 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center bg-gray-100 rounded-3xl mb-4 sm:mb-6 px-3 py-1 gap-2 font-['Poppins'] font-[400] text-sm sm:text-base md:text-lg lg:text-[20px]">
            <span className="bg-white py-1 px-[10.5px] rounded-full text-xs sm:text-sm">02</span>
            <span className="text-gray-600">FAQ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-['Poppins'] font-semibold leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] text-center text-[#021D49]">
            Tez-tez verilən suallar
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-gray-50 transition-colors gap-4"
              >
                <span className="text-base sm:text-lg md:text-xl lg:text-[25px] font-semibold font-['Poppins'] text-[#021D49] flex-1 text-left">
                  {item.question}
                </span>

                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-[#021D49] flex-shrink-0 transition-transform duration-200 ${
                    openFaq === item.id ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
              {openFaq === item.id && (
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-[#021D49] text-sm sm:text-base md:text-lg lg:text-[20px] font-[500] font-['Poppins'] leading-relaxed sm:leading-[28px] md:leading-[30px] tracking-[0.2px] [word-spacing:0.2em]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
