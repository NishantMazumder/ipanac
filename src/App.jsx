import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import FeatureSection from './featuresection.jsx';
import Workflow from './WhyChoose.jsx';
import Head from './head.jsx';
import Footer from './footer.jsx';
import About from './about.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className='max-w-7xl mx-auto pt-20 x-6'>
            <Head />
            <Workflow />
            <FeatureSection />
            <Footer />
          </div>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
