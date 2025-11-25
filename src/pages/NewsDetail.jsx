import { Link } from "react-router-dom";
import { useEffect } from "react";
import StoryImage1 from "../assets/StoryImage1.png";
import StoryImage2 from "../assets/StoryImage2.png";
import StoryImage3 from "../assets/StoryImage3.png";



export default function NewsDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
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
  return (
    <div className="bg-white">
      <article className="py-6 sm:py-8 md:py-10 lg:py-12 space-y-6 sm:space-y-8 md:space-y-10">
        <header className="space-y-3 sm:space-y-4 text-center bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-6">
          <p className="text-xs sm:text-[27px] text-black">8 Sentyabr, 2025</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-2 sm:pt-3 font-semibold text-[#021D49] leading-tight sm:leading-normal">
            Frutena-nın təbiətə <br className="hidden sm:block"/>sadiq istehsalı
          </h1>
        </header>

        <div className="relative w-full px-0">
          <img
            src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1763811942/Rectangle_11_kjhi3k.png"
            alt="Frutena Farm"
            className="w-full h-auto object-cover"
          />
          
        </div>

        <div className="space-y-6 sm:space-y-8 px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-left">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#021D49]">Frutena-nın təbiətə sadiq istehsalı</h2>
            <p className="text-sm sm:text-base font-normal text-[#021D49] leading-relaxed">
              Frutena üçün "təbii" sözünün mənası sadəcə dadla məhdudlaşmır. Bizim üçün bu, məhsulun yetişdiyi torpaqdan başlayaraq qablaşdırmaya qədər davam edən bir məsuliyyət zənciridir.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#021D49]">Təbiətdən gələn keyfiyyət</h2>
            <p className="text-sm sm:text-base font-normal text-[#021D49] leading-relaxed">
              Frutena alma konsentratının istehsalında istifadə olunan bütün xammal, diqqətlə seçilmiş, pestisidsiz və təbii şəraitdə yetişdirilmiş meyvələrdən əldə olunur. Məhsullarımızın dadı və rəngi, tamamilə təbiətin öz balansını qorumaq prinsipi üzərində qurulub.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#021D49]">Ekoloji istehsal prosesi</h2>
            <p className="text-sm sm:text-base font-normal text-[#021D49] leading-relaxed">
              İstehsal mərhələsində biz enerjiyə qənaət edən texnologiyalar, suyun təkrar istifadəsi və tullantıların minimuma endirilməsi prinsiplərini tətbiq edirik. Frutena zavodları, beynəlxalq ekoloji standartlara cavab verən avadanlıqlarla təchiz olunub. Bu, həm məhsulun təmizliyini, həm də ətraf mühitin qorunmasını təmin edir.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#021D49]">Tullantısız yanaşma</h2>
            <p className="text-sm sm:text-base font-normal text-[#021D49] leading-relaxed">
              Almadan əldə edilən hər damla bizim üçün dəyərlidir. İstehsal zamanı yaranan təbii yan məhsullar — məsələn, alma qabıqları və pulpası — heyvandarlıqda və üzvi gübrə istehsalında istifadə olunur. Beləcə, təbiətə verdiyimizi yenidən təbiətə qaytarırıq.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#021D49]">Məhsulun təbii balansını qorumaq</h2>
            <p className="text-sm sm:text-base font-normal text-[#021D49] leading-relaxed">
              Biz məhsullarımıza süni rəng və dadvericilər əlavə etmirik. Frutena konsentratı təbii meyvənin öz tərkibini, qida dəyərini və dad harmoniyasını qoruyaraq istehsal edilir. Bu, həm istehlakçıların sağlamlığı, həm də təbiətin balansı üçün vacibdir.
            </p>
          </div>

          <p className="text-xl sm:text-2xl pt-12 sm:pt-16 md:pt-20 text-center font-bold text-[#021D49]">Digər məqalələrimizə nəzər yetirin</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-12 sm:py-16 md:py-20 gap-4 sm:gap-6 md:gap-8">
            {stories.map((story) => (
              <article
                key={story.id}
                className="flex flex-col"
              >
                <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] rounded-3xl overflow-hidden mb-3 sm:mb-4">
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
                  className="text-sm sm:text-base md:text-[16px] font-[400] font-['Poppins'] hover:underline text-[#021D49] transition-colors inline-flex items-center gap-1"
                >
                  Ətraflı
                  <span aria-hidden="true" className="transition-transform hover:translate-x-1">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
