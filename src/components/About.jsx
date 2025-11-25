import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-white py-8 sm:py-10 md:py-12  mt-4 md:-mt-[320px] lg:-mt-[351px] xl:-mt-[130px] lg:py-16 ">
      <div className="px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32">
        {/* Section Title/Indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center bg-gray-100 rounded-3xl px-3 py-1 gap-2 font-['Poppins']">
            <span className="bg-white py-1 px-2 sm:px-[10.5px] rounded-full text-xs sm:text-sm font-medium">
              01
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-[20px] text-gray-600 font-medium">
              Haqqımızda
            </span>
          </div>
        </div>

        {/* Main Text Block */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-10 max-w-[53rem] mx-auto">
          <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-['Poppins']">
            Frutena olaraq məqsədimiz, meyvənin saf dadını gündəlik qidalanma və içki istehsal proseslərinə yüksək standartlarla çatdırmaqdır. 
            İstehsal etdiyimiz alma konsentratı yerli və beynəlxalq içki, qida və şirniyyat sənayesində istifadə üçün ideal xammaldır. 
            Məhsulumuzun hər damlası yüksək dərəcədə seçilmiş, sağlam və təbii almalardan hazırlanır. 
            İstehsal prosesimizdə şəkərsiz, qatqısız, rəngləndiricisiz və tamamilə təbiətin öz dadını qoruyan üsullardan istifadə edirik.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block bg-white border-2 border-gray-800 text-gray-900 font-medium font-['Poppins'] py-2 sm:py-2.5 md:py-3 px-6 sm:px-8 md:px-10 rounded-3xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg"
          >
            Daha Ətraflı
          </Link>
        </div>

      </div>
    </div>
  )
}
