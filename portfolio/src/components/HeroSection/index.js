import React, {useState} from 'react';
import Video from '../../Videos/video.mp4';
import {Button} from "../ButtonElement";
import {HeroContainer, Herobg, Videobg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <Herobg>
                <Videobg autoPlay loop muted src={Video} type='video.mp4'/>
            </Herobg>
            <HeroContent>
                <HeroH1>Mongolmaa Gurbazar</HeroH1>
                    <HeroP>I'm full stack web developer</HeroP>
                         <HeroBtnWrapper>
                                <Button to='project' onMouseEnter={onHover} onMouseLeave={onHover}
                                primary='true' dark='true'>
                                Project {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button>    
                    </HeroBtnWrapper>
         </HeroContent>
        </HeroContainer>
        
    )
}

export default HeroSection