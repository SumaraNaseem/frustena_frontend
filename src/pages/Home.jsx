import Header from '../components/Header'
import About from '../components/About'
import AboutData from '../components/AboutData'
import BenifitsClints from '../components/Benifits&Clints'
import NewsStories from '../components/NewsStories'

export default function Home() {
  return (
    <div className="">
      <Header  />
      <About />
      <AboutData />
      <BenifitsClints />
      <NewsStories />
    </div>
  )
}

