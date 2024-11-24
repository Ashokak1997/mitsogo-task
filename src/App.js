import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Section5 from './Component/Section5';
import Section6 from './Component/Section6';
import Footer from './Component/footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Section1 />
     <Header />
     <Section2 />
     <Section3 />
     <Section4 />
     <Section5 />
     <Section6 />
     <Footer />
    </div>
  );
}

export default App;
