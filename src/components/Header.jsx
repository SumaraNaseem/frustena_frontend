import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import headerBackground6 from '../assets/headerBackground6.png'

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/djlpb1ld5/image/upload/v1763811496/background_1_vpbibh.png',
    title: 'Qida istehsalçıları üçün sabit keyfiyyət və etibarlı tədarük təmin edirik.',
    description: 'Quba bağlarından seçilən meyvələri, müasir texnologiya ilə pürelərə və konsentratlara çeviririk.',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/djlpb1ld5/image/upload/v1763806200/background_cd6v6u.png',
    title: 'Təbii keyfiyyət və müasir texnologiya',
    description: 'Seçilmiş meyvələrdən yüksək keyfiyyətli konsentratlar istehsal edirik.',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/djlpb1ld5/image/upload/v1764003239/slider-img_zj1yup.png',
    title: 'Etibarlı tərəfdaşlıq və sabit tədarük',
    description: 'İstehsalçılar üçün daimi və keyfiyyətli xammal təminatı.',
  },
]

export default function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    arrows: false,
    customPaging: () => (
      <div className="h-0.5 sm:h-1 md:h-1 lg:h-1.5 w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10 rounded-full bg-white/50 transition-all duration-300" />
    ),
  }

  return (
    <div className="relative py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-32">
      {/* Hero Section with Dark Background */}
      <div className="header-hero-section relative flex items-center justify-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[650px] 2xl:min-h-[700px] pb-[140px] sm:pb-[160px] md:pb-[200px] lg:pb-[180px] xl:pb-[160px]">
        {/* Abstract Background Shapes */}
        <div className="w-full max-w-[1000px] flex items-center justify-center relative mx-auto">
          <div className="flex items-center justify-center w-full relative">
            <img 
              src={headerBackground6} 
              alt="Header Background" 
              className="w-full h-auto object-cover rounded-lg sm:rounded-xl md:rounded-2xl" 
            />

            {/* Hero Content */}
            <div className="absolute inset-0 top-4 sm:top-6 md:top-8 lg:top-12 xl:top-16 2xl:top-20 z-10 max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 text-[#021D49] font-['Poppins'] leading-tight px-2 sm:px-4">
                Meyvə Bağından Sənayeyə
              </h1>
              <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-12 max-w-3xl mx-auto leading-relaxed text-[#021D49] font-['Poppins'] px-2 sm:px-4 md:px-6">
                Təbii yetişdirilmiş meyvələrin saf dadın istehsalat proseslərində olduğu kimi qoruyuruq. 
                Məhsulunuz üçün etibarlı və təmiz xammal təqdim edirik
              </p>

              <Link
                to="/products"
                className="inline-block bg-[#FF9F19] hover:bg-[#FF8C00] text-white font-semibold font-['Poppins'] py-2 sm:py-2.5 md:py-2.5 lg:py-3 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Məhsullar
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Slider Card */}
        <div className="header-slider-container absolute inset-x-0 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] md:w-[85%] lg:w-[82%] xl:w-[78%] 2xl:w-[75%] max-w-7xl rounded-xl sm:rounded-2xl z-20">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="relative w-full">
                <div className="relative w-full">
                  <img 
                    src={slide.image} 
                    alt="Frutena Slider" 
                    className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[600px] rounded-xl sm:rounded-2xl object-cover"
                    style={{ display: 'block' }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/10 rounded-xl sm:rounded-2xl" />

                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 2xl:py-12">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] font-semibold text-[#021D49] font-['Poppins'] leading-snug max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
                      {slide.title}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-[#021D49] font-['Poppins'] max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Slider Dots Styling */}
      <style>{`
        /* Slider Container Positioning - Mobile First */
        .header-slider-container {
          bottom: -40px !important;
        }
        
        /* Custom positioning for 440px screens */
        @media (min-width: 440px) and (max-width: 639px) {
          .header-slider-container {
            bottom: -30px !important;
          }
          .header-hero-section {
            padding-bottom: 150px !important;
          }
        }
        
        /* Extra spacing for common small breakpoints */
        @media (min-width: 375px) {
          .header-slider-container {
            bottom: 40px !important;
          }
        }
        @media (min-width: 425px) {
          .header-slider-container {
            bottom: 130px !important;
          }
        }
        @media (min-width: 485px) {
          .header-slider-container {
            bottom: 130px !important;
          }
        }

        /* Small screens (640px+) */
        @media (min-width: 640px) {
          .header-slider-container {
            bottom: -20px !important;
          }
        }
        
        /* Medium screens (768px+) */
        @media (min-width: 768px) {
          .header-slider-container {
            bottom: 290px !important;
          }
        }
        
        /* Large screens (1024px+) */
        @media (min-width: 1024px) {
          .header-slider-container {
            bottom: 290px !important;
          }
        }
        
        /* Extra large screens (1280px+) */
        @media (min-width: 1280px) {
          .header-slider-container {
            bottom: 200px !important;
          }
        }
        
        /* 2XL screens (1536px+) */
        @media (min-width: 1536px) {
          .header-slider-container {
            bottom: 140px !important;
          }
        }

        .slick-slider {
          margin: 0 !important;
        }
        .slick-list {
          margin: 0 !important;
          padding: 0 !important;
        }
        .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }
        .slick-slide {
          height: auto !important;
        }
        .slick-slide > div {
          height: 100% !important;
        }
        .slick-dots {
          position: absolute !important;
          bottom: 12px !important;
          left: 8px !important;
          display: flex !important;
          flex-direction: row !important;
          gap: 5px !important;
          width: auto !important;
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
          z-index: 30 !important;
        }
        @media (min-width: 640px) {
          .slick-dots {
            bottom: 16px !important;
            left: 12px !important;
            gap: 6px !important;
          }
        }
        @media (min-width: 768px) {
          .slick-dots {
            bottom: 18px !important;
            left: 16px !important;
            gap: 7px !important;
          }
        }
        @media (min-width: 1024px) {
          .slick-dots {
            bottom: 24px !important;
            left: 18px !important;
            gap: 8px !important;
          }
        }
        @media (min-width: 1280px) {
          .slick-dots {
            bottom: 30px !important;
            left: 20px !important;
          }
        }
        .slick-dots li {
          width: auto !important;
          height: auto !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .slick-dots li button {
          display: none !important;
        }
        .slick-dots li.slick-active div {
          background-color: #FF9F19 !important;
        }
        .slick-dots li:not(.slick-active) div {
          background-color: rgba(255, 255, 255, 0.7) !important;
        }
        .slick-dots li div {
          width: 24px;
          height: 3px;
          border-radius: 9999px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        @media (min-width: 640px) {
          .slick-dots li div {
            width: 28px;
            height: 4px;
          }
        }
        @media (min-width: 768px) {
          .slick-dots li div {
            width: 32px;
            height: 4px;
          }
        }
        @media (min-width: 1024px) {
          .slick-dots li div {
            width: 36px;
            height: 5px;
          }
        }
        @media (min-width: 1280px) {
          .slick-dots li div {
            width: 40px;
            height: 6px;
          }
        }
        .slick-dots li.slick-active div {
          width: 24px !important;
        }
        @media (min-width: 640px) {
          .slick-dots li.slick-active div {
            width: 28px !important;
          }
        }
        @media (min-width: 768px) {
          .slick-dots li.slick-active div {
            width: 32px !important;
          }
        }
        @media (min-width: 1024px) {
          .slick-dots li.slick-active div {
            width: 36px !important;
          }
        }
        @media (min-width: 1280px) {
          .slick-dots li.slick-active div {
            width: 40px !important;
          }
        }
      `}</style>
    </div>
  )
}
