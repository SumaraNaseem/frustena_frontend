import { Link } from "react-router-dom";
import StoryImage1 from "../assets/StoryImage1.png";
import StoryImage2 from "../assets/StoryImage2.png";
import StoryImage3 from "../assets/StoryImage3.png";

const stories = [
  {
    id: 1,
    image: StoryImage1,
    title: "Yeni məhsul xəttimiz: Təmiz alma püresi",
    url: "/news/frutena-tabiete",
  },
  {
    id: 2,
    image: StoryImage2,
    title: "Frutena-nın təbiətə sadiq istehsalı",
    url: "/news/frutena-tabiete",
  },
  {
    id: 3,
    image: StoryImage3,
    title: "İlk tərəfdaşlıq müqaviləmiz imzalandı",
    url: "/news/frutena-tabiete",
  },
];

export default function News() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[760px] flex items-center pt-16 sm:pt-18 md:pt-20">
        <img
          src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1763811496/background_1_vpbibh.png"
          alt="Frutena Newsroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full  mx-auto px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex lg:relative flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12">
            {/* Left Section - Badge & Heading */}
            <div className="flex-1 text-white">
              <div
               
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center bg-gray-100 rounded-3xl mb-4 sm:mb-6 px-3 py-1 gap-2 font-['Poppins'] font-[400] text-sm sm:text-base md:text-lg lg:text-[20px] hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <span className="bg-white text-gray-900 py-1 px-[10.5px] rounded-full text-xs sm:text-sm">01</span>
                <span className="text-black">Frutena Newsroom</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-['Poppins'] font-semibold leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] text-left text-white [word-spacing:0.2em]">
                Frutena-dan xəbərlər və yeniliklər
              </h1>
            </div>

            {/* Right Section - Description */}
            <div className="flex-1 lg:absolute lg:left-[40%] max-w-[589px] lg:mt-[160px]">
              <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-['Poppins'] font-medium leading-relaxed sm:leading-[28px] md:leading-[30px] tracking-[0.2px] text-white/80 text-left [word-spacing:0.2em]">
                Məhsullarımız, istehsal prosesi, bazar fəaliyyətimiz və şirkət xəbərləri barədə ən son məlumatları buradan izləyin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-52 py-12 sm:py-16 md:py-20 gap-6 sm:gap-8">
        {stories.map((story) => (
          <article key={story.id} className="flex flex-col">
            <Link
              to={story.url}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden mb-4 sm:mb-6 rounded-[20px] block"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full rounded-[20px] object-cover"
              />
            </Link>

            <h3 className="text-lg sm:text-xl md:text-[22px] font-semibold font-['Poppins'] leading-tight sm:leading-[100%] tracking-normal mb-3 sm:mb-4 text-gray-900">
              {story.title}
            </h3>
            <Link
              to={story.url}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm sm:text-base md:text-[16px] font-[400] font-['Poppins'] hover:underline text-[#021D49] transition-colors inline-flex items-center gap-1"
            >
              Ətraflı
              <span aria-hidden="true" className="transition-transform hover:translate-x-1">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
