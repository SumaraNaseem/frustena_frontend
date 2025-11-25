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

function NewsStories() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32">
        {/* Badge Section */}
        <div className="inline-flex items-center bg-gray-100 rounded-3xl px-3 py-1 mb-4 sm:mb-6 gap-2 font-['Poppins']">
          <span className="bg-white p-1 rounded-full text-xs sm:text-sm font-medium">
            05
          </span>
          <span className="text-xs sm:text-sm md:text-base text-black font-medium">
            Xəbərlər və Hekayələr
          </span>
        </div>

        {/* Header Section */}
        <div className="max-w-3xl mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-['Poppins'] text-[#021D49] leading-tight sm:leading-[35px] md:leading-9 mb-3 sm:mb-4">
            Frutena-nın dünyasından yeniliklər və ilham verən yazılar
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
            Brendimizin pərdəarxası hekayələri, məhsul yenilikləri və tərəfdaşlıq
            daş-qoşmalarını izləyin.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stories.map((story) => (
            <article key={story.id} className="flex flex-col">
              <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden mb-3 sm:mb-4">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg sm:text-xl md:text-[22px] font-semibold font-['Poppins'] leading-tight sm:leading-[100%] tracking-normal mb-3 sm:mb-4 text-gray-900">
                {story.title}
              </h3>
              <Link
                to={story.url}
                className="text-sm sm:text-base md:text-[16px] font-[400] font-['Poppins'] hover:underline text-[#021D49] transition-colors inline-flex items-center gap-1 group"
              >
                Ətraflı
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsStories;
