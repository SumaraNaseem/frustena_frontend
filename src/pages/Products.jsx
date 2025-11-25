import { Link } from "react-router-dom";
import ProductImage from "../assets/Image1.png";
import StoryImage1 from "../assets/StoryImage1.png";
import StoryImage2 from "../assets/StoryImage2.png";
import StoryImage3 from "../assets/StoryImage3.png";

const products = [
  {
    id: 1,
    image: StoryImage1,
    title: "Frutena Alma Konsentratı",
    description: "Seçilmiş Quba almalarından istehsal olunan Frutena alma konsentratı tərkibində əlavə şəkər və süni qatqılar olmadan hazırlanır. Təbii rəngi, aroması və dadı ilə içkilərdən desertlərə qədər bir çox məhsul üçün ideal tərkib hissəsidir.",
    url: "/news/frutena-tabiete",
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[790px] flex items-center pt-16 sm:pt-18 md:pt-20">
        <img
          src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1763806200/background_cd6v6u.png"
          alt="Frutena Products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 space-y-4 sm:space-y-5 md:space-y-6 text-center w-full max-w-7xl">
          <div
            
            className="inline-flex items-center bg-gray-100 rounded-3xl px-3 py-1 gap-2 font-['Poppins'] font-[400] text-sm sm:text-base md:text-lg lg:text-[20px] hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <span className="bg-white py-1 px-[10.5px] rounded-full text-xs sm:text-sm">01</span>
            <span className="text-gray-600">Məhsullar</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-['Poppins'] font-semibold leading-tight sm:leading-[45px] md:leading-[57px] tracking-[-0.8px] text-center text-white">
            Hər damlada təbiətin gücü
          </h1>
          <p className="font-medium text-center text-sm sm:text-base md:text-lg lg:text-[20px] font-['Poppins'] leading-relaxed sm:leading-[28px] md:leading-[30px] tracking-[0.2px] w-full max-w-[618px] mx-auto text-white/80 px-4">
            Frutena meyvə konsentratları təbiətin təmizliyini müasir
            texnologiyalarla birləşdirir. Seçilmiş meyvələrdən alınan yüksək
            keyfiyyətli konsentratlarımız içkilər, qida məhsulları və sənaye
            istehsalında etibarlı tərkib hissəsidir.
          </p>
        </div>
      </section>

      {/* Product highlight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 py-12 sm:py-16 md:py-20 gap-6 sm:gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            to="/products/frutena-alma"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          >
            <article className="flex flex-col">
              <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] mb-4 sm:mb-6 overflow-hidden rounded-[20px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full rounded-[20px] object-cover"
                />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-[25px] font-[600] text-gray-900 font-['Poppins'] leading-tight mb-3 sm:mb-4 text-left">
                {product.title}
              </h3>
              <p className="font-['Poppins'] font-normal text-base sm:text-lg md:text-[20px] text-justify text-gray-600 [word-spacing:0.2em] leading-relaxed">
                {product.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
