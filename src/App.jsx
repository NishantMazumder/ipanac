import Navbar from './navbar.jsx';
// import Hero from './hero.jsx';
import FeatureSection from './featuresection.jsx'
import Workflow from './WhyChoose.jsx';
import Head from './head.jsx';
import Footer from './footer.jsx';
function App() {

  return (
    <>
      <Navbar/>
      <div className='max-w-7xl mx-auto pt-20 x-6'>
        <Head/>
        <Workflow/>
        <FeatureSection/>
        <Footer/>
        
      </div>

    
    </>
  )
}

export default App
