import { Link } from "react-router-dom";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import instagramIcon from "../assets/instagram.png";
import youtubeIcon from "../assets/youtube.png";
import linkedinIcon from "../assets/LinkdinVector.png";

const socialLinks = [
  { id: "youtube", image: youtubeIcon },
  { id: "facebook", image: facebookIcon },
  { id: "twitter", image: twitterIcon },
  { id: "instagram", image: instagramIcon },
  { id: "linkedin", image: linkedinIcon },
];

const contactInfo = [
  { label: "Ünvan:", value: "Quba rayonu" },
  { label: "Tel:", value: "+994 (23) 889-9000" },
  { label: "Mobil:", value: "+994 (55) 311-3021" },
];

export default function Footer() {
  return (
    <footer>
      {/* Hero CTA Section */}
      <div className="relative">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[871px]">
          <img
            src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1763728142/bg_img_y3xjyq.png"
            alt="Frutena Bağları"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 left-1/2 -translate-x-1/2 top-12 sm:top-20 md:top-28 lg:top-36 w-[90%] sm:w-[80%] md:w-[700px] lg:w-[800px] xl:w-[864px] mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] text-[#021D49] font-sansita font-extrabold text-center leading-tight sm:leading-snug mb-3 sm:mb-4">
            Gələcəyin məhsulu birgə əməkdaşlıqda gizlidir.
          </h2>
          <p className="font-['Poppins'] text-sm sm:text-base md:text-lg lg:text-[20px] font-medium w-full sm:w-[90%] md:w-[480px] mx-auto text-center mb-6 sm:mb-8">
            Frutena ilə əməkdaşlıq sadəcə bir layihə deyil, bir dəyərin
            yetişdirilməsidir.
          </p>

          <div className="flex justify-center items-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-center bg-[#FF9F19] text-white font-[500] font-['Poppins'] text-sm sm:text-base md:text-lg lg:text-[18px] px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-3xl transition-transform hover:scale-105"
            >
              Birlikdə Başlayaq
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#021D49] text-white">
        <div className="max-w-9xl px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 mx-auto py-6 sm:py-8 md:p-6 space-y-6 sm:space-y-8 md:space-y-10">
          {/* Contact Info & Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-center gap-3 sm:gap-4 flex-wrap">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-4">
                  <div className="font-semibold text-white whitespace-nowrap">{contact.label}</div>
                  <div>{contact.value}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-1 sm:gap-2 justify-center sm:justify-end">
              {socialLinks.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform hover:scale-110"
                  aria-label={`Follow us on ${item.id}`}
                >
                  <img
                    src={item.image}
                    alt={item.id}
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Logo Divider */}
          <img
            src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1763728612/name_dgb1sl.png"
            alt="Frutena"
            className="border-b-2 w-full border-[#919191] pb-6 sm:pb-8 md:pb-12"
          />

          {/* Copyright & Powered By */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 text-xs sm:text-sm md:text-[14px] text-white">
            <p className="text-center sm:text-left">
              Frutena © {new Date().getFullYear()}. Bütün hüquqları qorunur
            </p>
            <div className="flex flex-col items-center sm:items-end gap-1 sm:gap-2">
              <p className="text-xs sm:text-sm">powered by</p>
              <img
                src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1763729244/Group_dk9yqo.svg"
                alt="Powered by Frutena"
                className="h-3 sm:h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
