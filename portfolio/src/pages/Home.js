import React , { useState }from 'react'
import HeroSection from '../components/HeroSection/Hero';
import Info from '../components/InfoSection/InfoSection';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'
import { homeObj } from '../components/InfoSection/Data';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';




const Home = () => {

    const[ isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/>
          <HeroSection />
         <Info {...homeObj} />
         <Projects />
       <Footer />
        
        </>
    );
};

export default Home
