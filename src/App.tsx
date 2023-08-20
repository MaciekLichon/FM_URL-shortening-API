import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Shortener from './components/Shortener/Shortener';
import Statistics from './components/Statistics/Statisctics';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
};

export default App;