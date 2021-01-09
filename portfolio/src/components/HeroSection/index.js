import React from 'react'
import Video from '../../Videos/video.mp4'
import {HeroContainer, Herobg, Videobg} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id='home'>
            <Herobg>
                <Videobg autoPlay loop muted src={Video} type='video.mp4'/>
            </Herobg>
        </HeroContainer>
    )
}

export default HeroSection