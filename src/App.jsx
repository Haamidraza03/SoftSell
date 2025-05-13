import './App.css'
import ChatBot from './components/ChatBot';
import Contact from './components/Contact';
import CustTest from './components/CustTest';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';

function App() {
  useEffect(()=>{
    AOS.init({once:"true"});
  },[])

  return (
    <>
      <div>
        <Navbar/>
        <ChatBot/>
        <Hero/>
        <HowItWorks/>
        <WhyChooseUs/>
        <CustTest/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
