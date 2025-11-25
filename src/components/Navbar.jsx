import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'
import globeIcon from '../assets/globeIcon.png'
import tittle from '../assets/tittle.png'

const navLinks = [
  { path: '/', label: 'Əsas' },
  { path: '/about', label: 'Haqqımızda' },
  { path: '/products', label: 'Məhsullar' },
  // { path: '/news', label: 'Xəbərlər' },
  { path: '/news', label: 'Media Mərkəzi' },
  { path: '/contact', label: 'Əlaqə' },
]

const languages = [
  { code: 'EN', label: 'EN' },
  { code: 'AZ', label: 'AZ' },
]

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('EN')
  const location = useLocation()
  
  const isProductsPage = location.pathname === '/products'
  const isNewsPage = location.pathname === '/news'
  const isTransparentNav = isProductsPage || isNewsPage

  const handleLanguageSelect = (langCode) => {
    setSelectedLang(langCode)
    setIsLangOpen(false)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={isTransparentNav ? 'bg-transparent absolute top-0 left-0 right-0 z-50' : 'bg-white'}>
      <div className="px-4 sm:px-6 md:px-12 lg:px-18 xl:px-32">
        <div className={`grid grid-cols-12 items-center py-3 sm:py-4 md:py-6 gap-6 sm:gap-4 ${isTransparentNav ? 'border-transparent' : 'border-gray-200 border-b-2'}`}>
          {/* Logo Section (Left) */}
          <div className="col-span-6 sm:col-span-3 flex items-center">
            <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={handleLinkClick}>
              <img 
                src={logo} 
                alt="Logo Icon" 
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-[47px] md:h-[47px] ${isTransparentNav ? 'brightness-0 invert' : ''}`} 
              />
              <img 
                src={tittle} 
                alt="Frutena Title" 
                className={`hidden sm:block w-32 sm:w-40 md:w-[168px] h-auto md:h-[27px] ${isTransparentNav ? 'brightness-0 invert' : ''}`} 
              />
            </Link>
          </div>

          {/* Navigation Links (Center) - Desktop */}
         <div className={`col-span-6 sm:col-span-7 lg:col-span-7 hidden lg:flex items-center justify-center gap-6 xl:gap-[5rem] font-['Poppins'] text-sm md:text-base lg:text-[16px] font-semibold ${isTransparentNav ? 'text-white' : 'text-gray-800'}`}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive 
                      ? isTransparentNav ? 'text-white underline text-nowrap' : 'text-[#021D49] underline'
                      : isTransparentNav ? 'hover:text-white/80 text-nowrap' : 'text-[#021D49] text-nowrap'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div> 

          {/* Language Selector & Mobile Menu Button (Right) */}
           <div className="col-span-6 sm:col-span-9 lg:col-span-2 flex items-center justify-end gap-2 sm:gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1 sm:gap-2 font-['Poppins'] text-sm sm:text-base md:text-[16px] font-semibold ${isTransparentNav ? 'text-white' : 'text-gray-800'}`}
              >
                <img 
                  src={globeIcon} 
                  alt="Globe Icon" 
                  className={`w-4 h-4 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] ${isTransparentNav ? 'brightness-0 invert' : ''}`} 
                />
                <span className="hidden sm:inline">{selectedLang}</span>
                <svg
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''} ${isTransparentNav ? 'text-white' : 'text-gray-800'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

             
              {isLangOpen && (
                <div className="absolute right-0 top-full mt-2 w-24 sm:w-32 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`block w-full text-left px-3 sm:px-4 py-2 text-[#021D49] text-xs sm:text-sm hover:bg-gray-100 font-medium ${
                        selectedLang === lang.code ? 'bg-gray-50' : ''
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

           
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 ${isTransparentNav ? 'text-white' : 'text-gray-800'}`}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''} ${isTransparentNav ? 'bg-white' : 'bg-gray-800'}`}></span>
              <span className={`block w-6 h-0.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''} ${isTransparentNav ? 'bg-white' : 'bg-gray-800'}`}></span>
              <span className={`block w-6 h-0.5 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${isTransparentNav ? 'bg-white' : 'bg-gray-800'}`}></span>
            </button>
          </div> 
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={handleLinkClick}
        />
      )}

      {/* Mobile Drawer - Slides from Right */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 sm:w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="font-['Poppins'] text-lg font-semibold text-[#021D49]">Menu</h2>
          <button
            onClick={handleLinkClick}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-4 font-['Poppins'] text-base font-semibold">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`transition-colors px-4 py-3 rounded-md ${
                  isActive 
                    ? 'text-[#021D49] bg-gray-100 underline' 
                    : 'text-gray-800 text-[#021D49] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
