import React, {useState} from 'react'
import SideBar from '../components/SideBar';
import NavBar from '../components/Nav';
import HeroSection from '../components/HeroSection';
import Project from '../components/Project/';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
           
        </>
    )
}

export default Home
