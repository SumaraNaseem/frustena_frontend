import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/Image5.png";
import image6 from "../assets/Image6.png";

const benefitsData = [
  {
    title: "Saxlama Sistemi",
    description: "İstehsaldan sonrakı keyfiyyəti qorumaq üçün müasir saxlama infrastrukturuna sahibik.",
    icon: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1764015082/icon_4_mdnbjn.png",
  },
  {
    title: "Qlobal Əhatə",
    description: "Hazırda yerli bazarda etibarlı tərəfdaşlıq əlaqələri qurur, eyni zamanda beynəlxalq bazarlara çıxış üçün aktiv hazırlıqlar aparırıq.",
    icon: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1764015081/icon_n9p1ss.png",
  },
  {
    title: "Planlaşdırma və Çatdırılma",
    description: "Yüksək koordinasiyalı logistika sistemimiz sayəsində sifarişdən çatdırılmaya qədər olan bütün mərhələlər effektiv şəkildə idarə olunur.",
    icon: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1764015081/icon_1_jbvnq1.png",
  },
  {
    title: "Keyfiyyətə Nəzarət",
    description: "Hər bir məhsul Frutena laboratoriyalarında çoxmərhələli testlərdən keçir.",
    icon: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1764015082/icon_3_tee5wu.png",
  },
  {
    title: "Müştəri Əməkdaşlığı",
    description: "Bizimlə əməkdaşlıq yalnız məhsul alış-verişi deyil, qarşılıqlı inkişaf münasibətidir.",
    icon: "https://res.cloudinary.com/djlpb1ld5/image/upload/v1764015082/icon_2_iuxcbo.png",
  },
];

const clientImages = [image3, image6, image5, image4, image1, image2];

function BenifitsClints() {
  return (
    <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32">
        {/* Benefits Section */}
        <div className="inline-flex items-center bg-gray-100 rounded-3xl px-3 py-1 mb-4 sm:mb-6 gap-2 font-['Poppins']">
          <span className="bg-white p-1 rounded-full text-xs sm:text-sm font-medium">
            03
          </span>
          <span className="text-xs sm:text-sm md:text-base text-black font-medium">
            Frutena fərqi
          </span>
        </div>

        <div className="mb-6 sm:mb-8 md:mb-10 w-full max-w-[800px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-[600] font-['Poppins'] leading-[40px] sm:leading-[45px] md:leading-[3.5rem] lg:leading-[3.5rem] xl:leading-[3.5rem] text-gray-900">
            Meyvənin dəyərini qorumaq bizim işimizdir.
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] p-2 bg-[#021D49] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-[22px] font-[600] font-['Poppins'] text-gray-800 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base md:text-[16px] font-[400] font-['Poppins'] text-gray-800 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section Header */}
        <div className="text-center flex justify-center items-center mt-8 sm:mt-10 md:mt-12">
          <div className="inline-flex items-center bg-gray-100 rounded-3xl px-3 py-1 gap-2 font-['Poppins']">
            <span className="bg-white p-1 rounded-full text-xs sm:text-sm font-medium">
              04
            </span>
            <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              Bizə Güvənənlər
            </span>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {clientImages.map((image, index) => (
            <div key={index} className="flex w-full h-full aspect-square bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden">
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="object-contain w-full h-full p-2 sm:p-3 md:p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BenifitsClints;
