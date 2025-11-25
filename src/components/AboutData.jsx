import CercularBackground from '../assets/CercularBackground.png'

const stats = [
  {
    number: "2500+",
    description: "Gündə emal olunan alma sayı"
  },
  {
    number: "12000 m²",
    description: "Ümumi istehsal sahəsi"
  },
  {
    number: "5",
    description: "Yaxın zamanda təqdim ediləcək yeni məhsul çeşidi"
  },
  {
    number: "100%",
    description: "Qatqısız, şəkərsiz, təbii məhsul"
  }
];

// Circular Design Component (12 segments) - Background Image
const CircularIcon = () => (
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 opacity-20 sm:opacity-30">
    <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
      <g>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30) - 90; // 30 degrees per segment, starting from top
          return (
            <path
              key={i}
              d={`M 50 50 L ${50 + 35 * Math.cos((angle * Math.PI) / 180)} ${50 + 35 * Math.sin((angle * Math.PI) / 180)} A 35 35 0 0 1 ${50 + 35 * Math.cos(((angle + 30) * Math.PI) / 180)} ${50 + 35 * Math.sin(((angle + 30) * Math.PI) / 180)} Z`}
              fill="#d1d5db"
              className="rounded-sm"
            />
          );
        })}
      </g>
    </svg>
  </div>
);

export default function AboutData() {
  return (
    <div className="bg-[#FF9F19] relative h-[620px]">
      <div className="z-10 px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Badge Section */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center bg-[#E9E9E9] rounded-3xl px-3 py-1 gap-2 font-['Poppins']">
            <span className="bg-white p-1 rounded-full text-xs sm:text-sm font-medium">
              02
            </span>
            <span className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
              Frutena rəqəmlərlə
            </span>
          </div>
        </div>

        {/* Heading Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 w-full max-w-[800px]">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-[600] font-['Poppins'] leading-[40px] sm:leading-[45px] md:leading-[3.5rem] lg:leading-[3.5rem] xl:leading-[3.5rem] ">
            Təbiətin dəyərlərinin rəqəmlərlə ifadə edirik
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:mt-[138px] sm:grid-cols-2  lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x-[0.5px] divide-gray-200/50 sm:divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="pl-0 sm:pl-4 lg:pl-6 pt-4 sm:pt-0 first:pt-0">
              <div className="mb-2 sm:mb-3 md:mb-4">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-['Poppins'] font-bold text-white leading-tight block">
                  {stat.number}
                </span>
              </div>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-[20px] font-medium font-['Poppins'] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[900px] h-full overflow-hidden opacity-50 sm:opacity-70">
        <img 
          src={CercularBackground} 
          alt="About Data Background" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  )
}
